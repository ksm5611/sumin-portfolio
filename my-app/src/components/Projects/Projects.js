import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = (props) => {
  return (
    <>
      <div className="ui center aligned container" id="projects">
        <h1 className="SectionTitle">Projects</h1>
      </div>
      <ProjectCard
        name={props.name}
        description={props.description}
        image={props.image}
        github={props.github}
        demo={props.demo}
      />
    </>
  );
};

export default Projects;
