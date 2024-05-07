import { Grid, Typography, LinearProgress } from '@mui/material';

const data = [
  { label: "JavaScript", value: 90 },
  { label: "ReactJs", value: 80 },
  { label: "Redux", value: 70 },
  { label: "Node/Express", value: 70 },
  { label: "TypeScript", value: 45 },
  { label: "Python", value: 65 },
  { label: "FastAPI", value: 50 },
  { label: "Flask", value: 80 },
  { label: "GIT", value: 80 },
  { label: "AWS", value: 45 },
  { label: "DSA", value: 70 },
  { label: "System Design", value: 65 },
];

export default function SkillBar() {
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid item xs={6} key={index}>
          <Typography variant="subtitle1" align="center">{item.label}</Typography>
          <LinearProgress
            variant="determinate"
            value={item.value}
            sx={{
              borderRadius: '0.2rem',
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
              height: '20px',
              backgroundColor: "#d7d7d7",
              '& .MuiLinearProgress-barColorPrimary': {
                backgroundColor: '#2b2d31', // Red color for progress bar
              },
              '& .MuiLinearProgress-bar': {
                backgroundImage: `linear-gradient(to right, #2b2d31 ${item.value}%, transparent ${item.value}%)`, // Adjust background based on progress
              },
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
