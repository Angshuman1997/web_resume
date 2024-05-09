import * as React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { Grid, Typography } from "@mui/material";

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

export default function SkillGauge() {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item key={item.id} xs={6} sm={4} md={3} lg={2}>
          <div
            className="sg"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Gauge
              width={100}
              height={100}
              value={item.value} // Set a constant value to show the gauge as a full circle
              cornerRadius="50%"
              sx={(theme) => ({
                [`& .${gaugeClasses.valueText}`]: {
                  display: "none", // Hide the value text
                },
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: item.color, // Use item color for the gauge
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: "#e9e9e9",
                },
              })}
            />
            <Typography variant="body2">{item.label}</Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
