import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import SkillPie from "./SkillPie";
import SkillGauge from "./SkillGauge";

const Skills = () => {
  return (
    <Container id="skills">
      <Slide direction="left">
        <h1 className="skill-set-title" style={{ textAlign: "center" }}>
          Skill Set
        </h1>
      </Slide>
      <SkillCon>
        {window.innerWidth <= 768 ? <SkillGauge /> : <SkillPie />}
      </SkillCon>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  min-height: 300px;
  margin: 0 auto;
  padding: 3.5rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1.skill-set-title {
    padding-top: 1rem;
    color: #ffffff;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: center;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #ffffff;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const SkillCon = styled.div`
  margin-top: 3rem;
  border: 0.2rem solid white;
  padding: 2rem;
  background: #535353;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
