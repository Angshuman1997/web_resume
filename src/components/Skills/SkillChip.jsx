import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

export default function SkillChip({ itemsList }) {
  return (
    <div style={{margin: "0 1rem"}}>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2%",
        }}
      >
        {Object.keys(itemsList).map((i, index) => (
          <React.Fragment key={`${itemsList[i]}-${index}`}>
            <Chip
              sx={{
                maxHeight: "200vh",
                height: "100%",
                background: "#0d3b81",
                border: "1px solid #7c7f85",
                padding: "10px",
                boxShadow: "5px 10px 8px #888888",
                color: "#ffffff",
                "@media(max-width:840px)": {
                  fontSize: "0.72rem",
                  padding: "4px",
                },
              }}
              label={
                <div style={{ marginBottom: "0.5rem" }}>
                  <ItemTitle>{itemsList[i]?.subTitle}</ItemTitle>
                  {itemsList[i]?.frameworks?.length > 0 ? (
                    <Stack direction="column" spacing={1}>
                      {Object.keys(itemsList[i]?.frameworks).map((j, jndex) => (
                        <React.Fragment
                          key={`${itemsList[i]?.frameworks[j]}-${jndex}`}
                        >
                          <Chip
                            label={`${itemsList[i]?.frameworks[j]}`}
                            sx={{
                              margin: "0.5rem",
                              background: "#dde5eb",
                              color: "#000000",
                              "@media(max-width:840px)": {
                                fontSize: "0.6rem",
                                fontWeight: "600",
                              },
                            }}
                          />
                        </React.Fragment>
                      ))}
                    </Stack>
                  ) : (
                    <></>
                  )}
                </div>
              }
              variant="outlined"
            />
          </React.Fragment>
        ))}
      </Stack>
    </div>
  );
}

const ItemTitle = styled.h3`
  padding: 1rem 0.5rem;
  text-align: center;
  font-weight: 600;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
