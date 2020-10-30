import React from 'react'
import Sidenavbar from './components/sidenavbar'
import Navbar from './components/navbar';
import Section from './components/section';
import './App.css';
import './sass/style.scss'

function App() {
  return (
    <div className="App">

       <Navbar />
    <div className='main'>
        < Sidenavbar/>
        <Section />
        <div>

</div>
       </div>
    </div>
  );
}

export default App;
