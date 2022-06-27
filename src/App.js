import React  from 'react';
import './App.css';
import HeaderOne from './components/HeaderOne/HeaderOne';
import Navbar from './components/navbar/navbar';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// views 

import Food from './views/Food/Food';
import Home from './views/Home/Home';
import Error from './views/Error/Error';
import Accesorios from './views/Accesorios/Accesorios';
import Contacto from './views/Contacto/Contacto';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';


const App = () => {
    
    return (

      <Router>
        <div className="App">
        
          <HeaderOne className='app-header'/>

          <Navbar className='app-navbar'/>

              <Routes>

                  <Route path='/' element={<Home />} />
                  <Route path='/food' element={<Food />} />
                  <Route path='/accesorios' element={<Accesorios />} />
                  <Route path='/contacto' element={<Contacto />} />
                  <Route path='/detail/:id' element={<ItemDetailContainer />} />
                  <Route path='*' element={<Error />} />

              </Routes>
   
        </div>
      </Router>

   
  );

}

export default App;
