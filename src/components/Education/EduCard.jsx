import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EduCard({textData}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#b5dded', border: 'solid 0.1rem #b3c1c0'}}>
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
          <Typography variant="body2" color="text.secondary">
          <b>{textData?.data2}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <b>{textData?.data3}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}