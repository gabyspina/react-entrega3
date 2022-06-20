import React  from 'react';
import './App.css';
import HeaderOne from './components/HeaderOne/HeaderOne';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
    
    return (

    <div className="App">
         
      <div className='app-header'>
        <HeaderOne />
      </div>
            
      <div className='app-navbar'>
        <Navbar />
      </div>
      
      <ItemListContainer/>

    </div>
  );

}

export default App;
