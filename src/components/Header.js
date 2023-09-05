import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/header.css";
import Spinner from "./Spinner";
import nysl_logo from "./../assets/images/nysl_logo.png";
import homeIcon from "../assets/images/home.png";
import homeIconActive from "../assets/images/home_active.png";
import aboutIcon from "../assets/images/about.png";
import aboutIconActive from "../assets/images/about_active.png";
import contactIcon from "../assets/images/contact.png";
import contactIconActive from "../assets/images/contact_active.png";
import rulesIcon from "../assets/images/rulesandpolicies.png";
import rulesIconActive from "../assets/images/rulesandpolicies_active.png";
import gameIcon from "../assets/images/gameinfo.png";
import gameIconActive from "../assets/images/gameinfo_active.png";
import menuIconOpen from "../assets/images/menuicon_open.png";
import menuIconClose from "../assets/images/menuicon_close.png";
import backImage from "../assets/images/design1_image1.jpg";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuIcon = isMenuOpen ? menuIconOpen : menuIconClose;
  const [isLoading, setIsLoading] = useState(false);

  const menu = [
    {
      name: "Home",
      icon: location.pathname === "/" ? homeIconActive : homeIcon,
      link: "/",
    },
    {
      name: "About",
      icon: location.pathname === "/about" ? aboutIconActive : aboutIcon,
      link: "/about",
    },
    {
      name: "Contact",
      icon: location.pathname === "/contact" ? contactIconActive : contactIcon,
      link: "/contact",
    },
    {
      name: "Rules",
      icon:
        location.pathname === "/rules-and-policies"
          ? rulesIconActive
          : rulesIcon,
      link: "/rules-and-policies",
    },
    {
      name: "Game Info",
      icon: location.pathname === "/games" ? gameIconActive : gameIcon,
      link: "/games",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    //This code is used to simulate the spinner that would be shown when waiting for the response to an API call
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <header>
      {isLoading && <Spinner />}

      <div className="header">
        <div className="menu__icon" onClick={toggleMenu}>
          <img className="menu__img" src={menuIcon} alt="Menu" />
          {isMenuOpen && (
            <nav>
              <ul className="list">
                {menu.map((menuItem, index) => (
                  <Link key={`header-${index}`} to={menuItem.link}>
                    <li
                      key={index}
                      className={`menu__link ${
                        menuItem.link === location.pathname ? "active" : ""
                      }`}
                      onClick={toggleMenu}
                    >
                      {menuItem.icon && (
                        <img src={menuItem.icon} alt={menuItem.name} />
                      )}
                      {menuItem.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <div className="NYSL_header">
          <img
            className="logo"
            src={nysl_logo}
            alt="northside youth soccer league logo"
          />
        </div>
      </div>
      <img className="background_img" src={backImage} alt={backImage} />
    </header>
  );
};

export default Header;
