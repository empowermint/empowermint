import styles from './projectBlock.module.css'
import { IconLink, IconCode } from '@tabler/icons-react'
import { ReactNode } from 'react'

interface projectBlock {
  name: string,
  gitHubUrl: string,
  deployUrl: string,
  tags: string[],
  children?: ReactNode
}

export default function({ name, gitHubUrl, deployUrl, tags, children }: projectBlock) {
  return (
    <div className={styles.projectBlock}>
      <div className={styles.projectBlock_top}>
        <div className={styles.projectBlock_links}>
          <a href={deployUrl}><IconLink />Deploy</a>
          <a href={gitHubUrl}><IconCode />Code</a>
        </div>
        <ul className={styles.projectBlock_tags}>
          {tags.map((tag: string, i: number) => {
            return <li className={styles.tag} key={i + Date.now()}>{tag}</li>
          })}
        </ul>
      </div>
      <h3>{name}</h3>
      {children}
    </div>
  )
}
