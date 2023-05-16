import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: require("../../assets/images/fludty-thumbnail.png"),
    disc: "Fludty",
    url: "https://fludty.onrender.com/"
  },
  {
    img: require("../../assets/images/no_image.png"),
    disc: "Project 2",
    url: "/"
  },
  {
    img: require("../../assets/images/no_image.png"),
    disc: "Project 3",
    url: "/"
  },
  {
    img: require("../../assets/images/no_image.png"),
    disc: "Project 4",
    url: "/"
  },
  {
    img: require("../../assets/images/no_image.png"),
    disc: "Project 5",
    url: "/"
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack size={20} />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward size={20} />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 3rem;
    height: 3rem;
    background-color: rgb(255, 255, 255);
    border: 0.1rem solid #ffffff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 20%;
    cursor: pointer;
    color: rgb(10 172 189);
    position: absolute;
    top: 45%;
    right: -1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 840px) {
      top: 87.5%;
    }
  }

  .back {
    left: -1rem;
    margin-left: -1.2rem;
    @media (max-width: 840px) {
      margin-left: 2rem;
    }
  }

  .next {
    margin-right: -1.2rem;
    @media (max-width: 840px) {
      margin-right: 2rem;
    }
  }
`;
