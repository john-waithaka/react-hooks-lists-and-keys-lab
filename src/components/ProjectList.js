import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
       {/* Warui Add code to map the array and include working props*/}
        
       const projectItems = projects.map((project) => (
        <ProjectItem
        key={project.id}
        name={project.name}
        about={project.about}
        technologies={project.technologies}
      />
      ))

        {/* what should we see */}

        return (
          <div id="projects">
            <h2>My Projects</h2>
            <div id="project-list">{projectItems}</div>
          </div>
        );


}

export default ProjectList;
