import React from "react";
import SkillsList from "./SkillsList";
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
      "SemanticUI",
    ],
  };
  const backend = {
    name: "Backend Stack",
    skills: ["Python", "Django", "AWS", "PostgreSQL"],
  };
  const gameDev = {
    name: "Game Development",
    skills: ["Unity", "Phaser", "PyGame"],
  };

  return (
    <>
      <h1 className="ui center aligned basic segment">Skills</h1>
      <div className="ui centered raised cards">
        <SkillsCard skills={frontend} />
        <SkillsCard skills={backend} />
        <SkillsCard skills={gameDev} />
      </div>
    </>
  );
};
export default Skills;
