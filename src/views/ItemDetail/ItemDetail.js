import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea } from '@mui/material';
import ItemCount from '../../components/ItemCount/ItemCount';
import { useState } from 'react';
import './ItemDetail.css';
import {Link} from 'react-router-dom';


const ItemDetail = ({data}) => {

  const [cant,setCant] = useState(0)

  const onAdd = (count) => {
  
  console.log(`Se agregaron al carrito:${cant} elementos`)
  
  setCant(count)
  
  }

  return (
    <div className='item'>
    <Card className='card' sx={{ width: 1200, height: 600}}>
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
          <Typography variant="h5" component="div">
            {data.nombre}
          </Typography>
          </div>
          <div style={
            {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }
          }>
          <Typography variant="h6" color="text.primary">
            {`$ ${data.precio}`}
          </Typography>
          </div>
        </CardContent>
        </div>

          <div className='buttons'>
              
              { cant===0 ? <ItemCount stock={5} initial={1} onAdd={onAdd} />  

			      	: <Link className='btn' to={'/cart'}><Button variant="contained" >Finalizar compra</Button></Link> } 

              <Link className='btn' to={'/food'}><Button variant='contained'>Seguir comprando</Button></Link>
        
        </div>


      </CardActionArea>


      </Card>




    </div>
  );
}

export default ItemDetail;