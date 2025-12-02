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
            Yuan
            <br />
            Pangan
          </h1>
          <h2>Computer Science Student & Full-Stack Developer</h2>
          <span>
            <a href="https://www.instagram.com/yuanpngn?igsh=bXBxbXhqbTJ2Mms5&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Instagram" />
            </a>
            <a href="https://github.com/yuanpngn" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/yuan-pangan-043245235" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </span>
        </div>
        <div className={styles.descriptionSection}>
          <p className={styles.description}>
            Passionate software engineer specializing in full-stack development, machine learning, and cloud technologies. Currently pursuing Computer Science at De La Salle University - Manila, building innovative solutions from VR experiences to telemedicine platforms.
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
