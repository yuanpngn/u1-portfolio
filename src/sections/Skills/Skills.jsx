import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { useAdmin } from '../../common/AdminContext';
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const { isAdmin } = useAdmin();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const [skillCategories, setSkillCategories] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState('');
  const [editingSkills, setEditingSkills] = useState('');

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'skills'));
      const loadedSkills = {};
      querySnapshot.docs.forEach(doc => {
        loadedSkills[doc.id] = doc.data().skills || [];
      });
      setSkillCategories(loadedSkills);
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
    const skills = editingSkills.split('\n').filter(s => s.trim());
    const categoryName = editingCategory || e.target.categoryName.value;

    try {
      await updateDoc(doc(db, 'skills', categoryName), { skills });
      await loadSkills();
      setShowEditForm(false);
    } catch (error) {
      // If doc doesn't exist, create it
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

  return (
    <section id="skills" className={styles.container}>
      <div className={styles.header}>
        <h1 className="sectionTitle">Technical Skills</h1>
        {isAdmin && (
          <button className={styles.addButton} onClick={handleAddCategory}>
            + Add Category
          </button>
        )}
      </div>
      
      {Object.entries(skillCategories).map(([category, skills], index) => (
        <div key={category}>
          <div className={styles.categoryHeader}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            {isAdmin && (
              <div className={styles.adminControls}>
                <button onClick={() => handleEditCategory(category)}>✏️</button>
                <button onClick={() => handleDeleteCategory(category)}>🗑️</button>
              </div>
            )}
          </div>
          <div className={styles.skillList}>
            {skills.map((skill) => (
              <SkillList key={skill} src={checkMarkIcon} skill={skill} />
            ))}
          </div>
          {index < Object.keys(skillCategories).length - 1 && <hr />}
        </div>
      ))}

      {showEditForm && (
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
      )}
    </section>
  );
}

export default Skills;
