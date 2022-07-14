import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea } from '@mui/material';
import ItemCount from '../../components/ItemCount/ItemCount';
import { useState, useContext } from 'react';
import './ItemDetail.css';
import {Link} from 'react-router-dom';
// context

import { CartContext } from '../../components/CartContext/CartContext';

const ItemDetail = ({productos}) => {

  const [add, setAdd] = useState(false);

  const {addItem} = useContext(CartContext);
  
  return (
    <div className='item'>
    <Card className='card' sx={{ width: 1200, height: 600}}>
      <CardActionArea className='card-img'>
        <div >
        <CardMedia
          component="img"
          height="300"
          image={productos.img}
          alt={productos.name}
        />
        </div>
        <div className='cards-components'>
        <CardContent>
          <div>
          <Typography variant="h5" component="div">
            {productos.name}
          </Typography>
          </div>
          <div style={
            {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }
          }>
            {/* <Typography className='detail' variant="h" component="div">
            {productos.detail}
          </Typography> */}
          
          <Typography variant="h6" color="text.primary">
            {`$ ${productos.price}`}
          </Typography>
          </div>
        </CardContent>
        </div>

          <div className='buttons'>
              
              {!add ? 
              <ItemCount stock={5} initial={1} onAdd={addItem}/>    
              
              :
              <Link className='btn green' to='/Cart'><Button variant="contained"> Finalizar Compra </Button></Link>
            }
              <Link className='btn' to={'/food'} ><Button variant="contained"> Seguir Comprando </Button></Link>

        </div>

      </CardActionArea>

      </Card>

    </div>
  );
}

export default ItemDetail;  