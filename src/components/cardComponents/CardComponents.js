import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './CardComponents.css';


const CardComponents  = (props) => {

      const [cantidad, setCantidad] = React.useState(0);

    const counterUp = () => {
      if (cantidad <= 4) {
        setCantidad(cantidad + 1);
      }
    return cantidad;
    }

    React.useEffect(() => {
      console.log(cantidad);
    }, [cantidad]);

    const counterDown = () => {
      if (cantidad > 0) {
        setCantidad(cantidad - 1);
      }
      else {
        setCantidad(0);
      }
      return "0"
      }


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.precio}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className='button-card'>
            <Button size="large" color="primary" onClick={counterDown}> - </Button>
              <p>{cantidad}</p>
            <Button size="large" color="primary" onClick={counterUp}> + </Button>
            <Button className="button-pedido"> Agregar al carrito </Button>
      </CardActions>


    </Card>
  );
}

export default CardComponents;