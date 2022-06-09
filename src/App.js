import React, {Component} from 'react';
//import './App.css';
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";


class App extends Component {
  render() {
    
    return (

    <div className="App">
      <div className='app-header'>
        <div><Header /></div>
      </div>
      
      <div className='app-navbar'>
        <Navbar />
      </div>
      
    </div>
  );
}
}

export default App;
