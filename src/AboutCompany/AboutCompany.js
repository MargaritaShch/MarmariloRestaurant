import React from "react";
import './AboutCompany.css';
import Footer from "../Footer/Footer";
import mass1 from './ImgAboutCompany/mass1.jpg'
import mass2 from "./ImgAboutCompany/mass2.jpg";
import mass3 from "./ImgAboutCompany/mass3.jpg";
import { Link } from "react-router-dom";



function AboutCompany(){
    return (
      <div>
        
        <div>
        <div className='header-contact'>
        <p className="logo"><Link to='/'>#MARMARILO</Link></p>
          <ul className="header-menu-contact">
          <li>PRO PRODUCT</li>
          <li>
        CONTACT
          </li>
     </ul>
      </div>
        </div>

        <div className="about-company">
          <h1 className="about-company-title">#ABOUT COMPANY</h1>
          <p className="about-company-describe">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="our-mission">
          <h1 className="our-mission-title">#OUR MISSION</h1>
          <p className="our-mission-describe">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="mass-media">
          <h1 className="mass-media-title">#MASS MEDIA</h1>
          <p className="mass-media-describe">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="photo-mass">
            <div className="block">
              <img src={mass1} alt="mass1" className="mass" />
              <p className="desribe-mass">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="block">
              <img src={mass3} alt="mass1" className="mass" />
              <p className="desribe-mass">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.adipiscing elit.
              </p>
            </div>

            <div className="block">
              <img src={mass2} alt="mass1" className="mass" />
              <p className="desribe-mass">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
}

export default AboutCompany;