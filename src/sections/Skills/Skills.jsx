import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Technical Skills</h1>
      
      <h3 className={styles.categoryTitle}>Programming Languages</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Kotlin" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
      
      <h3 className={styles.categoryTitle}>Web Development</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Handlebars" />
        <SkillList src={checkMarkIcon} skill="React" />
      </div>
      <hr />
      
      <h3 className={styles.categoryTitle}>Databases</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
      
      <h3 className={styles.categoryTitle}>Game & XR Development</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Unity" />
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="Blender" />
      </div>
      <hr />
      
      <h3 className={styles.categoryTitle}>Tools & Software</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="VS Code" />
        <SkillList src={checkMarkIcon} skill="Jupyter Notebook" />
        <SkillList src={checkMarkIcon} skill="MongoDB Compass" />
        <SkillList src={checkMarkIcon} skill="Figma" />
        <SkillList src={checkMarkIcon} skill="Canva" />
        <SkillList src={checkMarkIcon} skill="Postman" />
        <SkillList src={checkMarkIcon} skill="Bruno" />
      </div>
    </section>
  );
}

export default Skills;
