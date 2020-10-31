
import React, {useState} from 'react';
import SVG from './svg';
import { IoIosArrowDown,IoIosSearch } from "react-icons/io";

function Section (){
    const [change,setChange] = useState('');
    const grid = [
        {
            para1: 'daily transaction volume',
            num: '2,342',
            svg1: <SVG/>
        },
        {
            para2: 'daily transaction value',
            numb: '#4,000,000',
            svg2: <SVG/>
        },
        {
            para3: 'daily transaction volume',
            number: '452,000',
            svg3: <SVG/>
        },
    ]

    return(
        <div className ='section'>
                <div className ='grider'>
                    <div className='card'>
                    {grid.map((data) =>(
                        <div className='grid'>
                            <div className='value'>
                                <p className='paragraph'>{data.para1}</p>
                                <p> {data.num}</p>
                            </div>
                                {data.svg1}
                        </div>
                ))}
                    </div>

                    <div className='card'>
                    {grid.map((data) =>(
                        <div className='grid'>
                            <div className='value'>
                                <p className='paragraph'>{data.para2}</p>
                                <p> {data.numb}</p>
                            </div>
                                {data.svg2}
                        </div>
                ))}
                    </div>

                    <div className='card'>
                    {grid.map((data) =>(
                        <div className='grid'>
                            <div className='value'>
                                <p className='paragraph'>{data.para3}</p>
                                <p> {data.number}</p>
                            </div>
                                {data.svg3}
                        </div>
                ))}
                    </div>
                <div className='card'>
                {grid.map((data) =>(
                        <div className='grid'>
                            <div className='value'>
                                <p className='paragraph'>{data.para2}</p>
                                <p> {data.numb}</p>
                            </div>
                                {data.svg2}
                        </div>
                ))}
             </div>
             </div>


          <div className='article'>
              <div className ="chart">

              </div>
              <div className='payment'>
                    <div className='border'>
                        <h3>orders</h3>
                        <p>pending orders: <span style={{color: 'yellow'}}>20</span></p>
                        <p>Reconcilled orders: <span style={{color: 'green'}}>80</span></p>
                        <p>total orders: <span style={{color: 'blue'}}>100</span></p>
                    </div>

                    <div className='border2'>
                        <h3>payments</h3>
                        <p>Unreconcilled payments: <span style={{color: 'yellow'}}>20</span></p>
                        <p>Reconcilled payments: <span style={{color: 'green'}}>80</span></p>
                        <p>total payments: <span style={{color: 'blue'}}>100</span></p>
                    </div>
              </div>
          </div>

          <div className='articles'>
              <h1>Payments</h1>
              <div className='pay'>
                <p>showing <span>20<IoIosArrowDown/></span>out of 500 payments</p>
                <form className='search'>
                <IoIosSearch className='font'/><input type="text"  placeholder="Search" className='input' />
              </form>
              <div className='form'>
                <form>
                <label>
                Show
                <select value={change} onChange={(e => setChange(e.target.change))}>
                    <option value="All">All</option>
                    <option value="Reconcilled">Reconcilled</option>
                    <option value="Unreconcilled">Unreconcilled</option>
                    <option value="Settled">Settled</option>
                    <option value="Unsettled">Unsettled</option>
                </select>
                </label>
             </form>
            </div>
        </div>
     </div>
     </div>
    )
}

export default Section;