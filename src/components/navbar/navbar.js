import "./navbar.css";
import React from 'react';
import CartWidget from "../cartWidget/CartWidget";

// Routes

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Alimentos</li>
                <li>Nuestros Clientes</li>
                <li>Contacto</li>
                <CartWidget />
            </ul>
        </nav>
    )
}
export default Navbar;