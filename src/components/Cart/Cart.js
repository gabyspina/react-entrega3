import {useContext} from 'react'
import empty from '../assets/empty.png'
import './Cart.css'
import { CartContext } from '../Context/CartContext'


const Cart = () => {

  const { cart, addToCart } = useContext(CartContext);

  console.log('cart', cart);

  return (
    <div className='cart'>

         { cart.map ((item) => {
          <div key={cart.id}>
            <h1>{cart.nombre}</h1>
          <div/>
        }    
      <img src={empty} className='empty' alt='empty' />


    </div>
  )
}

export default Cart
