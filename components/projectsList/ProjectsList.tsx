import styles from './projectsList.module.css'
import ProjectBlock from '../projectBlock/ProjectBlock';

export function ProjectsList() {

  return (
    <>
      <ProjectBlock
        name='Edinburgh Indie Gamers'
        gitHubUrl='https://github.com/empowermint/edinburgh-indie-gamers'
        deployUrl='https://edinburghindiegamers.com/'
        tags={['React', 'Next', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'CSS', 'CI/CD']}>
          <p>Here is a sample paragraph</p>
          <p>And another one</p>
      </ProjectBlock>
      <ProjectBlock
        name="Conway's Disco of Life"
        gitHubUrl='https://github.com/empowermint/conways-game-of-life'
        deployUrl='empowermint.github.io/conways-game-of-life/'
        tags={['JavaScript', 'CSS', 'HTML']}>
          <p>A web-page implementation of Conway's Game of Life inspired by the disco dance floors of the 70s!</p>
      </ProjectBlock>
      <ProjectBlock
        name='Erasure Poetry'
        gitHubUrl='https://github.com/empowermint/erasurepoetry'
        deployUrl='https://empowermint.github.io/erasurepoetry/'
        tags={['JavaScript', 'CSS', 'HTML']}>
          <p>A one-page app that generates erasure poetry from a user's text</p>
      </ProjectBlock>
    </>
  )
}
