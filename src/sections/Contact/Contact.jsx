import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import styles from './ContactStyles.module.css';
import { useReveal } from '../../common/useReveal';
import CV from '../../assets/cv.pdf';

const DEFAULT_SOCIAL = {
  github: 'https://github.com/yuanpngn',
  linkedin: 'https://www.linkedin.com/in/yuan-pangan/',
};

function Contact() {
  const [social, setSocial] = useState(DEFAULT_SOCIAL);
  const [ref, revealed] = useReveal();

  useEffect(() => {
    (async () => {
      try {
        const docSnap = await getDoc(doc(db, 'portfolio', 'main'));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setSocial((prev) => ({
            github: data.social?.github || prev.github,
            linkedin: data.social?.linkedin || prev.linkedin,
          }));
        }
      } catch (error) {
        console.error('Error loading social links:', error);
      }
    })();
  }, []);

  return (
    <section
      id="contact"
      aria-label="Contact"
      ref={ref}
      className={`${styles.container} ${revealed ? styles.revealed : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.eyebrow}>CONTACT</div>
        <div className={styles.headingWrap}>
          <h2 className={styles.headline}>Let&apos;s build something worth remembering.</h2>
          <div className={styles.underline} />
        </div>
        <p className={styles.sub}>
          Open to software engineering, AI, and XR opportunities — internships, research
          collaborations, or just a good conversation about building things.
        </p>
        <a href="mailto:yumiannpangan@gmail.com" data-cursor-hover="true" className={styles.email}>
          yumiannpangan@gmail.com
        </a>
        <div className={styles.linkRow}>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" data-cursor-hover="true" className={styles.ctaSecondary}>
            LinkedIn ↗
          </a>
          <a href={social.github} target="_blank" rel="noopener noreferrer" data-cursor-hover="true" className={styles.ctaSecondary}>
            GitHub ↗
          </a>
          <a href={CV} download="Yuan-Pangan-Resume.pdf" data-cursor-hover="true" className={styles.ctaPrimary}>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
