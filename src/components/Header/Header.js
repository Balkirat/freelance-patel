import React from "react";
import hamburgerButton from "../../assets/images/hamburger.svg";
import { Link } from "react-scroll";
import "./Header.scss";

const Header = (props) => {
  return (
    <>
      <nav className={`nav ${props.showBackgroundColor && "nav--active"}`}>
        <div
          className={`nav__container ${
            props.showBackgroundColor && "nav__container--active"
          }`}
        >
          <ul className="nav__list">
            <div>
              <li className="nav__list-item nav__list-item--logo">
                <Link
                  className={`nav__link ${
                    props.showBackgroundColor && "nav__link--active"
                  }`}
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Patel Optical
                </Link>
              </li>
            </div>
            <div className="nav__list-item--container">
              <li className="nav__list-item">
                <Link
                  className={`nav__link ${
                    props.showBackgroundColor && "nav__link--active"
                  }`}
                  to="Services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Servces
                </Link>
              </li>
              <li className="nav__list-item">
                <Link
                  className={`nav__link ${
                    props.showBackgroundColor && "nav__link--active"
                  }`}
                  to="About Us"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  About Us
                </Link>
              </li>
              <li className="nav__list-item">
                <Link
                  className={`nav__link ${
                    props.showBackgroundColor && "nav__link--active"
                  }`}
                  to="Contact Us"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact Us
                </Link>
              </li>

              <li
                className="nav__list-item nav__list-item--burger"
                onClick={props.toggleNav}
              >
                <img src={hamburgerButton} alt="hamburger" />
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
