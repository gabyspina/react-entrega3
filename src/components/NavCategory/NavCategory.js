import React from 'react'
import './NavCategory.css'

import { Link } from 'react-router-dom'

const NavCategory = () => {
  return (
    <nav>
      <ul>
        <Link to='/category/perro'>Gatos</Link>
        <Link to='/category/gato'>Perros</Link>
      </ul>


    </nav>
  )
}

export default NavCategory


