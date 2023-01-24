import React, { useState } from "react";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  IntroContainer,
  IntroWrapper,
  IntroLeft,
  ScrollLink,
  ScrollUp,
  Arrow,
} from "./IntroElements";

const Intro = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <main id="nav">
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle} />
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
        </IntroContainer>
      </main>
      <Arrow>
        <ScrollUp to="nav">
          <ScrollLink>
            <ArrowCircleUpOutlinedIcon fontSize="40px" />
          </ScrollLink>
        </ScrollUp>
      </Arrow>
    </>
  );
};

export default Intro;
