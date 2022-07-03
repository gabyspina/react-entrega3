import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../../components/ItemCount/ItemCount';
import { useState } from 'react';
import './ItemDetail.css';



const ItemDetail = ({data}) => {

  const [cant,setCant] = useState(0)

  const onAdd = (count) => {
  
  console.log(`Se agregaron al carrito:${cant} elementos`)
  
  setCant(count)
  
  }

  return (
    <div className='item'>
    <Card className='card' sx={{ width: 1200, height: 500}}>
      <CardActionArea className='card-img'>
        <div >
        <CardMedia
          component="img"
          height="300"
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

        <div className='itemCount'>
            <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />  
        </div>

      </CardActionArea>

    </Card>


    </div>
  );
}

export default ItemDetail;