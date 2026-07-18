import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import styles from './HeroStyles.module.css';
import CV from '../../assets/cv.pdf';

const HERO_CHIPS = ['Mixed Reality + Unity', 'VBA Automation', 'Node.js + MongoDB', 'Java + Spring Boot'];

function Hero() {
  const [heroData, setHeroData] = useState({
    name: 'Yuan Pangan',
    title: 'Software engineer building across mixed reality, automation, and full-stack systems.',
    description:
      'From automating BAU workflows at HSBC to building a mixed-reality drone performance system for my thesis — I like shipping things that hold up under real use.',
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
            CS · Software Technology · DLSU
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
            <div className={styles.heroCrown}>♛</div>
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
