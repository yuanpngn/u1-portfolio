import { useEffect } from 'react';
import styles from './ProjectModalStyles.module.css';
import Portal from './Portal';

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Portal>
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            {project.category && <div className={styles.modalTag}>{project.category}</div>}
            <h3 className={styles.modalTitle}>{project.title}</h3>
          </div>
          <button onClick={onClose} aria-label="Close" className={styles.modalClose}>✕</button>
        </div>

        <p className={styles.modalBlurb}>{project.fullDesc}</p>

        {project.highlights?.length > 0 && (
          <div className={styles.section}>
            <div className={styles.modalLabel}>KEY HIGHLIGHTS</div>
            <ul className={styles.highlightsList}>
              {project.highlights.map((highlight, index) => (
                <li key={index}>
                  <span className={styles.checkmark}>✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {(project.status || project.category) && (
          <div className={styles.statusRow}>
            {project.status && (
              <div>
                <div className={styles.modalLabel}>STATUS</div>
                <p className={styles.modalP}>{project.status}</p>
              </div>
            )}
            {project.category && (
              <div>
                <div className={styles.modalLabel}>CATEGORY</div>
                <p className={styles.modalP}>{project.category}</p>
              </div>
            )}
          </div>
        )}

        {project.technologies?.length > 0 && (
          <div className={styles.techPills}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.techPill}>{tech}</span>
            ))}
          </div>
        )}

        <div className={styles.linkRow}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
              GitHub ↗
            </a>
          )}
          {project.conferencePaper && (
            <a href={project.conferencePaper} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
              Conference Paper ↗
            </a>
          )}
        </div>
      </div>
    </div>
    </Portal>
  );
}

export default ProjectModal;
