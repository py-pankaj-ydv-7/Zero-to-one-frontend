// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Navbar2 from './components/Navbar2';
function App() {
  const [value, setValue]= useState(0)
  return (
    <div className="App">
    
      <Navbar2/>
    <Footer/>
      <div className='value'>{value}</div> 
      <button onClick={()=>{setValue(value+1)}}>click Me</button>     
    </div>
    
  );
}

export default App;
