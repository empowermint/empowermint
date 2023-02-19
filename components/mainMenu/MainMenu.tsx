import styles from './mainMenu.module.css'

export function MainMenu() {

  return (
    <>
      <nav id='menu-main' className={`${styles.menu} ${styles.menu_main}`}>
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
      <nav id='menu-contact' className={`${styles.menu} ${styles.menu_contact}`}>
        <ul>
          <li>
            <a href='mailto:j.t.harding@gmail.com'>Email</a>
          </li>
          <li>
            <a href='https://github.com/empowermint'>GitHub</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/james-t-harding-29b5188/'>LinkedIn</a>
          </li>
          <li>
            <a href='https://codepen.io/empowermint'>CodePen</a>
          </li>
        </ul>
      </nav>
    </>
  )
}
