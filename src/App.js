import React  from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
    
    return (

    <div className="App">
         
      <div className='app-header'>
        <Header />
      </div>
            
      <div className='app-navbar'>
        <Navbar />
      </div>
      
  <ItemListContainer />

    </div>
  );

}

export default App;
