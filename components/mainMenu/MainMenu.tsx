import styles from './mainMenu.module.css'
import { IconSend, IconBrandGithub, IconBrandLinkedin, IconBrandCodepen } from '@tabler/icons-react';

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
            <a href='mailto:j.t.harding@gmail.com'>
              <IconSend />
              <span className='visually-hidden'>Email</span>
            </a>
          </li>
          <li>
            <a href='https://github.com/empowermint'>
              <IconBrandGithub />
              <span className='visually-hidden'>GitHub</span>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/james-t-harding-29b5188/'>
              <IconBrandLinkedin />
              <span className='visually-hidden'>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href='https://codepen.io/empowermint'>
              <IconBrandCodepen />
              <span className='visually-hidden'>CodePen</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
