import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import profile from "../../assets/img/MD_Akbar_Hossan_UI_IMG.png";

const Home = () => {
  const [activeButton, setActiveButton] = useState(2);

  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    // Add logic to handle button click here
  };
  return (
    <>
      {activeButton == 1 ? (
        <div className="portfolio-container protfolio-active">
          <div className="portfolio-content">
            <h1 className="portfolio-title">
              Hello <br /> I'm a{" "}
              <span style={{ color: "#FF4B91" }}>MERN STACK</span> Developer
            </h1>
            <p className="portfolio-description">
              I have been working with Mern Stack for the past two years.
            </p>
            <a
              href="/path/to/your/cv.pdf"
              download
              className="portfolio-button"
            >
              Download CV
            </a>
          </div>
          <div className="protfolio-img">
            <img
              className="img"
              src={profile}
              alt="Profile"
              width={300}
              height={300}
            />
          </div>
        </div>
      ) : null}

      {activeButton == 2 ? (
        <div className="profile-container">
          <div className="main-profile">
            <div className="profile-img">
              <img src={profile} alt="Profile" width={70} height={60} />
            </div>
            <div className="profile-info">
              <h4 className="profile-name">MD Akbar Hossan Icon</h4>
              <p className="title">MERN STACK Developer</p>
              <p className="location">
                Agrabad, Halishahar, Chattogram, Bangladesh
              </p>
              <div className="button-group">
                <Link className="msg" to="/">
                  Message
                </Link>
                <Link className="flw" to="/">
                  Follow
                </Link>
              </div>
            </div>
          </div>
          <div className="profile-details">
            <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>
              Identity
            </h2>
            <p className="info">
              <span style={{ color: "#FF4B91" }}>Full Name :</span> MD Akbar
              Hossan
            </p>
            <p className="info">
              <span style={{ color: "#FF4B91" }}>Email :</span>{" "}
              samratakbar667466@gmail.com
            </p>
            <p className="info">
              <span style={{ color: "#FF4B91" }}>Phone :</span> +823240324
            </p>
            <p className="info">
              <span style={{ color: "#FF4B91" }}>Phone :</span> +8801879808105
            </p>
            <p className="info">
              <span style={{ color: "#FF4B91" }}>Address :</span>
              Agrabad, Halishahar, Chattogram, Bangladesh
            </p>
          </div>
        </div>
      ) : null}
      {activeButton == 3 ? <h2>Its Recent Activity</h2> : null}
      {/* *********************************************** */}
      <div className="switching-menu">
        <button
          className={activeButton === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          CV Download
        </button>
        <button
          className={activeButton === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          Profile View
        </button>
        <button
          className={activeButton === 3 ? "active" : ""}
          onClick={() => handleClick(3)}
        >
          Recent Activity
        </button>
        {/* Add more buttons as needed */}
      </div>
    </>
  );
};

export default Home;
