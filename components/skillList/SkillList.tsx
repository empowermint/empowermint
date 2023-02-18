import styles from './skillList.module.css'

export function SkillList() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Git', 'React', 'Next.js', 'TDD']

  return (
    <div className={styles.wrapper}>
      <ul className={styles.skillList}>
        {skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </div>
   )
}
