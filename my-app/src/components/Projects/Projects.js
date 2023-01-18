import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = (props) => {
  return (
    <>
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Projects</div>
          <ProjectCard
            name={props.name}
            description={props.description}
            image={props.image}
            github={props.github}
            demo={props.demo}
          />
        </div>
      </div>
      {/* <div className="ui center aligned container" id="projects">
        <h1 className="SectionTitle">Projects</h1>
      </div> */}
      {/* <ProjectCard
        name={props.name}
        description={props.description}
        image={props.image}
        github={props.github}
        demo={props.demo}
      /> */}
    </>
  );
};

export default Projects;
