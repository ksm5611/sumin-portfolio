import React from "react";
// import Dropdown from "../Dropdown/Dropdown";
// import Header from "../Header/Header";
import {
  IntroContainer,
  IntroWrapper,
  IntroLeft,
  IntroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./IntroElements";

const Intro = () => {
  return (
    <main>
      <IntroContainer>
        <IntroWrapper>
          <IntroLeft>
            <h1>Hi, I'm Sumin Kim</h1>
            <h5>Full Stack Web Developer</h5>
            <p>
              I am an enthusiastic, responsible and hard-working as a software
              developer.
            </p>
          </IntroLeft>
          {/* <IntroRight>
            <Image
              src="https://gurupawar.github.io/portfolio/assets/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </IntroRight> */}
        </IntroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            {/* <img
              src="https://raw.githubusercontent.com/gurupawar/portfolio/main/assets/scroll-down.svg"
              alt="scroll-down"
            /> */}
          </ScrollLink>
        </ScrollDown>
      </IntroContainer>
    </main>
  );
};

export default Intro;
