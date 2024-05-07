import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import EduCard from "./EduCard";

const Education = () => {
  return (
    <Container id="education">
      <Slide direction="down">
        <h1 style={{ textAlign: "center"}}>Educational Background</h1>
      </Slide>
      <Cards>
      <Fade>
        <EduCard textData={{
          data1: 'Bangalore Institute of Technology',
          data2: 'Board - VTU',
          data3: 'Year of Passing - 2020',
          imgPath: require("../../assets/images/bit_pic.png")
        }} />
        </Fade>
        <Fade>
        <EduCard textData={{
          data1: 'St. Pauls Mission School',
          data2: 'Board - ISC',
          data3: 'Year of Passing - 2015',
          imgPath: require("../../assets/images/spms_pic.png")
        }} />
        </Fade>
        <Fade>
        <EduCard textData={{
          data1: 'St. Thomas Day School',
          data2: 'Board - ICSE',
          data3: 'Year of Passing - 2013',
          imgPath: require("../../assets/images/stds_pic.png")
        }} />
        </Fade>
      </Cards>
    </Container>
  );
};

export default Education;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3.8rem 0 1.5rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    color: #ffffff;
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
