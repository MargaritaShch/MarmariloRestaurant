import React,{useState} from "react";
import './Header.css'
import bag from './ImgHeader/bag.png'
import { Link } from "react-router-dom";


function Header({count}) {
   
  return (
    <div className="header">
      <p className="logo">
       <Link to='/'>#MARMARILO</Link>
        </p>
      <ul className="header-menu">
        <li>
          <Link to='AboutCompany'>ABOUT COMPANY</Link>
          </li>

        <li> 
         <Link to ='ProProduct'> PRO PRODUCT </Link>
        </li>

        <li>
          <Link to='Contact'>CONTACT</Link>
        </li>

        <li>
          <img src={bag} alt="bag" className="bag" />
          <span className="count">{count}</span>
        </li>
      </ul>
    </div>
  );
}

export default Header;