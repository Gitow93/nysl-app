import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/header.css";
import homeIcon from "../assets/images/home.png";
import aboutIcon from "../assets/images/about.png";
import contactIcon from "../assets/images/contact.png";
import rulesIcon from "../assets/images/rulesandpolicies.png";
import gameIcon from "../assets/images/gameinfo.png";

const Header = () => {
  const location = useLocation();
  const menu = [
    {
      name: "Home",
      icon: homeIcon,
      link: "/",
      isActive: false,
    },
    {
      name: "About",
      icon: aboutIcon,
      link: "/about",
      isActive: false,
    },
    {
      name: "Contact",
      icon: contactIcon,
      link: "/contact",
      isActive: false,
    },
    {
      name: "Rules and Policies",
      icon: rulesIcon,
      link: "/rules-and-policies",
      isActive: false,
    },
    {
      name: "Game Information",
      icon: gameIcon,
      link: "/games",
      isActive: false,
    },
  ];

  menu.forEach((menuItem) =>
    menuItem.link === location.pathname
      ? (menuItem.isActive = true)
      : (menuItem.isActive = false)
  );

  return (
    <header>
      <div className="header__title">
        <h1>Northside Youth Soccer League</h1>
      </div>
      <nav>
        <ul className="list">
          {menu.map((menuItem, index) => (
            <Link
              key={index}
              className={`menu__link ${menuItem.isActive ? "active" : ""}`}
              to={menuItem.link}
            >
              <li>
                {menuItem.icon && (
                  <img
                    src={menuItem.icon}
                    alt={menuItem.name}
                    style={{ width: "20px", height: "20px" }}
                  />
                )}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
