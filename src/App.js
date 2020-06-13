import React from 'react';
import './App.css';
import Navbars from './pages/Navbar';
import Jumbotron from './pages/Jumbotron';
import Body from './pages/Body';
function App() {
  return (
    <div className="App">
      <Navbars/> 
      <Jumbotron/>
      <Body/>
    </div>
  );
}

export default App;
