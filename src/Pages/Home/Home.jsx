import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "./home.css";
import profile from "../../assets/img/MD_Akbar_Hossan_UI_IMG.png";
import Container from "react-bootstrap/Container";
const Home = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    // Add logic to handle button click here
  };
  return (
    <>
      {activeButton == 1 ? (
        <Container className="portfolio-container protfolio-active">
          <div className="portfolio-content">
            <h1 className="portfolio-title">
              Hey ! <br />{" "}
              <span className="subTitle">I'm a MERN STACK Developer</span>
            </h1>
            <p className="portfolio-description">
              I have been working with Mern Stack for the past two years.
            </p>
            <div className="contacts">
              <Link to="https://www.facebook.com/samrat.akbar.9883">
                <Icon.Facebook
                  size={25}
                  className="fb"
                  color="#59CE8F"
                  style={{
                    margin: "0px 15px 0px 4px",
                  }}
                />
              </Link>
              <Link to="https://github.com/MdAkbar05">
                <Icon.Github
                  className="gh"
                  size={25}
                  color="#59CE8F"
                  style={{
                    marginRight: "15px",
                  }}
                />
              </Link>
              <Link to="https://www.linkedin.com/in/md-akbar-hossan-765417249/">
                <Icon.Linkedin
                  className="lkn"
                  size={25}
                  color="#59CE8F"
                  style={{ borderRadius: "50%", marginRight: "15px" }}
                />
              </Link>
              <Link to="https://www.instagram.com/mdakbarhossansamrat/">
                <Icon.Instagram
                  className="inst"
                  size={25}
                  color="#59CE8F"
                  style={{ borderRadius: "50%" }}
                />
              </Link>
            </div>
            <br />
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
        </Container>
      ) : null}

      {activeButton == 2 ? (
        <Container className="profile-container">
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
              <div className="contacts">
                <Link to="https://www.facebook.com/samrat.akbar.9883">
                  <Icon.Facebook
                    size={25}
                    className="fb"
                    color="#59CE8F"
                    style={{
                      margin: "0px 15px 0px 4px",
                    }}
                  />
                </Link>
                <Link to="https://github.com/MdAkbar05">
                  <Icon.Github
                    className="gh"
                    size={25}
                    color="#59CE8F"
                    style={{
                      marginRight: "15px",
                    }}
                  />
                </Link>
                <Link to="https://www.linkedin.com/in/md-akbar-hossan-765417249/">
                  <Icon.Linkedin
                    className="lkn"
                    size={25}
                    color="#59CE8F"
                    style={{ borderRadius: "50%", marginRight: "15px" }}
                  />
                </Link>
                <Link to="https://www.instagram.com/mdakbarhossansamrat/">
                  <Icon.Instagram
                    className="inst"
                    size={25}
                    color="#59CE8F"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
              </div>
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
              Personal Information
            </h2>
            <p className="info">
              <span>Full Name :</span> MD Akbar Hossan
            </p>
            <p className="info">
              <span>Email :</span> samratakbar667466 <br />
              @gmail.com
            </p>
            <p className="info">
              <span>Phone :</span> +823240324
            </p>
            <p className="info">
              <span>Phone :</span> +8801879808105
            </p>
            <p className="info">
              <span>Address :</span>
              Agrabad, Halishahar, Chattogram, Bangladesh
            </p>
          </div>
        </Container>
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
