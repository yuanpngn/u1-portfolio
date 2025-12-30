import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase/config';
import styles from './CommonplaceStyles.module.css';
import AdminLogin from './AdminLogin';
import EntryForm from './EntryForm';
import EntryCard from './EntryCard';

function Commonplace() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [entries, setEntries] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: 'all', name: 'All Entries', icon: '📚' },
    { id: 'quotes', name: 'Quotes & Dialogues', icon: '💬' },
    { id: 'articles', name: 'Article Notes', icon: '📝' },
    { id: 'books', name: 'Book Highlights', icon: '📖' },
    { id: 'thoughts', name: 'Personal Thoughts', icon: '💭' },
  ];

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdmin(!!user);
      setLoading(false);
    });

    // Load entries from Firestore
    loadEntries();

    return () => unsubscribe();
  }, []);

  const loadEntries = async () => {
    try {
      const q = query(collection(db, 'entries'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const loadedEntries = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
      }));
      setEntries(loadedEntries);
    } catch (error) {
      console.error('Error loading entries:', error);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleAddEntry = async (entry) => {
    try {
      await addDoc(collection(db, 'entries'), {
        ...entry,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      await loadEntries();
      setShowEntryForm(false);
    } catch (error) {
      console.error('Error adding entry:', error);
      alert('Failed to add entry. Please try again.');
    }
  };

  const handleUpdateEntry = async (updatedEntry) => {
    try {
      const entryRef = doc(db, 'entries', updatedEntry.id);
      await updateDoc(entryRef, {
        ...updatedEntry,
        updatedAt: Timestamp.now(),
      });
      await loadEntries();
      setEditingEntry(null);
      setShowEntryForm(false);
    } catch (error) {
      console.error('Error updating entry:', error);
      alert('Failed to update entry. Please try again.');
    }
  };

  const handleDeleteEntry = async (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      try {
        await deleteDoc(doc(db, 'entries', id));
        await loadEntries();
      } catch (error) {
        console.error('Error deleting entry:', error);
        alert('Failed to delete entry. Please try again.');
      }
    }
  };

  const handleEdit = (entry) => {
    setEditingEntry(entry);
    setShowEntryForm(true);
  };

  const filteredEntries = selectedCategory === 'all'
    ? entries
    : entries.filter(entry => entry.category === selectedCategory);

  return (
    <section id="commonplace" className={`${styles.container} ${isExpanded ? styles.expanded : styles.collapsed}`}>
      <button 
        className={styles.toggleButton}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? "Hide Commonplace" : "Show Commonplace"}
      >
        <span className={styles.toggleIcon}>{isExpanded ? '▼' : '▶'}</span>
        <span className={styles.toggleText}>
          {isExpanded ? 'Hide' : 'Show'} Commonplace
        </span>
        <span className={styles.toggleEmoji}>📚</span>
      </button>

      {isExpanded && (
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className="sectionTitle">Commonplace</h1>
            <p className={styles.subtitle}>
          A collection of interesting quotes, notes, and thoughts
        </p>
      </div>

      {!isAdmin && (
        <AdminLogin onLogin={handleLogin} />
      )}

      {isAdmin && (
        <div className={styles.adminControls}>
          <button 
            className={styles.addButton}
            onClick={() => {
              setEditingEntry(null);
              setShowEntryForm(true);
            }}
          >
            + Add New Entry
          </button>
          <button 
            className={styles.logoutButton}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}

      <div className={styles.categoryFilter}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`${styles.categoryButton} ${
              selectedCategory === category.id ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span className={styles.categoryIcon}>{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {showEntryForm && (
        <EntryForm
          entry={editingEntry}
          categories={categories.filter(c => c.id !== 'all')}
          onSubmit={editingEntry ? handleUpdateEntry : handleAddEntry}
          onCancel={() => {
            setShowEntryForm(false);
            setEditingEntry(null);
          }}
        />
      )}

      <div className={styles.entriesGrid}>
        {filteredEntries.length === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>📭</span>
            <p>No entries yet. {isAdmin && 'Start by adding your first entry!'}</p>
          </div>
        ) : (
          filteredEntries.map(entry => (
            <EntryCard
              key={entry.id}
              entry={entry}
              category={categories.find(c => c.id === entry.category)}
              isAdmin={isAdmin}
              onEdit={() => handleEdit(entry)}
              onDelete={() => handleDeleteEntry(entry.id)}
            />
          ))
        )}
      </div>
        </div>
      )}
    </section>
  );
}

export default Commonplace;
