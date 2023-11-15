import React from "react";
import './Contact.css';
import facebook from '../Footer/ImgFooter/facebook.png'
// import instagram from "../Footer/ImgFooter/instagram.png";
import twitter from "../Footer/ImgFooter/twitter.png";
import { Link } from "react-router-dom";

function Contact(){
    return (
      <div>
      <div className='header-contact'>
        <p className="logo"><Link to='/'>#MARMARILO</Link></p>
          <ul className="header-menu-contact">
          <li>ABOUT COMPANY</li>
          <li>
        PRO PRODUCT
          </li>
     </ul>
      </div>
        <h1 className="section1">#CONTACTS:</h1>
        <div className="contacts">
          <div>
            <h3 className="titile-serv">OUR POLICIES:</h3>
            <ul className="our-service">
              <li>
                <a href="https://unihost.com/blog/public-offer/">
                  PUBLIC OFFER
                </a>
              </li>

              <li>
                <a href="https://www.shopify.com/tools/policy-generator?term=&adid=638049403601&campaignid=16665022943&utm_medium=cpc&utm_source=google&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzlB_pjQH3tne42GUnfaQ-Y_9Z1PIixOKJu6M-QanzGEtnRUgPO8GykaArf6EALw_wcB&cmadid=516586848;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324286430;cmcreativeid=163722649;cmsiteid=5500011">
                  PRIVACY POLICY
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="titile-serv">PRESS SERVICE:</h3>
            <a href="PR@MARMARILOBURGER.COM">
              <p className="email">PR@MARMARILOBURGER.COM</p>
            </a>
          </div>
          <div>
            <h3 className="titile-serv">MARKETING:</h3>
            <a href="MARKETING@MARMARILOBURGER.COM">
              <p className="email">MARKETING@MARMARILOBURGER.COM</p>
            </a>
          </div>
          <div>
            <h3 className="titile-serv">FEEDBACK:</h3>
            <a href="SERVICE@MARMARILOBURGER.COM">
              <p className="email">SERVICE@MARMARILOBURGER.COM</p>
            </a>
          </div>
          <div>
            <h3 className="titile-serv1">SUGGESTIONS, IDEAS, COOPERATION:</h3>
            <a href="WELCOME@MARMARILOBURGER.COM">
              <p className="email">WELCOME@MARMARILOBURGER.COM</p>
            </a>
          </div>
          <div>
            <h3 className="titile-serv2">WORKING AT MARMARILO BURGERS:</h3>
            <a href="HR@MARMARILOBURGER.COM">
              <p className="email">HR@MARMARILOBURGER.COM</p>
            </a>
          </div>
        </div>
        
        <div className="footer-contact">
        <div>
            <ul className="footer-menu-contact">
              <li>ABOUT COMPANY</li>
              <li>PRO PRODUCT</li>
            </ul>
          </div>
          
          <div className="media-contact">
            <a href="https://www.instagram.com/" target="_blank">
              {/* <img src={instagram} alt="instagram" className="icon2" /> */}
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="facebook" className="icon3" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img src={twitter} alt="twitter" className="icon3" />
            </a>
          </div>
        </div>
      </div>
    );
}

export default Contact;