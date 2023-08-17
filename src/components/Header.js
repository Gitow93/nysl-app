import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/header.css";
import Spinner from "./Spinner";
import homeIcon from "../assets/images/home.png";
import aboutIcon from "../assets/images/about.png";
import contactIcon from "../assets/images/contact.png";
import rulesIcon from "../assets/images/rulesandpolicies.png";
import gameIcon from "../assets/images/gameinfo.png";
import menuIcon from "../assets/images/menu_icon.png";
import backImage from "../assets/images/design1_image1.jpg";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const menu = [
    {
      name: "Home",
      icon: homeIcon,
      link: "/",
    },
    {
      name: "About",
      icon: aboutIcon,
      link: "/about",
    },
    {
      name: "Contact",
      icon: contactIcon,
      link: "/contact",
    },
    {
      name: "Rules and Policies",
      icon: rulesIcon,
      link: "/rules-and-policies",
    },
    {
      name: "Game Information",
      icon: gameIcon,
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
    <header >
    {isLoading && <Spinner />}

      <div className="header">
       <div className="menu__icon" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" style={{ width:"40px", height:"40px"}} />
      </div>
      
     
      {isMenuOpen && (
        <nav>
          <ul className="list">
            {menu.map((menuItem, index) => (
              <Link to={menuItem.link}>
                <li
                key={index}
                className={`menu__link ${
                  menuItem.link === location.pathname ? "active" : ""
                }`}
                onClick={toggleMenu}
              >
                
                  {menuItem.icon && (
                    <img
                      src={menuItem.icon}
                      alt={menuItem.name}
                      style={{ width: "20px", height: "20px" }}
                    />
                  )}
                  {menuItem.name}
                
              </li>
              </Link>
            ))}
          </ul>
        </nav>
      )}

      <h1 className="header__title">Northside Youth Soccer League</h1>
      </div>
      <img className="background_img" src={backImage} alt={backImage} />
    </header>
  );
};

export default Header;
