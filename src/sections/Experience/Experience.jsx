import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { useAdmin } from '../../common/AdminContext';
import styles from './ExperienceStyles.module.css';
import { useReveal } from '../../common/useReveal';
import EditablePhoto from '../../common/EditablePhoto';
import Portal from '../../common/Portal';

function Experience() {
  const { isAdmin } = useAdmin();
  const [experiences, setExperiences] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingExperience, setEditingExperience] = useState(null);
  const [ref, revealed] = useReveal();

  useEffect(() => {
    loadExperiences();
  }, []);

  const parseDate = (period) => {
    const match = period.match(/(\w+\s+)?(\d{4})/);
    if (!match) return 0;

    const year = parseInt(match[2]);
    const monthStr = match[1]?.trim();

    const months = {
      January: 1, February: 2, March: 3, April: 4,
      May: 5, June: 6, July: 7, August: 8,
      September: 9, October: 10, November: 11, December: 12,
      Jan: 1, Feb: 2, Mar: 3, Apr: 4, Jun: 6, Jul: 7,
      Aug: 8, Sep: 9, Sept: 9, Oct: 10, Nov: 11, Dec: 12,
    };

    const month = monthStr ? months[monthStr] || 1 : 1;
    return year * 100 + month;
  };

  const loadExperiences = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'experiences'));
      const loadedExps = querySnapshot.docs.map((d) => ({
        ...d.data(),
        firestoreId: d.id,
      }));

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
      type: 'work',
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

  const handlePhotoUploaded = async (exp, url) => {
    try {
      await updateDoc(doc(db, 'experiences', exp.firestoreId), { photoUrl: url });
      await loadExperiences();
    } catch (error) {
      console.error('Error saving experience photo:', error);
      alert('Failed to save photo. Please try again.');
    }
  };

  return (
    <section
      id="experience"
      aria-label="Experience"
      ref={ref}
      className={`${styles.container} ${revealed ? styles.revealed : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.eyebrow}>EXPERIENCE</div>
        <div className={styles.headingWrap}>
          <h2 className={styles.h2}>Where I&apos;ve worked.</h2>
          <div className={styles.underline} />
        </div>

        {isAdmin && (
          <button className={styles.addButton} onClick={handleAddExperience}>
            + Add Experience
          </button>
        )}

        <div className={styles.timelineWrap}>
          {experiences.map((exp, i) => (
            <div key={exp.id || exp.firestoreId} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.itemBody}>
                <div className={styles.period}>{exp.period}</div>
                <h3 className={styles.role}>{exp.title}</h3>
                <div className={styles.org}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</div>
                <ul className={styles.bulletList}>
                  {exp.description?.map((item, idx) => (
                    <li key={idx} className={styles.bullet}>{item}</li>
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
              <div className={`${styles.thumb} ${i % 2 === 0 ? styles.thumbTiltA : styles.thumbTiltB}`}>
                <EditablePhoto
                  src={exp.photoUrl}
                  alt={exp.title}
                  imgClassName={styles.thumbImg}
                  fallback={exp.icon}
                  compact
                  onUploaded={(url) => handlePhotoUploaded(exp, url)}
                />
              </div>
            </div>
          ))}
        </div>
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
    description: experience.description || [],
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDescriptionChange = (value) => {
    const descriptions = value.split('\n').filter((item) => item.trim());
    setFormData((prev) => ({ ...prev, description: descriptions }));
  };

  if (!Array.isArray(formData.description)) {
    formData.description = [];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Portal>
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
    </Portal>
  );
}

export default Experience;
