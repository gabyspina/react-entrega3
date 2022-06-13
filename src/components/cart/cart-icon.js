import React from 'react';
import { BsCart4 } from "react-icons/bs";
import './cart-icon.css';

class Cart extends React.Component {
    
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div className='cart-icon'>
        <h3> <BsCart4 /></h3>
        <p>{this.state.count}</p>
        </div>
        )
    }

}

export default Cart;