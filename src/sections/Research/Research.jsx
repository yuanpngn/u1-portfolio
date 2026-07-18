import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { useAdmin } from '../../common/AdminContext';
import styles from './ResearchStyles.module.css';
import { useReveal } from '../../common/useReveal';
import Portal from '../../common/Portal';

function Research() {
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
      const querySnapshot = await getDocs(collection(db, 'research'));
      const loaded = querySnapshot.docs.map((d) => ({
        ...d.data(),
        firestoreId: d.id,
      }));
      setItems(loaded);
    } catch (error) {
      console.error('Error loading research:', error);
      setItems([]);
    }
  };

  const handleAdd = () => {
    setEditingItem({ title: '', type: '', summary: '', methods: [], findings: '' });
    setShowEditForm(true);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setShowEditForm(true);
  };

  const handleSave = async (data) => {
    try {
      if (data.firestoreId) {
        await updateDoc(doc(db, 'research', data.firestoreId), data);
      } else {
        await addDoc(collection(db, 'research'), data);
      }
      await loadItems();
      setShowEditForm(false);
      setEditingItem(null);
    } catch (error) {
      console.error('Error saving research item:', error);
      alert('Failed to save research item');
    }
  };

  const handleDelete = async (firestoreId) => {
    if (window.confirm('Delete this research item?')) {
      try {
        await deleteDoc(doc(db, 'research', firestoreId));
        await loadItems();
      } catch (error) {
        console.error('Error deleting research item:', error);
      }
    }
  };

  return (
    <section
      id="research"
      aria-label="Research"
      ref={ref}
      className={`${styles.container} ${revealed ? styles.revealed : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.eyebrow}>RESEARCH</div>
        <div className={styles.headingWrap}>
          <h2 className={styles.h2}>Academic &amp; research work.</h2>
          <div className={styles.underline} />
        </div>

        {isAdmin && (
          <button className={styles.addButton} onClick={handleAdd}>
            + Add Research Item
          </button>
        )}

        <div className={styles.grid}>
          {items.map((r) => (
            <div key={r.id || r.firestoreId} className={styles.card}>
              {r.type && <div className={styles.tag}>{r.type}</div>}
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.body}>{r.summary}</p>
              {r.methods?.length > 0 && (
                <div className={styles.pillRow}>
                  {r.methods.map((m, i) => (
                    <span key={i} className={styles.pill}>{m}</span>
                  ))}
                </div>
              )}
              {r.findings && (
                <>
                  <div className={styles.label}>KEY FINDING</div>
                  <p className={styles.body}>{r.findings}</p>
                </>
              )}
              {isAdmin && (
                <div className={styles.adminControls}>
                  <button onClick={() => handleEdit(r)}>✏️ Edit</button>
                  <button onClick={() => handleDelete(r.firestoreId)}>🗑️ Delete</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showEditForm && (
        <ResearchEditForm
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

function ResearchEditForm({ item, onSave, onCancel }) {
  const [formData, setFormData] = useState({ ...item, methods: item.methods || [] });

  const handleChange = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));
  const handleArrayChange = (field, value) => {
    const array = value.split('\n').filter((s) => s.trim());
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
        <h3>{item.firestoreId ? 'Edit Research Item' : 'Add Research Item'}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={formData.title} onChange={(e) => handleChange('title', e.target.value)} required />
          </label>
          <label>
            Type (e.g. Undergraduate Thesis):
            <input type="text" value={formData.type} onChange={(e) => handleChange('type', e.target.value)} required />
          </label>
          <label>
            Summary:
            <textarea value={formData.summary} onChange={(e) => handleChange('summary', e.target.value)} rows={3} required />
          </label>
          <label>
            Methods (one per line):
            <textarea value={formData.methods?.join('\n') || ''} onChange={(e) => handleArrayChange('methods', e.target.value)} rows={3} />
          </label>
          <label>
            Key Finding:
            <textarea value={formData.findings} onChange={(e) => handleChange('findings', e.target.value)} rows={3} />
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

export default Research;
