import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { Icon, jType, design, period, compName } = props;
  return (
    <Container>
      <div>{Icon}</div>
      <h1>{compName}</h1>
      <div className="jtitle">{`${design}, ${jType}`}</div>
      <div className="period"><b>( {period} )</b></div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  background: #2f3337;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 3rem;
  text-align: center;
  div.jtitle {
    margin-bottom: 1rem;
    font-family: system-ui;
    height: 4rem;
  }

  div.period {
    font-size: 0.8rem;
  }


  h1 {
    height: 5rem;
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
