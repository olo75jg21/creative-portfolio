import React from "react";
import styles from "./ProjectCard.module.scss";
import { Project } from "@/types";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.cardContainer}>
      {/* <img src={project.thumbnail} alt={project.title} className={styles.thumbnail} /> */}
      <div className={styles.card}>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.technology}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
