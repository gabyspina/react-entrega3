import "./navbar.css";
import React from 'react';
import CartWidget from "../cartWidget/CartWidget";
import NavCategory from "../NavCategory/NavCategory";

import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
    <div className="navbar">
        <nav>
            <ul>
                <Link className="li" to='/'>Inicio</Link>
                <Link className="li" to='/food'>Alimentos</Link>
                <Link className="li" to='/accesorios'>Accesorios</Link>
                <Link className="li" to='/contacto'>Contacto</Link>
                <CartWidget />
            </ul>
            
        </nav>
        <div>
            <NavCategory />
        </div>
    </div>
    )
}
export default Navbar;