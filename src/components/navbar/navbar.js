import "./navbar.css";
import React from 'react';
import CartWidget from "../cartWidget/CartWidget";

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Alimentos</li>
                <li>Accesorios</li>
                <li>Contacto</li>
                <CartWidget />
            </ul>
        </nav>
    )
}
export default Navbar;