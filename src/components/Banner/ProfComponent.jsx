import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'm</span>
          </h4>
          <h1 className="green">Angshuman Bardhan</h1>
          <h3>Full Stack Developer</h3>
          <p>
            A reliable and responsible individual with good knowledge of both
            Programming and Analytics. Possessing good communication and
            interpersonal skills, is fully capable of working on own initiative,
            but can also work as part of a team.
          </p>
          <Social>
            <p>Social Links</p>
            <div className="social-icons">
              <span>
                <a
                  href={process.env.REACT_APP_INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a
                  href={process.env.REACT_APP_GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub />
                </a>
              </span>
              <span>
                <a
                  href={process.env.REACT_APP_LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
          <ResumeBtn>
            <button>
              <a
                href={require("../../assets/resume/resume.pdf")}
                download="Angshuman_Bardhan_Resume.pdf"
              >
                Download Resume
              </a>
            </button>
          </ResumeBtn>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={require("../../assets/images/face_pro_pic.jpg")}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  span {
    color: #ffffff;
  }
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
    color: #ffffff;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #397ab1;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    border-radius: 50%;
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;

const ResumeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  button {
    background-color: #ffffff;
    border: none;
    width: 10rem;
    height: 3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 1.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: #5d9cd3;
    cursor: pointer;
  }

  a {
    color: #0060b6;
    text-decoration: none;
  }
`;
