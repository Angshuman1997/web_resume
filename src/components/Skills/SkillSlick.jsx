import React from "react";
import Slider from "react-slick";
import SkillBox from "./SkillBox";

const SkillSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  const skillData = [
    {
      title: "Frontend Development",
      items: [
        { subTitle: "JavaScript", frameworks: ["React Js", "Redux"] },
        { subTitle: "HTML", frameworks: [] },
        { subTitle: "CSS", frameworks: [] },
        {
          subTitle: "Testing (Unit, Integration, E2E)",
          frameworks: ["React Testing Library", "Jest", "Enzyme", "TestCafe"],
        },
      ],
    },
    {
      title: "Backend Development",
      items: [
        {
          subTitle: "JavaScript (Node Js)",
          frameworks: ["Express Js"],
        },
        { subTitle: "Python", frameworks: ["Django", "Flask", "FastAPI"] },
      ],
    },
    {
      title: "Database Management",
      items: [
        { subTitle: "MongoDB", frameworks: [] },
        { subTitle: "SQL", frameworks: [] },
      ],
    },
    {
      title: "Data Analytics / Machine Learning",
      items: [
        {
          subTitle: "Python",
          frameworks: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
        },
      ],
    },
    {
      title: "Computer Vision",
      items: [{ subTitle: "Python", frameworks: ["OpenCV", "Pillow"] }],
    },
    {
      title: "Data Extraction",
      items: [
        {
          subTitle: "Python",
          frameworks: ["Selenium", "BeautifulSoup", "Requests", "Urllib3"],
        },
      ],
    },
    {
      title: "Cloud Services",
      items: [
        { subTitle: "Github", frameworks: [] },
        { subTitle: "Gitlab", frameworks: [] },
        { subTitle: "Bitbucket", frameworks: [] },
        { subTitle: "Azure", frameworks: ["DevOps"] },
        {
          subTitle: "AWS",
          frameworks: ["S3", "Lambda", "DynamoDB", "Amplify"],
        },
      ],
    },
    {
      title: "Email Services",
      items: [
        { subTitle: "Email JS", frameworks: [] },
        { subTitle: "Mailgun", frameworks: [] },
        { subTitle: "Gmail SMTP service", frameworks: [] },
      ],
    },
  ];

  return (
    <div className="content-skill" style={{ margin: "2rem 0" }}>
      <Slider {...settings}>
        {Object.keys(skillData).map((i, index) => (
          <React.Fragment key={`${skillData[i]}-${index}`}>
            <SkillBox contentData={skillData[i]} />
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
};

export default SkillSlick;
