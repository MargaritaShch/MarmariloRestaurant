import React from "react";
import './Footer.css'
import facebook from './ImgFooter/facebook.png'
import instagram from "./ImgFooter/instagram.png";
import twitter from "./ImgFooter/twitter.png";

function Footer(){
    return (
      <div>
        <div className="footer">
          <div>
            <ul className="header-menu2">
              <li>ABOUT COMPANY</li>
              <li>CONTACT</li>
            </ul>
          </div>
          
          <div className="media">
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="instagram" className="icon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="facebook" className="icon" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img src={twitter} alt="twitter" className="icon" />
            </a>
          </div>
        </div>
      </div>
    );
}

export default Footer