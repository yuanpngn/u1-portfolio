import { useState } from 'react';
import styles from './AdminLoginStyles.module.css';

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await onLogin(email, password);
    if (success) {
      setEmail('');
      setPassword('');
      setError('');
      setShowLogin(false);
    } else {
      setError('Incorrect email or password');
      setPassword('');
    }
  };

  if (!showLogin) {
    return (
      <div className={styles.loginPrompt}>
        <p>This section contains personal notes and thoughts.</p>
        <button 
          className={styles.showLoginButton}
          onClick={() => setShowLogin(true)}
        >
          🔒 Admin Access
        </button>
      </div>
    );
  }

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h3>Admin Login</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.passwordInput}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
          <button 
            type="button" 
            className={styles.cancelButton}
            onClick={() => {
              setShowLogin(false);
              setEmail('');
              setPassword('');
              setError('');
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
