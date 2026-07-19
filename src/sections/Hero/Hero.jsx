import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import styles from './HeroStyles.module.css';
import Crown from '../../common/Crown';
import CV from '../../assets/cv.pdf';

const HERO_CHIPS = ['Software Engineering', 'Automation', 'Mixed Reality + Unity', 'Drones', 'Web Development'];

function Hero() {
  const [heroData, setHeroData] = useState({
    name: 'Yuan Pangan',
    title: 'Software Engineer — graduating October 2026, open to full-time roles.',
    description:
      'Looking for backend, full-stack, or XR/mixed-reality engineering roles — based in Manila, open to remote. Let\'s talk.',
  });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    loadHeroData();
  }, []);

  const loadHeroData = async () => {
    try {
      const docRef = doc(db, 'portfolio', 'main');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setHeroData((prev) => ({
          name: data.hero?.name || prev.name,
          title: data.hero?.title || prev.title,
          description: data.hero?.description || prev.description,
        }));
      }
    } catch (error) {
      console.error('Error loading hero data:', error);
    }
  };

  const handleTilt = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: py * -10, ry: px * 14 });
  };

  const resetTilt = () => setTilt({ rx: 0, ry: 0 });

  return (
    <section id="hero" aria-label="Introduction" className={styles.container}>
      <div className={styles.grid}>
        <div>
          <div className={styles.eyebrow}>
            <span className={styles.pulseDot} />
            Open to Work · Grad Oct 2026
          </div>
          <h1 className={styles.name}>{heroData.name}</h1>
          <p className={styles.tagline}>{heroData.title}</p>
          <p className={styles.sub}>{heroData.description}</p>
          <div className={styles.ctaRow}>
            <a href="#projects" data-cursor-hover="true" className={styles.ctaPrimary}>
              View Projects
            </a>
            <a href={CV} download="Yuan-Pangan-Resume.pdf" data-cursor-hover="true" className={styles.ctaSecondary}>
              Download Resume
            </a>
            <a href="#contact" data-cursor-hover="true" className={styles.ctaGhost}>
              Contact Me →
            </a>
          </div>
          <div className={styles.scrollCue}>↓ scroll</div>
        </div>
        <div className={styles.cardWrap} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
          <div
            className={styles.tiltCard}
            style={{ transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
          >
            <Crown size={56} color="var(--dc-yellow)" className={styles.heroCrown} />
            {HERO_CHIPS.map((chip, i) => (
              <div key={chip} className={`${styles.chip} ${styles[`chip${i}`]}`}>
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
