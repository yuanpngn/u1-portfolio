import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { useAdmin } from './AdminContext';
import styles from './AdminPanel.module.css';

function AdminPanel() {
  const { isAdmin } = useAdmin();
  const [showPanel, setShowPanel] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [portfolioData, setPortfolioData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (isAdmin) {
      loadPortfolioData();
    }
  }, [isAdmin]);

  const loadPortfolioData = async () => {
    try {
      const docRef = doc(db, 'portfolio', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPortfolioData(docSnap.data());
        setFormData(docSnap.data());
      }
    } catch (error) {
      console.error('Error loading portfolio data:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowLogin(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setShowPanel(false);
  };

  const handleSave = async () => {
    try {
      await setDoc(doc(db, 'portfolio', 'main'), formData);
      setPortfolioData(formData);
      setEditMode(false);
      alert('Portfolio updated successfully!');
      window.location.reload(); // Refresh to show changes
    } catch (error) {
      alert('Failed to save: ' + error.message);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isAdmin && !showLogin) {
    return (
      <button 
        className={styles.adminToggle}
        onClick={() => setShowLogin(true)}
        title="Admin Login"
      >
        🔐
      </button>
    );
  }

  if (showLogin) {
    return (
      <div className={styles.loginOverlay} onClick={() => setShowLogin(false)}>
        <div className={styles.loginForm} onClick={(e) => e.stopPropagation()}>
          <h3>Admin Login</h3>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <button type="button" onClick={() => setShowLogin(false)}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <button 
        className={styles.adminToggle}
        onClick={() => setShowPanel(!showPanel)}
        title="Admin Panel"
      >
        ⚙️
      </button>

      {showPanel && (
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h3>Admin Panel</h3>
            <div className={styles.panelActions}>
              {!editMode ? (
                <button onClick={() => setEditMode(true)}>Edit Portfolio</button>
              ) : (
                <>
                  <button onClick={handleSave} className={styles.saveBtn}>Save Changes</button>
                  <button onClick={() => {
                    setFormData(portfolioData);
                    setEditMode(false);
                  }}>Cancel</button>
                </>
              )}
              <button onClick={handleLogout}>Logout</button>
              <button onClick={() => setShowPanel(false)}>✕</button>
            </div>
          </div>

          {editMode && (
            <div className={styles.panelContent}>
              <div className={styles.formSection}>
                <h4>Hero Section</h4>
                <label>
                  Name:
                  <input
                    type="text"
                    value={formData.hero?.name || ''}
                    onChange={(e) => handleChange('hero', { ...formData.hero, name: e.target.value })}
                  />
                </label>
                <label>
                  Title:
                  <input
                    type="text"
                    value={formData.hero?.title || ''}
                    onChange={(e) => handleChange('hero', { ...formData.hero, title: e.target.value })}
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    value={formData.hero?.description || ''}
                    onChange={(e) => handleChange('hero', { ...formData.hero, description: e.target.value })}
                    rows={4}
                  />
                </label>
              </div>

              <div className={styles.formSection}>
                <h4>Social Links</h4>
                <label>
                  Instagram:
                  <input
                    type="url"
                    value={formData.social?.instagram || ''}
                    onChange={(e) => handleChange('social', { ...formData.social, instagram: e.target.value })}
                  />
                </label>
                <label>
                  GitHub:
                  <input
                    type="url"
                    value={formData.social?.github || ''}
                    onChange={(e) => handleChange('social', { ...formData.social, github: e.target.value })}
                  />
                </label>
                <label>
                  LinkedIn:
                  <input
                    type="url"
                    value={formData.social?.linkedin || ''}
                    onChange={(e) => handleChange('social', { ...formData.social, linkedin: e.target.value })}
                  />
                </label>
              </div>

              <div className={styles.note}>
                <strong>Note:</strong> Projects, Skills, and Experience sections can be edited individually through their respective admin controls when logged in.
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default AdminPanel;
