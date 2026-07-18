import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAdmin } from '../../common/AdminContext';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import ProjectModal from '../../common/ProjectModal';
import { useReveal } from '../../common/useReveal';
import Portal from '../../common/Portal';
import Crown from '../../common/Crown';

function Projects() {
  const { isAdmin } = useAdmin();
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [ref, revealed] = useReveal();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const loadedProjects = querySnapshot.docs.map((d) => ({
        ...d.data(),
        firestoreId: d.id,
      }));

      loadedProjects.sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return 0;
      });

      setProjects(loadedProjects);
    } catch (error) {
      console.error('Error loading projects:', error);
      setProjects([]);
    }
  };

  const togglePin = async (project) => {
    try {
      await updateDoc(doc(db, 'projects', project.firestoreId), {
        isPinned: !project.isPinned,
      });
      await loadProjects();
    } catch (error) {
      console.error('Error toggling pin:', error);
      alert('Failed to toggle pin');
    }
  };

  const handlePhotoUploaded = async (project, url) => {
    try {
      await updateDoc(doc(db, 'projects', project.firestoreId), { imageUrl: url });
      await loadProjects();
    } catch (error) {
      console.error('Error saving project photo:', error);
      alert('Failed to save photo. Please try again.');
    }
  };

  const handleAddProject = () => {
    setEditingProject({
      title: '',
      shortDesc: '',
      fullDesc: '',
      technologies: [],
      github: '',
      highlights: [],
      category: '',
      status: '',
      conferencePaper: '',
      isPinned: false,
    });
    setShowEditForm(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowEditForm(true);
  };

  const handleSaveProject = async (projectData) => {
    try {
      if (projectData.firestoreId) {
        await updateDoc(doc(db, 'projects', projectData.firestoreId), projectData);
      } else {
        await addDoc(collection(db, 'projects'), projectData);
      }
      await loadProjects();
      setShowEditForm(false);
      setEditingProject(null);
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Failed to save project');
    }
  };

  const handleDeleteProject = async (firestoreId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteDoc(doc(db, 'projects', firestoreId));
        await loadProjects();
      } catch (error) {
        console.error('Error deleting project:', error);
        alert('Failed to delete project');
      }
    }
  };

  return (
    <section
      id="projects"
      aria-label="Projects"
      ref={ref}
      className={`${styles.container} ${revealed ? styles.revealed : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          PROJECTS <Crown size={14} color="var(--dc-red)" />
        </div>
        <div className={styles.headingWrap}>
          <h2 className={styles.h2}>Selected work.</h2>
          <div className={styles.underline} />
        </div>

        {isAdmin && (
          <button className={styles.addButton} onClick={handleAddProject}>
            + Add Project
          </button>
        )}

        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <div
              key={project.id || project.firestoreId}
              className={styles.projectWrapper}
              data-pinned={project.isPinned || false}
            >
              {project.isPinned && (
                <Crown size={30} color="var(--dc-yellow)" className={styles.pinnedCrown} />
              )}
              <ProjectCard
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
                onPhotoUploaded={(url) => handlePhotoUploaded(project, url)}
              />
              {isAdmin && (
                <div className={styles.adminControls}>
                  <button onClick={() => handleEditProject(project)}>✏️ Edit</button>
                  {project.firestoreId && (
                    <>
                      <button
                        onClick={() => togglePin(project)}
                        className={project.isPinned ? styles.pinnedButton : ''}
                        title={project.isPinned ? 'Unpin project' : 'Pin project'}
                      >
                        <Crown size={13} color="currentColor" /> {project.isPinned ? 'Pinned' : 'Pin'}
                      </button>
                      <button onClick={() => handleDeleteProject(project.firestoreId)}>🗑️ Delete</button>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {showEditForm && (
        <ProjectEditForm
          project={editingProject}
          onSave={handleSaveProject}
          onCancel={() => {
            setShowEditForm(false);
            setEditingProject(null);
          }}
        />
      )}
    </section>
  );
}

function ProjectEditForm({ project, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    ...project,
    technologies: project.technologies || [],
    highlights: project.highlights || [],
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field, value) => {
    const array = value.split('\n').filter((item) => item.trim());
    setFormData((prev) => ({ ...prev, [field]: array }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Portal>
    <div className={styles.editOverlay} onClick={onCancel}>
      <div className={styles.editForm} onClick={(e) => e.stopPropagation()}>
        <h3>{project.firestoreId ? 'Edit Project' : 'Add New Project'}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              required
            />
          </label>

          <label>
            Short Description:
            <input
              type="text"
              value={formData.shortDesc}
              onChange={(e) => handleChange('shortDesc', e.target.value)}
              required
            />
          </label>

          <label>
            Full Description:
            <textarea
              value={formData.fullDesc}
              onChange={(e) => handleChange('fullDesc', e.target.value)}
              rows={4}
              required
            />
          </label>

          <label>
            Technologies (one per line):
            <textarea
              value={formData.technologies?.join('\n') || ''}
              onChange={(e) => handleArrayChange('technologies', e.target.value)}
              rows={3}
            />
          </label>

          <label>
            GitHub URL:
            <input
              type="url"
              value={formData.github}
              onChange={(e) => handleChange('github', e.target.value)}
            />
          </label>

          <label>
            Highlights (one per line):
            <textarea
              value={formData.highlights?.join('\n') || ''}
              onChange={(e) => handleArrayChange('highlights', e.target.value)}
              rows={4}
            />
          </label>

          <label>
            Category:
            <input
              type="text"
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
            />
          </label>

          <label>
            Status:
            <input
              type="text"
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
            />
          </label>

          <label>
            Attachment URL (Conference Paper):
            <input
              type="url"
              value={formData.conferencePaper || ''}
              onChange={(e) => handleChange('conferencePaper', e.target.value)}
            />
          </label>

          <div className={styles.formButtons}>
            <button type="submit">Save Project</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
    </Portal>
  );
}

export default Projects;
