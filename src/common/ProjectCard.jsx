import React from 'react';
import styles from './ProjectCardStyles.module.css';

function ProjectCard({ project, onClick }) {
  const getCategoryIcon = (category) => {
    const icons = {
      'VR Development': '🥽',
      'Full-Stack Web': '🌐',
      'Machine Learning': '🤖',
      'Robotics': '🚁',
      'Cloud Computing': '☁️',
      'Mixed Reality': '🛸'
    };
    return icons[category] || '💻';
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardHeader}>
        <span className={styles.categoryIcon}>{getCategoryIcon(project.category)}</span>
        <span className={styles.category}>{project.category}</span>
      </div>
      
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.shortDesc}</p>
      
      <div className={styles.techStack}>
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span key={index} className={styles.techBadge}>{tech}</span>
        ))}
        {project.technologies.length > 3 && (
          <span className={styles.techBadge}>+{project.technologies.length - 3}</span>
        )}
      </div>
      
      <div className={styles.cardFooter}>
        <span className={styles.status}>{project.status}</span>
        <span className={styles.viewMore}>View Details →</span>
      </div>
    </div>
  );
}

export default ProjectCard;
