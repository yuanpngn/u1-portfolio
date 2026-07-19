import { useState, useEffect } from 'react';
import styles from './NavbarStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import { useIsMobile } from '../../common/useIsMobile';
import Crown from '../../common/Crown';
import CV from '../../assets/cv.pdf';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'commonplace', label: 'Commonplace' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', ...NAV_ITEMS.map((n) => n.id)];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const themeIcon = theme === 'light' ? '☾' : '☀';

  const closeMobile = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#main" data-cursor-hover="true" className={styles.logo}>
          Yuan<Crown size={20} color="var(--dc-yellow)" className={styles.crown} />
        </a>

        {!isMobile && (
          <nav aria-label="Main" className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-cursor-hover="true"
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
              >
                {item.label}
              </a>
            ))}
            <button onClick={toggleTheme} aria-label="Toggle dark mode" className={styles.themeBtn}>
              {themeIcon}
            </button>
            <a href={CV} download="Yuan-Pangan-Resume.pdf" data-cursor-hover="true" className={styles.resumeBtn}>
              Resume
            </a>
          </nav>
        )}

        {isMobile && (
          <div className={styles.mobileControls}>
            <button onClick={toggleTheme} aria-label="Toggle dark mode" className={styles.themeBtn}>
              {themeIcon}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className={styles.hamburger}
            >
              ☰
            </button>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <nav aria-label="Mobile" className={styles.mobileNav}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMobile}
              className={styles.mobileNavLink}
            >
              {item.label}
            </a>
          ))}
          <a href={CV} download="Yuan-Pangan-Resume.pdf" className={styles.mobileResumeBtn}>
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
