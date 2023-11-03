import React, { useEffect, useState } from "react";
import { ImMenu } from "react-icons/im";
import "./header.css";
import * as Icon from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <>
      <div className="header container">
        <div className="brand center">
          <Link to="/">
            <span className="brandTitle">TELEPATHIST SAMRAT</span>
          </Link>
        </div>

        <ul className="nav center">
          <li className={url == "/" ? "active" : null}>
            <Link to="/">Home</Link>
          </li>
          <li className={url == "/projects" ? "active" : null}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={url == "/abouts" ? "active" : null}>
            <Link to="/abouts">Abouts</Link>
          </li>
          <li className={url == "/contacts" ? "active" : null}>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        {/* Dropdown Menu  */}
        <div className="dropdown">
          <div
            className="menuBtn center"
            onClick={() => {
              setDropdown(!dropdown);
            }}
          >
            <ImMenu className="menuIcon" />
          </div>
          <ul className={`dropdownList ${dropdown ? "onStyle" : "offStyle"}`}>
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="link">
              <Link to="/abouts">Abouts</Link>
            </li>
            <li className="link">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
