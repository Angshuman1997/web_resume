import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Experience = () => {
  return (
    <Container id="experience">
      <Slide direction="up">
        <h1 style={{textAlign: "center"}}>Work Experience</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={
              <img
                src={require("../../assets/images/ust_logo.png")}
                alt="ust_logo"
                style={{ width: "6rem", height: "6rem", borderRadius: "0.8rem" }}
              />
            }
            compName={"UST GLOBAL"}
            design={"Developer III"}
            jType={"Full Time"}
            period={"Jan 2023 - Present"}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={
              <img
                src={require("../../assets/images/piktorlabs_logo.png")}
                alt="piktorlabs_logo"
                style={{ width: "6rem", height: "6rem", borderRadius: "0.8rem" }}
              />
            }
            compName={"PIKTORLABS"}
            design={"Software Engineer"}
            jType={"Full Time"}
            period={"Jan 2022 - Dec 2022"}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={
              <img
                src={require("../../assets/images/klizo_solutions_logo.png")}
                alt="klizo_solutions_logo"
                style={{ width: "6rem", height: "6rem", borderRadius: "0.8rem" }}
              />
            }
            compName={"KLIZO SOLUTIONS"}
            design={"Python Developer"}
            jType={"Full Time"}
            period={"Dec 2020 - Dec 2021"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={
              <img
                src={require("../../assets/images/tika_data_logo.png")}
                alt="tika_data_logo"
                style={{ width: "6rem", height: "6rem", borderRadius: "0.8rem" }}
              />
            }
            compName={"TIKA DATA SERVICES"}
            design={"Data Annotation / Analyst Intern"}
            jType={"Internship"}
            period={"July 2020 - Oct 2020"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={
              <img
                src={require("../../assets/images/inventateq_logo.png")}
                alt="inventateq_logo"
                style={{ width: "6rem", height: "6rem", borderRadius: "0.8rem" }}
              />
            }
            compName={"INVENTATEQ"}
            design={"Data Science Trainee"}
            jType={"Internship"}
            period={"Mar 2019 - Aug 2019"}
          />
        </Slide>
        <Slide direction="right">
        <Card
        Icon={
          <img
            src={require("../../assets/images/siemens_logo.png")}
            alt="siemens_logo"
            style={{ width: "6rem", height: "6rem", borderRadius: "0.8rem" }}
          />
        }
        compName={"SIEMENS"}
        design={"Trainee"}
        jType={"Internship"}
        period={"Jan 2019 - Feb 2019"}
      />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Experience;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3.8rem 0 1.5rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
