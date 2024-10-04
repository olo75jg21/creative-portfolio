import React from "react";
import styles from "./Projects.module.css";
import { projectsData } from "@/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <div className={styles.projectsContainer}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
