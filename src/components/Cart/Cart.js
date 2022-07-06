import React from 'react'
import empty from '../assets/empty.png'
import './Cart.css'

const Cart = () => {


  return (

    <div className='cart'>
      
      <h1 id='name-cart' >Carrito Vacio</h1>
      
      <img src={empty} className='empty' alt='empty' />

    </div>
  )
}

export default Cart
