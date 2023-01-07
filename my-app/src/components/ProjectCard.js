import React, { useState, useEffect } from "react";
import projects from "../apis/projects";

const ProjectCard = () => {
  const [projectInfo, setProjectInfo] = useState([]);

  const fetchProjects = async () => {
    const response = await projects.get("/projects/");
    console.log("here", response);
    setProjectInfo(response.data);
  };

  const createProjectCards = () => {
    return (
      <div className="ui three stackable raised cards">
        {projectInfo.map((project) => {
          if (!project) {
            return <div>Loading..</div>;
          } else {
            return (
              <div className="card" key={project.name}>
                <div className="image">{project.image}</div>
                <div className="content">
                  <div className="header">{project.name}</div>
                  <div className="description">
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className="extra content">
                  <button className="ui button">github</button>
                  <button className="ui button">Demo</button>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return <>{createProjectCards()}</>;
};

export default ProjectCard;
