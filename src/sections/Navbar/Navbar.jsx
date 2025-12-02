import { useState, useEffect } from 'react';
import styles from './NavbarStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['hero', 'projects', 'skills', 'experience', 'contact'];
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

  const themeIcon = theme === 'light' ? sun : moon;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>Yuan</span>
          <span className={styles.dot}>.</span>
        </div>

        <button 
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <button 
            onClick={() => scrollToSection('hero')} 
            className={`${styles.navLink} ${activeSection === 'hero' ? styles.active : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className={`${styles.navLink} ${activeSection === 'skills' ? styles.active : ''}`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className={`${styles.navLink} ${activeSection === 'experience' ? styles.active : ''}`}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
          >
            Contact
          </button>
          
          <button 
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            <img src={themeIcon} alt="Theme toggle" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
