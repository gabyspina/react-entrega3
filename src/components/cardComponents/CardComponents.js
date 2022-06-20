import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';



const CardComponents = (info) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image={info.img}
          alt={info.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.precio}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        
          <ItemCount/>
        
      </CardActions>

    </Card>
  );
}

export default CardComponents;