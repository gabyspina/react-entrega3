import React, {Component, useEffect, useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/navbar';
import CardComponents from './components/cardComponents/CardComponents';

class App extends Component {

  render() {
    
    return (

    <div className="App">
         
      <div className='app-header'>
        <Header />
      </div>
            
      <div className='app-navbar'>
        <Navbar />
      </div>
      
      <div className='app-content'>

        <CardComponents className='card-components'
          nombre="Purina One" 
          img ='https://hiperlibertad.vteximg.com.br/arquivos/ids/173162-1000-1000/ALIMENTO-PARA-PERROS-PURINA-ONE-ADULTO-RAZA-GRANDE-POLLO-Y-CORDERO-12-KG-1-13836.jpg?v=637475471586400000'
          precio = "$7.719"
          />

        <CardComponents className='card-components'
          nombre="Purina Pro Plan Active Mind" 
          img ='http://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/purina-pro-plan-flagship-perros-active-mind-razas-pequenas1-1b2a2f15016179bf7c16170473882382-640-0.png'
          precio = "$9.787"
          />

        <CardComponents className='card-components'
          nombre="Pedigree " 
          img ='https://jumboargentina.vtexassets.com/arquivos/ids/586421/Alimento-Para-Perros-Pedigree-Adulto-3-Kg-1-38309.jpg?v=637265784221000000'
          precio = "$4.850"
          />
        
        <CardComponents className='card-components'
          nombre="Purina Dogui " 
          img ='https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/2021-09/dogui-cachorros-con-carne-pollo-cereales-vegetalles-y-leche.png?itok=XClV0a-9'
          precio = "$4.508"
          />
        
        <CardComponents className='card-components'
          nombre="Agility Adultos " 
          img ='https://files.tiendalite.com/pet-shop-el-arca/assets/images/products/91-695.jpg?f=contain&p=center&w=600&h=600'
          precio = "$6.600"
          />

        <CardComponents className='card-components'
          nombre="Natural Choice " 
          img ='https://delkoalimentos.com.ar/contenido/lineas/1.png'
          precio = "$6.800"
          />

        <CardComponents className='card-components'
          nombre=" Dog Selection - Criadores " 
          img ='https://statics.dinoonline.com.ar/imagenes/large_460x460/2520565_l.jpg'
          precio = "$4.850"
          />

      </div>


    </div>
  );
}
}

export default App;
