
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import './CartWidget.css';


const CartWidget = () => {
    const [Count, ] = useState(0);

        return (
            <div className='cart-icon'>
        <h3> <BsCart4 /></h3>
        <p>{Count}</p>
        </div>
        )
    }

export default CartWidget;