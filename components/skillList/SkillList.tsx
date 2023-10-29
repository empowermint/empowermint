import styles from "./skillList.module.css";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandGit,
  IconStethoscope,
  IconCloudUpload,
  IconCirclesRelation,
  IconBrandAmazon,
  IconBrandCucumber,
  IconLambda,
} from "@tabler/icons-react";

export function SkillList() {
  const skills = [
    { name: "AWS", icon: <IconBrandAmazon /> },
    { name: "TypeScript", icon: <IconBrandTypescript /> },
    { name: "React", icon: <IconBrandReact /> },
    { name: "Next.js", icon: <IconBrandNextjs /> },
    { name: "CI/CD", icon: <IconCirclesRelation /> },
    { name: "IaC", icon: <IconCloudUpload /> },
    { name: "Serverless", icon: <IconLambda /> },
    { name: "TDD", icon: <IconStethoscope /> },
    { name: "Cucumber", icon: <IconBrandCucumber /> },
    { name: "HTML", icon: <IconBrandHtml5 /> },
    { name: "(S)CSS", icon: <IconBrandCss3 /> },
    { name: "JavaScript", icon: <IconBrandJavascript /> },
    { name: "Git", icon: <IconBrandGit /> },
  ];

  return (
    <div className={styles.wrapper}>
      <ul className={styles.skillList}>
        {skills.map((skill, i) => {
          return (
            <li key={i}>
              {skill.icon}
              {skill.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
