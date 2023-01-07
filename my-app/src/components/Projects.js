import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../apis/projects";

const Projects = (props) => {
  // const [projectInfo, setProjectInfo] = useState([]);

  // const fetchProjects = async () => {
  //   const response = await projects.get("/projects/");
  //   console.log("here", response);
  //   setProjectInfo(response.data);
  // };

  // const createProjectCards = () => {
  //   return (
  //     <div className="ui three stackable raised cards">
  //       {projectInfo.map((project) => {
  //         if (!project) {
  //           return <div>Loading..</div>;
  //         } else {
  //           return (
  //             <ProjectCard
  //               name={project.name}
  //               description={project.description}
  //               image={project.image}
  //               github={project.github}
  //               demo={project.demo}
  //               key={project.name}
  //             />
  //           );
  //         }
  //       })}
  //     </div>
  //   );
  // };

  // useEffect(() => {
  //   fetchProjects();
  // }, []);

  return (
    <>
      <div className="ui center aligned container">
        <h1>Projects</h1>
      </div>
      <ProjectCard
        name={props.name}
        description={props.description}
        image={props.image}
        github={props.github}
        demo={props.demo}
      />
      {/* {createProjectCards()} */}
    </>
  );
};

export default Projects;
