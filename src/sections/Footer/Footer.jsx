import { useState } from 'react';
import styles from './FooterStyles.module.css';
import Portal from '../../common/Portal';

function Footer() {
  const [easterEggOpen, setEasterEggOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <section id="footer" className={styles.container}>
      <span className={styles.text}>
        © {year} Yuan Pangan. Built with curiosity <span className={styles.crown}>♛</span>
      </span>
      <button
        onClick={() => setEasterEggOpen((v) => !v)}
        aria-label="Developer console"
        className={styles.devBtn}
      >
        {'</>'}
      </button>

      {easterEggOpen && (
        <Portal>
        <div className={styles.terminalOverlay} onClick={() => setEasterEggOpen(false)}>
          <div className={styles.terminalCard} onClick={(e) => e.stopPropagation()}>
            <div>$ whoami</div>
            <div className={styles.terminalLine}>yuan — cs student, builder, curious human</div>
            <div style={{ marginTop: '10px' }}>$ cat interests.txt</div>
            <div className={styles.terminalLine}>software engineering, ai/ml, xr, accessibility</div>
            <div style={{ marginTop: '10px' }}>$ echo &quot;thanks for checking the console&quot;</div>
            <div className={styles.terminalLine}>
              thanks for checking the console<span className={styles.cursor}>_</span>
            </div>
          </div>
        </div>
        </Portal>
      )}
    </section>
  );
}

export default Footer;
