import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, label: "JavaScript", value: 90, color: "#004ccc" },
  { id: 1, label: "ReactJs", value: 80, color: "#16c720" },
  { id: 2, label: "Redux", value: 70, color: "#FFC300" },
  { id: 3, label: "Node/Express", value: 70, color: "#900C3F" },
  { id: 4, label: "TypeScript", value: 30, color: "#0080FF" },
  { id: 5, label: "Python", value: 60, color: "#FF5733" },
  { id: 6, label: "FastAPI", value: 40, color: "#33CC33" },
  { id: 7, label: "Flask", value: 40, color: "#b51b1b" },
  { id: 8, label: "GIT", value: 80, color: "#5e6ceb" },
  { id: 9, label: "AWS", value: 45, color: "#bbd561" },
  { id: 10, label: "DSA", value: 70, color: "#e30a0a" },
  { id: 11, label: "System Design", value: 65, color: "#9900FF" },
];

const ChartWrapper = ({ children }) => (
  <div
    style={{
      cursor: "pointer",
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto",
    }}
  >
    {children}
  </div>
);

export default function SkillPie() {
  return (
    <ChartWrapper>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            innerRadius: 30,
            outerRadius: 200,
            paddingAngle: 2,
            cornerRadius: 2,
            startAngle: -90,
            endAngle: 270,
          },
        ]}
        height={500}
        sx={{
          "& text tspan": {
            fill: "white",
          },
        }}
      />
    </ChartWrapper>
  );
}
