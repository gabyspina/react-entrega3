import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import './CartWidget.css';
import {Link} from 'react-router-dom'


const CartWidget = () => {
    const {Count}  = useState(0);

        return (

        <div className='cart-icon'>
            <Link className="link-icon" to='/cart'>
                <BsCart4 />
                <p>{Count}</p>
            </Link>
        </div>
        )
    }

export default CartWidget;