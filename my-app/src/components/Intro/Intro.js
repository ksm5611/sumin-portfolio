import React from "react";
// import Dropdown from "../Dropdown/Dropdown";
// import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./IntroElements";

const Intro = () => {
  return (
    <main>
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Sumin Kim</h1>
            <h5>Full Stack Web Developer</h5>
            <p>
              I am an enthusiastic, responsible and hard-working as a software
              developer.
            </p>
          </HeroLeft>
          {/* <HeroRight>
            <Image
              src="https://gurupawar.github.io/portfolio/assets/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </HeroRight> */}
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            {/* <img
              src="https://raw.githubusercontent.com/gurupawar/portfolio/main/assets/scroll-down.svg"
              alt="scroll-down"
            /> */}
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
};

export default Intro;
