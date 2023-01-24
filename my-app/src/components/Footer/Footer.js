import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;
  span {
    position: absolute;
    bottom: 4rem;
    color: #ccc;
    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Code developed by{" "}
          <a
            href="https://github.com/ksm5611/sumin-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            @suminkim
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
