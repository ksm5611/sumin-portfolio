import React, { useState, useEffect } from "react";
import projects from "../../../apis/projects";
import { Card, CardLeft, CardRight, BtnGroup } from "./ProjectCardElements";

const ProjectCard = () => {
  const [projectInfo, setProjectInfo] = useState([]);

  const fetchProjects = async () => {
    const response = await projects.get("/projects/");
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
              <Card key={project.name}>
                <CardLeft>
                  <img alt="img" src={project.image} />
                </CardLeft>
                <CardRight>
                  <h4 className="header">{project.name}</h4>
                  <div className="description">{project.description}</div>
                  <BtnGroup>
                    <a href={project.github} className="btn btn2 SecondarBtn">
                      github
                    </a>
                  </BtnGroup>
                </CardRight>
              </Card>
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
