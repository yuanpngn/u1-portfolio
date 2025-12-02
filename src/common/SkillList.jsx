import styles from './SkillListStyles.module.css';

function SkillList({ src, skill }) {
  return (
    <span className={styles.skillItem}>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
