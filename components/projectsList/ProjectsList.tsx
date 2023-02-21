import styles from './projectsList.module.css'
import ProjectBlock from '../projectBlock/ProjectBlock';

export function ProjectsList() {

  return (
    <>
      <ProjectBlock
        name='Edinburgh Indie Gamers'
        gitHubUrl='https://github.com/empowermint/edinburgh-indie-gamers'
        deployUrl='https://edinburghindiegamers.com/'
        tags={['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'CSS', 'CI/CD']}>
          <p>Marketing website for a thriving game community in Edinburgh</p>
          <p>Uses an OAUTH API to access and render events information from the club's Discord server</p>
      </ProjectBlock>
      <ProjectBlock
        name="Conway's Disco of Life"
        gitHubUrl='https://github.com/empowermint/conways-game-of-life'
        deployUrl='empowermint.github.io/conways-game-of-life/'
        tags={['JavaScript', 'CSS', 'HTML']}>
          <p>Implementation of Conway's Game of Life inspired by the disco dance floors of the 70s!</p>
      </ProjectBlock>
      <ProjectBlock
        name='Erasure Poetry'
        gitHubUrl='https://github.com/empowermint/erasurepoetry'
        deployUrl='https://empowermint.github.io/erasurepoetry/'
        tags={['JavaScript', 'CSS', 'HTML']}>
          <p>Generates erasure poetry from a user's text</p>
      </ProjectBlock>
      <ProjectBlock
        name='James T. Harding Coding Portfolio'
        gitHubUrl='https://github.com/empowermint/empowermint'
        deployUrl='https://james-t-harding.com/'
        tags={['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'CI/CD']}>
          <p>That's right, this very website you are on right now was developed by me</p>
      </ProjectBlock>
    </>
  )
}
