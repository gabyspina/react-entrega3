import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './Item.css';


const Item = ({productos}) => {
  return (
    <div className='item'>
    <Card sx={{ width: 500, height: 400}}>
      <CardActionArea className='card-img'>
        <div >
        <CardMedia
          component="img"
          height="300"
          image={productos.img}
          alt={productos.nombre}
        />
        </div>
        <div className='cards-components'>
        <CardContent>
          <div>
          <Typography variant="body3" component="div">
            {productos.nombre}
          </Typography>
          </div>
          <div>
          <Typography variant="body3" color="text.secondary">
            {productos.precio}
          </Typography>
          </div>
        </CardContent>
        </div>
      </CardActionArea>



    </Card>

    </div>
  );
}

export default Item;