import styles from './ProjectCardStyles.module.css';
import EditablePhoto from './EditablePhoto';
import { useAdmin } from './AdminContext';

const ACCENT_CLASSES = ['accentRed', 'accentBlue', 'accentYellow'];

function ProjectCard({ project, index = 0, onClick, onPhotoUploaded }) {
  const { isAdmin } = useAdmin();
  const accentClass = styles[ACCENT_CLASSES[index % ACCENT_CLASSES.length]];

  return (
    <div className={`${styles.card} ${accentClass}`} onClick={onClick}>
      <div className={styles.bar} />
      {(project.imageUrl || isAdmin) && (
        <div className={styles.imageArea} onClick={(e) => e.stopPropagation()}>
          <EditablePhoto
            src={project.imageUrl}
            alt={project.title}
            imgClassName={styles.image}
            onUploaded={onPhotoUploaded}
          />
        </div>
      )}
      <div className={styles.body}>
        {project.category && <div className={styles.tag}>{project.category}</div>}
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.shortDesc}</p>

        <div className={styles.techStack}>
          {project.technologies?.slice(0, 4).map((tech, i) => (
            <span key={i} className={styles.techBadge}>{tech}</span>
          ))}
        </div>

        <button className={styles.viewDetails} data-cursor-hover="true">View details →</button>
      </div>
    </div>
  );
}

export default ProjectCard;
