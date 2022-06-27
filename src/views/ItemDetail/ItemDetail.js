import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../../components/ItemCount/ItemCount';



const ItemDetail = ({data}) => {
  return (
    <div className='item'>
    <Card sx={{ width: 200, height: 400}}>
      <CardActionArea className='card-img'>
        <div >
        <CardMedia
          component="img"
          height="200"
          image={data.img}
          alt={data.nombre}
        />
        </div>
        <div className='cards-components'>
        <CardContent>
          <div>
          <Typography variant="body3" component="div">
            {data.nombre}
          </Typography>
          </div>
          <div>
          <Typography variant="body3" color="text.secondary">
            {data.precio}
          </Typography>
          </div>
        </CardContent>
        </div>
      </CardActionArea>

      <CardActions className='item-count'>
        
          <ItemCount/>
        
      </CardActions>

    </Card>

    </div>
  );
}

export default ItemDetail;