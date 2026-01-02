import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/yuan.png';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme } = useTheme();
  const [heroData, setHeroData] = useState({
    name: 'Yuan Pangan',
    title: 'Computer Science Student & Full-Stack Developer',
    description: 'Passionate software engineer specializing in full-stack development, machine learning, and cloud technologies. Currently pursuing Computer Science at De La Salle University - Manila, building innovative solutions from VR experiences to telemedicine platforms.',
    social: {
      instagram: 'https://www.instagram.com/yuanpngn?igsh=bXBxbXhqbTJ2Mms5&utm_source=qr',
      github: 'https://github.com/yuanpngn',
      linkedin: 'https://www.linkedin.com/in/yuan-pangan-043245235'
    }
  });

  useEffect(() => {
    loadHeroData();
  }, []);

  const loadHeroData = async () => {
    try {
      const docRef = doc(db, 'portfolio', 'main');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        setHeroData({
          name: data.hero?.name || heroData.name,
          title: data.hero?.title || heroData.title,
          description: data.hero?.description || heroData.description,
          social: {
            instagram: data.social?.instagram || heroData.social.instagram,
            github: data.social?.github || heroData.social.github,
            linkedin: data.social?.linkedin || heroData.social.linkedin
          }
        });
      }
    } catch (error) {
      console.error('Error loading hero data:', error);
    }
  };

  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Yuan Pangan"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1>
            {heroData.name.split(' ')[0]}
            <br />
            {heroData.name.split(' ')[1] || ''}
          </h1>
          <h2>{heroData.title}</h2>
          <span>
            <a href={heroData.social.instagram} target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Instagram" />
            </a>
            <a href={heroData.social.github} target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href={heroData.social.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </span>
        </div>
        <div className={styles.descriptionSection}>
          <p className={styles.description}>
            {heroData.description}
          </p>
          <a href={CV} download>
            <button className="hover">Download Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
