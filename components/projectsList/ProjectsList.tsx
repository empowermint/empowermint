import styles from "./projectsList.module.css";
import ProjectBlock from "../projectBlock/ProjectBlock";

export function ProjectsList() {
  return (
    <>
      <ProjectBlock
        name="Git Mountains"
        gitHubUrl="https://github.com/empowermint/git-mountains"
        deployUrl="https://git-mountains.netlify.app/empowermint"
        tags={[
          "React Three Fibre",
          "Three.js",
          "React",
          "Next.js",
          "Tailwind",
          "CI/CD",
        ]}
      >
        <p>
          A web app that visualises a GitGub user's contribution history as a
          three-dimensional mountain range.
        </p>
      </ProjectBlock>
      <ProjectBlock
        name="Edinburgh Indie Gamers"
        gitHubUrl="https://github.com/empowermint/edinburgh-indie-gamers"
        deployUrl="https://edinburghindiegamers.com/"
        tags={[
          "React",
          "Next.js",
          "TypeScript",
          "HTML",
          "SCSS",
          "CSS",
          "CI/CD",
        ]}
      >
        <p>Marketing website for a thriving game community in Edinburgh</p>
        <p>
          Uses the Discord API to access and render events information from the
          club's Discord server
        </p>
      </ProjectBlock>
      <ProjectBlock
        name="Conway's Disco of Life"
        gitHubUrl="https://github.com/empowermint/conways-game-of-life"
        deployUrl="empowermint.github.io/conways-game-of-life/"
        tags={["JavaScript", "CSS", "HTML"]}
      >
        <p>
          Implementation of Conway's Game of Life inspired by the disco dance
          floors of the 70s!
        </p>
      </ProjectBlock>
      <ProjectBlock
        name="Erasure Poetry"
        gitHubUrl="https://github.com/empowermint/erasurepoetry"
        deployUrl="https://empowermint.github.io/erasurepoetry/"
        tags={["JavaScript", "CSS", "HTML"]}
      >
        <p>Generates erasure poetry from a user's text</p>
      </ProjectBlock>
    </>
  );
}
