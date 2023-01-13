import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutMeElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            Hello! My name is <strong>Sumin Kim</strong> and I enjoy creating
            and learning new stacks. My interest in web development started back
            in 2020, I decided to try studying web development to .
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => {
              return (
                <Tech key={index} className="tech">
                  <TechImg src={stack.img} />
                  <TechName>{stack.name}</TechName>
                </Tech>
              );
            })}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
