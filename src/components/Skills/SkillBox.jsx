import * as React from "react";
import Box from "@mui/material/Box";
import SkillChip from "./SkillChip";
import styled from "styled-components";

export default function SkillBox({ contentData }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        backgroundColor: "#ffffff00",
        margin: "0 1rem",
        overflow: "scroll",
        '&::-webkit-scrollbar': {
            display: 'none'
         }
      }}
    >
      <div>
        <div>
          <Title className="skill-title">{contentData?.title}</Title>
          <SkillChip itemsList={contentData?.items} />
        </div>
      </div>
    </Box>
  );
}

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  color: #0d3b81;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width:840px){
    font-size: 1.2rem;
}
`;
