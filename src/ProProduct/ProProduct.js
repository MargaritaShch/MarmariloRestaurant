import React from "react";
import './ProProduct.css';
import cutlet1 from './ImgProProduct/cutlet1.jpg'
import cutlet2 from "./ImgProProduct/cutlet2.jpg";
import cutlet3 from "./ImgProProduct/cutlet3.jpg";
import facebook from '../Footer/ImgFooter/facebook.png'
import instagram from "../Footer/ImgFooter/instagram.png";
import twitter from "../Footer/ImgFooter/twitter.png";
import { Link } from "react-router-dom";

function ProProduct(){

    return (
      <div className="pro-product">
        <div className='header-pro-product'>
          <p className="logo"><Link to='/'>#MARMARILO</Link></p>
          <ul className="header-menu-pro-product">
            <li>ABOUT COMPANY</li>
            <li>
              CONTACT
            </li>
          </ul>
        </div>

        <div className="background-title">
          <h1 className="title1">PRO</h1>
          <h1 className="title2">PRODUCT</h1>
          <p className="describe-product">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>

        <div className="production">
          <div className="block11">
            <div className="first-block">Lorem ipsum dolor sit amet</div>
            <div className="second-block">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="thirth-block">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="block22">
            <h3 className="kind-meat">
              WHAT KIND OF MEAT{" "}
              <span>
                <br />
                WE USE
              </span>
            </h3>
            <p className="describe-meat">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
        <div className="pro-cutlets">
          <h3 className="cutlets-title">
            PRO <span>CUTLETS</span>
          </h3>
          <p className="describe-cutlets">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="img-cutlets">
            <img src={cutlet1} alt="cutlet" />
            <img src={cutlet2} alt="cutlet" />
            <img src={cutlet3} alt="cutlet" />
          </div>

          <div className="questions">
            <h3 className="gen-wtite-us">IF YOU HAVE A QUESTIONS</h3>
            <p className="write-us1">
              You can write to us at the "Contacts" section of the e-mail
              address
            </p>
            <p className="write-us2">We will answer them as soon as possible</p>
          </div>
        </div>
        <div className="footer-pro-product">
        <div >
            <ul className="footer-menu-pro-product">
              <li>ABOUT COMPANY</li>
              <li>CONTACT</li>
            </ul>
          </div>
          
          <div className="media-pro-product">
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="instagram" className="icon2" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="facebook" className="icon2" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img src={twitter} alt="twitter" className="icon2" />
            </a>
          </div>
        </div>
      </div>
    );
}

export default ProProduct;