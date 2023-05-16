import React from "react";
import styled from "styled-components";

const Project = (props) => {
  const { img, disc, url } = props.item;
  return (
    <Container className="project" onClick={()=>url !== "/" && window.open(url, "_blank")}>
      <img src={img} alt="project" />
      <div className="disc">
        <Conta>
          <h1>{disc}</h1>
          <span>{url}</span>
        </Conta>
      </div>
    </Container>
  );
};

export default Project;

const Conta = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  h1 {
    padding: 0;
  }
  span {
    margin: 0 0 1rem 0;
  }
`;

const Container = styled.div`
  height: 20rem;
  background-color: #656e7000;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: "25px";
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0-rem;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
      a {
        margin-left: 0.4rem;
        color: #ffffff;
        font-weight: 600;
      }
    }
  }

  :hover > img {
    transform: scale(1.3);
  }

  :hover > .disc {
    bottom: 0;
  }
`;
