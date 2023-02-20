import styles from './projectBlock.module.css'
import { IconLink, IconCode } from '@tabler/icons-react'

export default function({ name, gitHubUrl, deployUrl, tags, children }) {
  return (
    <div className={styles.projectBlock}>
      <div className={styles.projectBlock_top}>
        <ul className={styles.projectBlock_tags}>
          {tags.map((tag: string, i: number) => {
            return <li className={styles.tag} key={i + Date.now()}>{tag}</li>
          })}
        </ul>
        <div className={styles.projectBlock_links}>
          <a href={deployUrl}><IconLink />Deploy</a>
          <a href={gitHubUrl}><IconCode />Code</a>
        </div>
      </div>
      <h3>{name}</h3>
      {children}
    </div>
  )
}
