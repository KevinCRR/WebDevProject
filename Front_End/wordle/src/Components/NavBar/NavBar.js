import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBar";
import { SideBarDataLogged } from "./SideBarLogged";
import "../../Styles/navbar.css";
import { IconContext } from "react-icons";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  // const [isLoggedIn, setLoggedFlag] = useState(false);
  var data = [];

  const showSidebar = () => setSidebar(!sidebar);

  if (props.isLogged) {
    data = SideBarDataLogged;
  } else {
    data = SideBarData;
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1 className="title">Wordle</h1>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
