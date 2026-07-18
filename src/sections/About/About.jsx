import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import styles from './AboutStyles.module.css';
import { useReveal } from '../../common/useReveal';
import EditablePhoto from '../../common/EditablePhoto';
import Crown from '../../common/Crown';
import defaultPhoto from '../../assets/yuan.png';

const DEFAULT_PARAGRAPHS = [
  "I started out chasing the moment code turns into something you can touch — a button that responds, a screen that reacts. That curiosity is why I'm studying Software Technology at De La Salle University, and why I still can't resist opening dev tools on a page I like.",
  "Since then I've built across the stack — automation tooling at HSBC, production backend work at Manulife, a full-stack inventory system for a startup client — and outside it, into research: a mixed-reality drone system that treats hardware as a performance partner.",
  "What ties it together is a bias for shipping things that hold up under real use — readable code, tested assumptions, and interfaces that work for the person who didn't design them. That's the standard I hold every project to.",
];
const DEFAULT_LOCATION = 'Manila, Philippines';

function About() {
  const [paragraphs, setParagraphs] = useState(DEFAULT_PARAGRAPHS);
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [photoUrl, setPhotoUrl] = useState(defaultPhoto);
  const [ref, revealed] = useReveal();

  useEffect(() => {
    (async () => {
      try {
        const docSnap = await getDoc(doc(db, 'portfolio', 'main'));
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.about?.paragraphs?.length) setParagraphs(data.about.paragraphs);
          if (data.about?.location) setLocation(data.about.location);
          if (data.about?.photoUrl) setPhotoUrl(data.about.photoUrl);
        }
      } catch (error) {
        console.error('Error loading about data:', error);
      }
    })();
  }, []);

  const handlePhotoUploaded = async (url) => {
    try {
      const docSnap = await getDoc(doc(db, 'portfolio', 'main'));
      const existing = docSnap.exists() ? docSnap.data() : {};
      await setDoc(doc(db, 'portfolio', 'main'), {
        ...existing,
        about: { ...existing.about, photoUrl: url },
      });
      setPhotoUrl(url);
    } catch (error) {
      console.error('Error saving photo:', error);
      alert('Failed to save photo. Please try again.');
    }
  };

  return (
    <section
      id="about"
      aria-label="About"
      ref={ref}
      className={`${styles.container} ${revealed ? styles.revealed : ''}`}
    >
      <div className={styles.grid}>
        <div>
          <div className={styles.eyebrow}>
            ABOUT <Crown size={14} color="var(--dc-red)" />
          </div>
          <div className={styles.headingWrap}>
            <h2 className={styles.h2}>I build things people actually want to use.</h2>
            <div className={styles.underline} />
          </div>
          <div className={styles.points}>
            {paragraphs.map((p, i) => (
              <div key={i} className={styles.point}>
                <div className={styles.number}>{String(i + 1).padStart(2, '0')}</div>
                <p className={styles.body}>{p}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.photoWrap}>
          <div className={styles.tapeStrip} />
          <div className={styles.photoFrame}>
            <EditablePhoto
              src={photoUrl}
              alt="Portrait of Yuan Pangan"
              imgClassName={styles.photo}
              onUploaded={handlePhotoUploaded}
            />
          </div>
          <div className={styles.pinNote}>📍 {location}</div>
        </div>
      </div>
    </section>
  );
}

export default About;
