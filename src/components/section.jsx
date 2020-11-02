import React, { useState } from "react";
import SVG from "./svg";
import Button from "./button";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import styled from "styled-components";

function Section() {
  const [change, setChange] = useState("");
  const grid = [
    {
      para1: "daily transaction volume",
      num: "2,342",
      svg1: <SVG />,
    },
    {
      para2: "daily transaction value",
      numb: "#4,000,000",
      svg2: <SVG />,
    },
    {
      para3: "daily transaction volume",
      number: "452,000",
      svg3: <SVG />,
    },
  ];

  return (
    <div className='section'>
      <div className='grider'>
        <div className='card'>
          {grid.map((data, index) => (
            <div key={index} className='grid'>
              <div className='value'>
                <p className='paragraph'>{data.para1}</p>
                <p> {data.num}</p>
              </div>
              {data.svg1}
            </div>
          ))}
        </div>

        <div className='card'>
          {grid.map((data, index) => (
            <div key={index} className='grid'>
              <div className='value'>
                <p className='paragraph'>{data.para2}</p>
                <p> {data.numb}</p>
              </div>
              {data.svg2}
            </div>
          ))}
        </div>

        <div className='card'>
          {grid.map((data, index) => (
            <div key={index} className='grid'>
              <div className='value'>
                <p className='paragraph'>{data.para3}</p>
                <p> {data.number}</p>
              </div>
              {data.svg3}
            </div>
          ))}
        </div>
        <div className='card'>
          {grid.map((data, index) => (
            <div key={index} className='grid'>
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
        <div className='chart'></div>
        <div className='payment'>
          <div className='border'>
            <h3>orders</h3>
            <p>
              pending orders: <span style={{ color: "yellow" }}>20</span>
            </p>
            <p>
              Reconcilled orders: <span style={{ color: "green" }}>80</span>
            </p>
            <p>
              total orders: <span style={{ color: "blue" }}>100</span>
            </p>
          </div>

          <div className='border2'>
            <h3>payments</h3>
            <p>
              Unreconcilled payments:{" "}
              <span style={{ color: "yellow" }}>20</span>
            </p>
            <p>
              Reconcilled payments: <span style={{ color: "green" }}>80</span>
            </p>
            <p>
              total payments: <span style={{ color: "blue" }}>100</span>
            </p>
          </div>
        </div>
      </div>

      <div className='articles'>
        <h1>Payments</h1>
        <div className='pay'>
          <p>
            showing{" "}
            <span>
              20
              <IoIosArrowDown />
            </span>
            out of 500 payments
          </p>
          <form className='search'>
            <IoIosSearch className='font' />
            <input type='text' placeholder='Search' className='input' />
          </form>
          <div className='form'>
            <form>
              <label>
                Show
                <select
                  value={change}
                  onChange={(e) => setChange(e.target.change)}
                >
                  <option value='All'>All</option>
                  <option value='Reconcilled'>Reconcilled</option>
                  <option value='Unreconcilled'>Unreconcilled</option>
                  <option value='Settled'>Settled</option>
                  <option value='Unsettled'>Unsettled</option>
                </select>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className='table' style={{ marginLeft: "30px", width: "100%" }}>
        <table style={{ width: "100%" }}>
          <TableRow style={{ background: "#EAEEF0" }}>
            <TH width='40%'>Item Type</TH>
            <TH width='18%'>Price</TH>
            <TH width='17%'>Transaction No</TH>
            <TH width='7%'>Time</TH>
            <TH width='19%'></TH>
            <TH width='4%'></TH>
          </TableRow>

          {table.map((item, index) => (
            <TableRow key={index}>
              <TD width='40%'>
                <span>
                  <TextSpan>{item.text}</TextSpan>
                  {item.mac}
                </span>
              </TD>
              <TD width='18%'>{item.price}</TD>
              <TD width='17%'>{item.transaction}</TD>
              <TD width='7%'>{item.time}</TD>
              <TD width='19%'>{item.button1}</TD>
              <TD width='4%'>{item.icon}</TD>
            </TableRow>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Section;

const TextSpan = styled.span`
  background: #7f8fa4;
  padding: 9px 10px;
  border-radius: 50%;
  color: white;
  line-height: 1;
  font-size: 1rem;
  margin-right: 1rem;
`;

const TableRow = styled.tr`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #cccfd4;
  align-items: center;
`;

const TH = styled.th`
  width: ${({ width }) => width && width};
  text-align: left;
  padding-right: 30px;
`;

const TD = styled.td`
  padding-right: 30px;
  width: ${({ width }) => width && width};
`;

const table = [
  {
    text: "vw",
    mac: "Apple Mac Book 13” 250 SSD 4GB",
    price: "$73420",
    transaction: 3992567890,
    time: "12:30",
    button1: <Button padding='9px 29px'>Reconcilled</Button>,
    icon: <IoIosArrowDown />,
  },
  {
    text: "vw",
    mac: "Apple Mac Book 15” 512 SSD 8GB",
    price: "$354430",
    transaction: 3432890,
    time: "12:30",
    button1: <Button padding='9px 40px' color='#EBC315;'>Pending</Button>,
    icon: <IoIosArrowDown />,
  },
  {
    text: "vw",
    mac: "Apple Mac Book 16” ITB SSD 12GB",
    price: "$90430",
    transaction: 249567890,
    time: "12:30",
    button1: <Button color=' #7F8FA4' padding='9px 18.5px'>Un-reconcilled</Button>,
    icon: <IoIosArrowDown />,
  },
  {
    text: "vw",
    mac: "Apple Mac Book 13” 250 SSD 4GB",
    price: "$73420",
    transaction: 3992567890,
    time: "12:30",
    button1: <Button padding='9px 29px'>Reconcilled</Button>,
    icon: <IoIosArrowDown />,
  },
  {
    text: "vw",
    mac: "Apple Mac Book 15” 512 SSD 8GB",
    price: "$354430",
    transaction: 3432890,
    time: "12:30",
    button1: <Button padding='9px 40px' color='#EBC315;'>Pending</Button>,
    icon: <IoIosArrowDown />,
  },
  {
    text: "vw",
    mac: "Apple Mac Book 16” ITB SSD 12GB",
    price: "$90430",
    transaction: 249567890,
    time: "12:30",
    button1: <Button color=' #7F8FA4' padding='9px 18.5px'>Un-reconcilled</Button>,
    icon: <IoIosArrowDown />,
  },
  {
    text: "vw",
    mac: "Apple Mac Book 13” 250 SSD 4GB",
    price: "$73420",
    transaction: 3992567890,
    time: "12:30",
    button1: <Button padding='9px 29px'>Reconcilled</Button>,
    icon: <IoIosArrowDown />,
  },
  {
    text: "vw",
    mac: "Apple Mac Book 15” 512 SSD 8GB",
    price: "$354430",
    transaction: 3432890,
    time: "12:30",
    button1: <Button padding='9px 40px' color='#EBC315;'>Pending</Button>,
    icon: <IoIosArrowDown />,
  },
  {
    text: "vw",
    mac: "Apple Mac Book 16” ITB SSD 12GB",
    price: "$90430",
    transaction: 249567890,
    time: "12:30",
    button1: <Button color=' #7F8FA4' padding='9px 18.5px'>Un-reconcilled</Button>,
    icon: <IoIosArrowDown />,
  },
  
];
