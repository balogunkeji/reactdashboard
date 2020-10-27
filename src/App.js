import React from 'react'
import Sidenavbar from './components/sidenavbar'
import Navbar from './components/navbar';
// import {IoMdNotificationsOutline, IoIosSearch } from "react-icons/io";
import './App.css';
import './sass/style.scss'

function App() {
  return (
    <div className="App">

       <Navbar />
    <div className='main'>
        <div className='sidebar'>
        < Sidenavbar />
        </div>

        <div>

</div>
       </div>
    </div>
  );
}

export default App;
