import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { useAdmin } from '../../common/AdminContext';
import styles from './ExperienceStyles.module.css';

function Experience() {
  const { isAdmin } = useAdmin();
  const [experiences, setExperiences] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingExperience, setEditingExperience] = useState(null);

  useEffect(() => {
    loadExperiences();
  }, []);

  const parseDate = (period) => {
    // Extract the start year from period strings like "September 2025 – Present", "2023 – 2024", etc.
    const match = period.match(/(\w+\s+)?(\d{4})/);
    if (!match) return 0;
    
    const year = parseInt(match[2]);
    const monthStr = match[1]?.trim();
    
    // Map month names to numbers (1-12)
    const months = {
      'January': 1, 'February': 2, 'March': 3, 'April': 4,
      'May': 5, 'June': 6, 'July': 7, 'August': 8,
      'September': 9, 'October': 10, 'November': 11, 'December': 12
    };
    
    const month = monthStr ? (months[monthStr] || 1) : 1;
    return year * 100 + month; // e.g., 202509 for September 2025
  };

  const loadExperiences = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'experiences'));
      const loadedExps = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        firestoreId: doc.id
      }));
      
      // Sort by date (latest first)
      loadedExps.sort((a, b) => parseDate(b.period) - parseDate(a.period));
      
      setExperiences(loadedExps);
    } catch (error) {
      console.error('Error loading experiences:', error);
      setExperiences([]);
    }
  };

  const handleAddExperience = () => {
    setEditingExperience({
      title: '',
      company: '',
      period: '',
      location: '',
      description: [],
      icon: '💼',
      type: 'work'
    });
    setShowEditForm(true);
  };

  const handleEditExperience = (exp) => {
    setEditingExperience(exp);
    setShowEditForm(true);
  };

  const handleSaveExperience = async (expData) => {
    try {
      if (expData.firestoreId) {
        await updateDoc(doc(db, 'experiences', expData.firestoreId), expData);
      } else {
        await addDoc(collection(db, 'experiences'), expData);
      }
      await loadExperiences();
      setShowEditForm(false);
      setEditingExperience(null);
    } catch (error) {
      console.error('Error saving experience:', error);
      alert('Failed to save experience');
    }
  };

  const handleDeleteExperience = async (firestoreId) => {
    if (window.confirm('Delete this experience?')) {
      try {
        await deleteDoc(doc(db, 'experiences', firestoreId));
        await loadExperiences();
      } catch (error) {
        console.error('Error deleting experience:', error);
      }
    }
  };

  return (
    <section id="experience" className={styles.container}>
      <div className={styles.header}>
        <h1 className="sectionTitle">Experience</h1>
        {isAdmin && (
          <button className={styles.addButton} onClick={handleAddExperience}>
            + Add Experience
          </button>
        )}
      </div>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={exp.id || exp.firestoreId} className={styles.timelineItem}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>{exp.icon}</span>
            </div>
            <div className={styles.content}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.title}>{exp.title}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.period}>{exp.period}</span>
                  <span className={styles.location}>{exp.location}</span>
                </div>
              </div>
              <ul className={styles.description}>
                {exp.description?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {isAdmin && (
                <div className={styles.adminControls}>
                  <button onClick={() => handleEditExperience(exp)}>✏️ Edit</button>
                  {exp.firestoreId && (
                    <button onClick={() => handleDeleteExperience(exp.firestoreId)}>🗑️ Delete</button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {showEditForm && (
        <ExperienceEditForm
          experience={editingExperience}
          onSave={handleSaveExperience}
          onCancel={() => {
            setShowEditForm(false);
            setEditingExperience(null);
          }}
        />
      )}
    </section>
  );
}

function ExperienceEditForm({ experience, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    ...experience,
    description: experience.description || []
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDescriptionChange = (value) => {
    const descriptions = value.split('\n').filter(item => item.trim());
    setFormData(prev => ({ ...prev, description: descriptions }));
  };

  // Ensure description is always an array
  if (!Array.isArray(formData.description)) {
    formData.description = [];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className={styles.editOverlay} onClick={onCancel}>
      <div className={styles.editForm} onClick={(e) => e.stopPropagation()}>
        <h3>{experience.firestoreId ? 'Edit Experience' : 'Add New Experience'}</h3>
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
            Company/Organization:
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              required
            />
          </label>

          <label>
            Period:
            <input
              type="text"
              value={formData.period}
              onChange={(e) => handleChange('period', e.target.value)}
              placeholder="e.g., January 2024 – Present"
              required
            />
          </label>

          <label>
            Location:
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              required
            />
          </label>

          <label>
            Icon (emoji):
            <input
              type="text"
              value={formData.icon}
              onChange={(e) => handleChange('icon', e.target.value)}
              placeholder="💼"
              required
            />
          </label>

          <label>
            Type:
            <select
              value={formData.type}
              onChange={(e) => handleChange('type', e.target.value)}
            >
              <option value="work">Work</option>
              <option value="leadership">Leadership</option>
            </select>
          </label>

          <label>
            Description (one point per line):
            <textarea
              value={formData.description?.join('\n') || ''}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              rows={6}
              required
            />
          </label>

          <div className={styles.formButtons}>
            <button type="submit">Save Experience</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Experience;
