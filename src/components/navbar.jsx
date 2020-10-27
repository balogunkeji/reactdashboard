import React from 'react';
import {IoIosSearch,IoMdNotificationsOutline} from "react-icons/io";

function Navbar() {


    return (
      <div className="Navbar">
          <header className='showcase'>
        <nav className ='container'>
            <h1>TransMonitor</h1>
              <form>
                <IoIosSearch className='font'/><input type="text"  placeholder="Search" className='container__input' />
              </form>
              <ul className='list'>
            <li className="list__listItems">
                <h3>support</h3>
            </li>
            <li className="list__listItems">
                <h3>FAQ</h3>
            </li>
            <li className="list__listItems">
                <IoMdNotificationsOutline className='font'/>
            </li>
            <li className="list__listItems">
            <div>
                <p>Hello</p>
                <p>OluwaLeke Ojo</p>
              </div>
                <img src="/images/birthday5.jpg" alt="" />
              
            </li>
          </ul>
        </nav>
      </header>
      </div>
    );
  }
export default Navbar;