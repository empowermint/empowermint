import styles from './skillList.module.css'
import { IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconBrandReact, IconBrandNextjs, IconBrandTypescript, IconBrandGit, IconStethoscope } from '@tabler/icons-react'

export function SkillList() {
  const skills = [
    {name: 'HTML', icon: <IconBrandHtml5 />},
    {name: 'CSS', icon: <IconBrandCss3 />},
    {name: 'JS', icon: <IconBrandJavascript />},
    {name: 'React', icon: <IconBrandReact />},
    {name: 'Next.js', icon: <IconBrandNextjs />},
    {name: 'TypeScript', icon: <IconBrandTypescript />},
    {name: 'Git', icon: <IconBrandGit />},
    {name: 'TDD', icon: <IconStethoscope />},
  ]

  return (
    <div className={styles.wrapper}>
      <ul className={styles.skillList}>
        {skills.map((skill, i) => {
          return <li key={i}>
            {skill.icon}
            {skill.name}
          </li>
        })}
      </ul>
    </div>
   )
}
