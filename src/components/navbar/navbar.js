import "./navbar.css";
import React from 'react';
import Cart from "../cart/cart-icon";

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Alimentos</li>
                <li>Accesorios</li>
                <li>Contacto</li>
                <Cart />
            </ul>
        </nav>
    )
}
export default Navbar;