import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';


const Item = ({productos}) => {
  return (
    <div className='Item'>
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={productos.img}
          alt={productos.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productos.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productos.precio}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className='item-count'>
        
          <ItemCount/>
        
      </CardActions>

    </Card>

    </div>
  );
}

export default Item;