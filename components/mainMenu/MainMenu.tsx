import styles from './mainMenu.module.css'

export function MainMenu() {

  return (
    <nav className={styles.mainMenu}>
      <ul>
        <li>
          Home
        </li>
        <li>
          Skills
        </li>
        <li>
          Projects
        </li>
        <li className={styles.featuredMenuItem}>
          Contact
        </li>
      </ul>
    </nav>
  )
}
