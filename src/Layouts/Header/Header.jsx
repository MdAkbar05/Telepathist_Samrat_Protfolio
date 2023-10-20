import React, { useState } from "react";
import { ImMenu } from "react-icons/im";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="header">
        <div className="brand center">
          <Link to="/">
            <span style={{ color: "#FFF2D8" }}>TELEPATHIST SAMRAT</span> |
            <span style={{ color: " #FF4B91" }}> Protfolio</span>
          </Link>
        </div>

        <ul className="nav center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/abouts">Abouts</Link>
          </li>
          <li>
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
