import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  const frontend = {
    name: "Frontend Stack",
    skills: [
      "JavaScript",
      "React/Redux",
      "HTML",
      "CSS",
      "Bootstrap",
      "Ejs",
      "JQuery",
      "AJAX",
    ],
  };
  const backend = {
    name: "Backend Stack",
    skills: ["Python", "Django", "PostgreSQL", "Node.js", "Ruby", "MySQL"],
  };

  return (
    <>
      <h1 className="ui center aligned basic segment">Skills</h1>
      <div className="ui centered raised cards">
        <SkillsCard skills={frontend} />
        <SkillsCard skills={backend} />
      </div>
    </>
  );
};
export default Skills;
