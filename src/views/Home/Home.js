import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
  
        <div className='contenedor-imagenes'>
  
          
          <Link className='link' to= '/food'><p className='home-img' id='comida'>Alimentos</p></Link>
          <Link  className='link' to='/accesorios'> <p className='home-img' id='accesorio'>Accesorios</p></Link>
          <img className='img-menu' id='alimentos' src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/Purina%C2%AE%20Familia%20de%20Productos.jpg" alt="alimentos"/>

        </div>

    </div>
  )
}

export default home
