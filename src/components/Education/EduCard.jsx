import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EduCard({textData}) {
  return (
    <Card sx={{ color: "#ffffff", maxWidth: 345, backgroundColor: '#434548', border: 'solid 0.1rem #9c9fa5'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {`${textData.imgPath}`}
          alt="pic"
        />
        <CardContent sx={{textAlign: "center"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize: "1.2rem", height: "3.5rem"}}>
          {textData?.data1}
          </Typography>
          <Typography>
          <b>{textData?.data2}</b>
          </Typography>
          <Typography>
          <b>{textData?.data3}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}