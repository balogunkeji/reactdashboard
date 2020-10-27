import React from 'react';
import {IoIosSpeedometer,IoMdClipboard, IoMdRadioButtonOn, IoMdPaper} from "react-icons/io";
import { FiUser} from "react-icons/fi";
function Sidenavbar() {

  const font = [
    {
      font: <IoIosSpeedometer/>,
      para: "Overview"
    }
  ]   

  const preview = [
    {
      font: <IoMdClipboard/>,
      para: "all payments"
    },
    {
      font: <IoMdClipboard/>,
      para: "Reconcilled payments"
    },
    {
      font: <IoMdClipboard/>,
      para: "un-reconciled payments"
    },
    {
      font: <IoMdRadioButtonOn/>,
      para: "Manual settlement"
    }
  ]

  const order = [
    {
      font: <IoMdPaper />,
      para: 'all orders'
    },
    {
      font: <IoMdPaper />,
      para: 'pending orders'
    },
    {
      font: <IoMdPaper />,
      para: 'reconcilled orders'
    },
  ]

  

    return (
      <div className="sidenavbar">
        <div className='sidebar'>
          <button>Generate Invoice</button>
        <div className ='sidebars'>
        <div className = 'bars'>
            <h6>main</h6>
            {font.map((data) =>(
                <div className = 'bars--1 bars--1--para'>
                  {data.font}
                  <p>{data.para}</p>
                </div>
          ))}
          </div>
          <div className = 'bars'>
              <h6>payments</h6>
              {preview.map((data) =>(
                <div className = 'bars--1'>
                  {data.font}
                  <p>{data.para}</p>
                </div>
              ))}
            </div>
          <div className = 'bars'>
            <h6>orders</h6>
            {order.map((data) =>(
                <div className='bars--1'>
                  {data.font}
                  <p>{data.para}</p>
                </div>
              ))}
          </div>
          <div className='bars'>
          <div className = 'bars--1'>
                <FiUser />
                <p>merchant profile</p>
              </div>
          </div>
              
        </div>
    
        </div>
      </div>
    );
  }
export default Sidenavbar;