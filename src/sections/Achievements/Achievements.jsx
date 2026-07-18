import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { useAdmin } from '../../common/AdminContext';
import styles from './AchievementsStyles.module.css';
import { useReveal } from '../../common/useReveal';
import Portal from '../../common/Portal';

function Achievements() {
  const { isAdmin } = useAdmin();
  const [items, setItems] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [ref, revealed] = useReveal();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'achievements'));
      const loaded = querySnapshot.docs.map((d) => ({
        ...d.data(),
        firestoreId: d.id,
      }));
      setItems(loaded);
    } catch (error) {
      console.error('Error loading achievements:', error);
      setItems([]);
    }
  };

  const handleAdd = () => {
    setEditingItem({ title: '', org: '', note: '', dashed: false });
    setShowEditForm(true);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setShowEditForm(true);
  };

  const handleSave = async (data) => {
    try {
      if (data.firestoreId) {
        await updateDoc(doc(db, 'achievements', data.firestoreId), data);
      } else {
        await addDoc(collection(db, 'achievements'), data);
      }
      await loadItems();
      setShowEditForm(false);
      setEditingItem(null);
    } catch (error) {
      console.error('Error saving achievement:', error);
      alert('Failed to save achievement');
    }
  };

  const handleDelete = async (firestoreId) => {
    if (window.confirm('Delete this achievement?')) {
      try {
        await deleteDoc(doc(db, 'achievements', firestoreId));
        await loadItems();
      } catch (error) {
        console.error('Error deleting achievement:', error);
      }
    }
  };

  const accents = ['red', 'blue', 'yellow', 'red'];

  return (
    <section
      id="achievements"
      aria-label="Achievements"
      ref={ref}
      className={`${styles.container} ${revealed ? styles.revealed : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.eyebrow}>ACHIEVEMENTS ♛</div>
        <div className={styles.headingWrap}>
          <h2 className={styles.h2}>Recognition along the way.</h2>
          <div className={styles.underline} />
        </div>

        {isAdmin && (
          <button className={styles.addButton} onClick={handleAdd}>
            + Add Achievement
          </button>
        )}

        <div className={styles.grid}>
          {items.map((a, i) => (
            <div
              key={a.id || a.firestoreId}
              className={`${styles.card} ${a.dashed ? styles.dashed : ''} ${styles['accent' + accents[i % accents.length]]}`}
            >
              <h3 className={styles.title}>{a.title}</h3>
              <div className={styles.org}>{a.org}</div>
              <p className={styles.note}>{a.note}</p>
              {isAdmin && (
                <div className={styles.adminControls}>
                  <button onClick={() => handleEdit(a)}>✏️ Edit</button>
                  <button onClick={() => handleDelete(a.firestoreId)}>🗑️ Delete</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showEditForm && (
        <AchievementEditForm
          item={editingItem}
          onSave={handleSave}
          onCancel={() => {
            setShowEditForm(false);
            setEditingItem(null);
          }}
        />
      )}
    </section>
  );
}

function AchievementEditForm({ item, onSave, onCancel }) {
  const [formData, setFormData] = useState({ ...item });

  const handleChange = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Portal>
    <div className={styles.editOverlay} onClick={onCancel}>
      <div className={styles.editForm} onClick={(e) => e.stopPropagation()}>
        <h3>{item.firestoreId ? 'Edit Achievement' : 'Add Achievement'}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={formData.title} onChange={(e) => handleChange('title', e.target.value)} required />
          </label>
          <label>
            Organization:
            <input type="text" value={formData.org} onChange={(e) => handleChange('org', e.target.value)} required />
          </label>
          <label>
            Note:
            <textarea value={formData.note} onChange={(e) => handleChange('note', e.target.value)} rows={3} required />
          </label>
          <label>
            <input
              type="checkbox"
              checked={!!formData.dashed}
              onChange={(e) => handleChange('dashed', e.target.checked)}
              style={{ width: 'auto', display: 'inline-block', marginRight: '8px' }}
            />
            Dashed border (mark as in-progress / TBD)
          </label>
          <div className={styles.formButtons}>
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
    </Portal>
  );
}

export default Achievements;
