import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./header.css"


const Header = () => {
  return(
    <div className='header'>
      <div>
      <img src={logo} alt=""/>
      </div>
      <nav>
        <ul>
        <li><Link to="/comics"><span>COMICS</span></Link></li>
        <li><Link to="/characters"><span>PERSONNAGES</span></Link></li>
        <li><Link><span>FAVORIS</span></Link></li>
      </ul>
      </nav>


    </div>
  )
}

export default Header;