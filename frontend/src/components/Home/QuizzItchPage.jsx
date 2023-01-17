import React, { Fragment } from "react";
import "./QuizzItchPage.css";
import MetaData from "../layout/MetaData";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Qc from "../../assets/QCupdated.png";
// import ellipseDesing from "../../assets/ellipseDesign.png";

import Quizzitch from "./Quizzitch";
import SwiperSlider from "./SwiperSlider";
import AOS from "aos";
import "aos/dist/aos.css";

const QuizzItchPage = () => {

  AOS.init({
    offset: 240,
    duration: 1000,
  });

  var navbar = document.getElementById("navbar");
  var menu = document.getElementById("menu");

  window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  return (
    <Fragment>
      <MetaData title="Quizzitch Cup" />
      <div className="quizzitchcupwholecontent">
      <div className="heroOfQuizzitchCup">
        <nav id="navbar">
          <img src={logo} class="logo" alt="Aniket" />
          <input type="checkbox" id="click" />
          <label for="click" class="menu-btn">
            <i class="fas fa-bars"></i>
          </label>
          <ul id="menu">
            <li className="home">
              <Link to="/">Home</Link>
            </li>
            <li className="about">
              <a href="/">About</a>
            </li>
            <li className="quizzitch active">
              <a href="/">Quizzitch Cup</a>
            </li>
            <li className="office">
              <a href="/">Office Bearers</a>
            </li>
            <li className="strength">
              <a href="/">Strength</a>
            </li>
            <li className="contact">
              <a href="/account">Profile</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Here comes the main part */}

      <div className="quizzitchintro">
        <div className="quizzitchCupContent">
          <div className="quizzitchTitle" data-aos="fade-left">
            <h1 className="quizzitchtitlemaintag">
              Quizzitch <span>Cup</span>
            </h1>
          </div>
          <div className="quizzitchCupImage">
            <img src={Qc} alt="aniket" />
          </div>
        </div>
      </div>

    {/* Here it ends */}

      <Quizzitch />
      <div className="spaceProviderforquiz"></div>
      <SwiperSlider title="Quizzitch Cup Events" />
      <div className="spaceP"></div>

      <div class="footer">
            <div class="footer-container">
              <div class="footer-row">
                <div class="footer-col">
                  <div class="social-icon">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-pinterest"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </div>
                  <br />
                </div>
                <div class="copyright">
                  <h2>All rights reserved. Copyright © QuizInc 2022</h2>
                </div>
              </div>
            </div>
          </div>
      </div>

    </Fragment>
  );
};

export default QuizzItchPage;
