import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { useAdmin } from '../../common/AdminContext';
import styles from './SkillsStyles.module.css';
import { useReveal } from '../../common/useReveal';
import Portal from '../../common/Portal';

function Skills() {
  const { isAdmin } = useAdmin();
  const [skillCategories, setSkillCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState('');
  const [editingSkills, setEditingSkills] = useState('');
  const [ref, revealed] = useReveal();

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'skills'));
      const loadedSkills = {};
      querySnapshot.docs.forEach((d) => {
        loadedSkills[d.id] = d.data().skills || [];
      });
      setSkillCategories(loadedSkills);
      setSelectedCategory((prev) => (prev && loadedSkills[prev] ? prev : Object.keys(loadedSkills)[0] || ''));
    } catch (error) {
      console.error('Error loading skills:', error);
    }
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setEditingSkills(skillCategories[category].join('\n'));
    setShowEditForm(true);
  };

  const handleAddCategory = () => {
    setEditingCategory('');
    setEditingSkills('');
    setShowEditForm(true);
  };

  const handleSaveCategory = async (e) => {
    e.preventDefault();
    const skills = editingSkills.split('\n').filter((s) => s.trim());
    const categoryName = editingCategory || e.target.categoryName.value;

    try {
      await updateDoc(doc(db, 'skills', categoryName), { skills });
      await loadSkills();
      setShowEditForm(false);
    } catch (error) {
      try {
        await addDoc(collection(db, 'skills'), { skills });
        await loadSkills();
        setShowEditForm(false);
      } catch (err) {
        console.error('Error saving category:', err);
      }
    }
  };

  const handleDeleteCategory = async (category) => {
    if (window.confirm(`Delete ${category} category?`)) {
      try {
        await deleteDoc(doc(db, 'skills', category));
        await loadSkills();
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  const categories = Object.keys(skillCategories);
  const activeSkills = skillCategories[selectedCategory] || [];

  return (
    <section
      id="skills"
      aria-label="Skills"
      ref={ref}
      className={`${styles.container} ${revealed ? styles.revealed : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.eyebrow}>SKILLS</div>
        <div className={styles.headingWrap}>
          <h2 className={styles.h2}>What I work with.</h2>
          <div className={styles.underline} />
        </div>

        {isAdmin && (
          <button className={styles.addButton} onClick={handleAddCategory}>
            + Add Category
          </button>
        )}

        <div className={styles.catRow}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`${styles.catButton} ${selectedCategory === cat ? styles.active : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isAdmin && selectedCategory && (
          <div className={styles.adminControls}>
            <button onClick={() => handleEditCategory(selectedCategory)}>✏️ Edit</button>
            <button onClick={() => handleDeleteCategory(selectedCategory)}>🗑️ Delete</button>
          </div>
        )}

        <div className={styles.chipGrid}>
          {activeSkills.map((skill) => (
            <div key={skill} className={styles.chip}>
              <span className={styles.chipLabel}>{skill}</span>
              <span className={styles.chipDot} />
            </div>
          ))}
        </div>
      </div>

      {showEditForm && (
        <Portal>
        <div className={styles.editOverlay} onClick={() => setShowEditForm(false)}>
          <div className={styles.editForm} onClick={(e) => e.stopPropagation()}>
            <h3>{editingCategory ? 'Edit Category' : 'Add New Category'}</h3>
            <form onSubmit={handleSaveCategory}>
              {!editingCategory && (
                <label>
                  Category Name:
                  <input type="text" name="categoryName" required />
                </label>
              )}
              <label>
                Skills (one per line):
                <textarea
                  value={editingSkills}
                  onChange={(e) => setEditingSkills(e.target.value)}
                  rows={8}
                  required
                />
              </label>
              <div className={styles.formButtons}>
                <button type="submit">Save</button>
                <button type="button" onClick={() => setShowEditForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
        </Portal>
      )}
    </section>
  );
}

export default Skills;
