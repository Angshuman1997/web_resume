import React, { useState } from 'react'
import styled from 'styled-components';
import { GiCloudRing } from "react-icons/gi";

const Header = () => {
    const [bar, setBar] = useState(false);
  return (
    <Container bar={bar}>
        <Logo>
            <span><GiCloudRing/></span>
            <h1>UI Resume</h1>
        </Logo>
        <Nav bar={bar}>
            <button onClick={() => setBar(!bar)}><a href="#home">Home</a></button>
            <button onClick={() => setBar(!bar)}><a href="#experience">Experience</a></button>
            <button onClick={() => setBar(!bar)}><a href="#education">Education</a></button>
            <button onClick={() => setBar(!bar)}><a href="#skills">Skills</a></button>
            <button onClick={() => setBar(!bar)}><a href="#project">Projects</a></button>
            <button onClick={() => setBar(!bar)}><a href="#footer">Connect</a></button>
        </Nav>
        <div
        onClick={() => setBar(!bar)}
        className="bars">
            <div className="bar"></div>
        </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background-color: #2f3337;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: 0.5rem 0 0 0;
    position: fixed;
    z-index: 2;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 100%;
    }
    .bars{
        display: none;
    }
    @media(max-width:640px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            margin-right: 2rem;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }

                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 2rem;
    span{
        font-size: 1.8rem;
        color: rgb(200 209 217);
    }

    h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
`
const Nav = styled.div`
    @media(max-width:640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #2f3337;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    button{
        margin-right: 1.5rem;
        padding: 1rem 0;
        border: none;
        background: none;
        a{
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            position: relative;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #ffffff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                opacity: 0.7;
            }
        }
    }
`