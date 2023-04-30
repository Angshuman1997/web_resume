import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Notification from "./Notification";

const Footer = () => {
  const [fname, setFName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [msg, setMsg] = useState("");
  const [subBtnDisFunc, setSubBtnDisFunc] = useState(true);
  const [subBtnDisStyle, setSubBtnDisStyle] = useState(true);
  const [submitBtnTxt, setSubmitBtnTxt] = useState("Send");
  const [openNotify, setOpenNotify] = useState(false);
  const [statusNotify, setStatusNotify] = useState(400);

  useEffect(() => {
    if (fname !== "" && emailId !== "" && msg !== "") {
      let disable = true;
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailId)) {
        disable = false;
      }
      setSubBtnDisFunc(disable);
      setSubBtnDisStyle(disable);
    } else {
      setSubBtnDisFunc(true);
      setSubBtnDisStyle(true);
    }
  }, [fname, emailId, msg]);

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (openNotify) {
      setTimeout(() => {
        setOpenNotify(false);
      }, 5000);
    }
  }, [openNotify]);

  const resetValue = () => {
    setOpenNotify(true);
    setSubBtnDisFunc(true);
    setSubBtnDisStyle(true);
    setSubmitBtnTxt("Send");
    setEmailId("");
    setFName("");
    setMsg("");
  };

  const onSend = (data) => {
    axios
      .post(process.env.REACT_APP_EMAILJS_URL, {
        service_id: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        template_id: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        user_id: process.env.REACT_APP_EMAILJS_USER_ID,
        template_params: {
          name: data.fname,
          email: data.emailId,
          message: data.msg,
        },
      })
      .then(function (response) {
        resetValue();
        setStatusNotify(response.status);
      })
      .catch(function (error) {
        resetValue();
        setStatusNotify(400);
      });
  };

  return (
    <>
      <Container2 id="footer">
        <Slide direction="left" delay={1}>
          <h1>Connect</h1>
        </Slide>
      </Container2>
      <Container>
        <Profile>
          <div className="links">
            <Slide direction="left">
              <h1>Contact me directly:</h1>
            </Slide>
            <div>
              <span>
                <FiPhoneCall />
              </span>
              <Slide direction="left">
                <h4>+91 8697031476</h4>
              </Slide>
            </div>
            <div>
              <Slide direction="left">
                <span>
                  <HiOutlineMailOpen />
                </span>
              </Slide>
              <Slide>
                <h4>bardhanangshu@gmail.com</h4>
              </Slide>
            </div>
          </div>
          <div className="profiles">
            <Slide direction="left">
              <h1>Check my profiles</h1>
            </Slide>
            <div className="icons">
              <Zoom>
                <span>
                  <a
                    href={process.env.REACT_APP_GITHUB}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a
                    href={process.env.REACT_APP_LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a
                    href={process.env.REACT_APP_INSTAGRAM}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram />
                  </a>
                </span>
              </Zoom>
            </div>
          </div>
          <Fade>
            <ArrowUp onClick={scrollUp}>
              <AiOutlineArrowUp />
            </ArrowUp>
          </Fade>
        </Profile>
        <Form>
          <Slide direction="right">
            <form>
              <div className="name">
                <span>
                  <CgProfile size={25} />
                </span>
                <input
                  value={fname}
                  type="text"
                  placeholder="Fullname..."
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}
                />
              </div>
              <div className="email">
                <span>
                  <MdAlternateEmail size={25} />
                </span>
                <input
                  value={emailId}
                  type="email"
                  placeholder="Email..."
                  onChange={(e) => {
                    setEmailId(e.target.value);
                  }}
                />
              </div>
              <div className="message">
                <span className="messageIcon">
                  <FiMail size={25} />
                </span>
                <textarea
                  value={msg}
                  cols="30"
                  rows="10"
                  placeholder="Message..."
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                onClick={() => {
                  setSubmitBtnTxt(
                    <CircularProgress color="inherit" size={20} />
                  );
                  setSubBtnDisFunc(true);
                  onSend({ fname: fname, emailId: emailId, msg: msg });
                }}
                disabled={subBtnDisFunc}
                style={{
                  opacity: subBtnDisStyle ? 0.5 : 1,
                  cursor: subBtnDisFunc ? "not-allowed" : "pointer",
                }}
              >
                {submitBtnTxt}
              </button>
            </form>
          </Slide>
        </Form>
      </Container>
      <Notification
        status={statusNotify}
        openNotify={openNotify}
        setOpenNotify={setOpenNotify}
      />
    </>
  );
};

export default Footer;

const Container2 = styled.div`
  color: rgb(93, 156, 211); 
  text-align: center;
  @media (max-width: 840px) {
    padding-top: 5rem;
  }
`;

const Container = styled.div`
  color: rgb(93, 156, 211);
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 70%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 10%;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
const Profile = styled.div`
  flex: 1;
  h4 {
    font-weight: 400;
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: #add8e6;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #688dadf7;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: #0096ff;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: rgb(93, 156, 211);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #ffffff;
    padding: 0.8rem;
    border-radius: 5px;
    border: 0.1rem solid gray;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #000000;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #c8dfde;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 100%;
      height: 1.8rem;
      background-color: rgb(93, 156, 211);
      color: #ffffff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
