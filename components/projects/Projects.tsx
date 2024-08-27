import React from "react";
import styles from "./Projects.module.css";
import { projectsData } from "@/data";

const Projects = () => {
  return (
    <div>
      <div className={styles.projectsContainer}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            {/* <img src={project.thumbnail} alt={project.title} className={styles.thumbnail} /> */}
            <div className={styles.cardContent}>
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
