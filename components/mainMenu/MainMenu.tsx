import styles from './mainMenu.module.css'

export function MainMenu() {

  return (
    <>
      <nav id='menu-main' className={styles.mainMenu}>
        <ul>
          <li>
            <a href='#section-hero'>Home</a>
          </li>
          <li>
            <a href='#section-skills'>Skills</a>
          </li>
          <li>
            <a href='#section-projects'>Projects</a>
          </li>
          <li>
            <a
              href='#section-contact'
              className={styles.featuredMenuItem}>
                Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
