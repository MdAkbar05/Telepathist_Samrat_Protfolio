import { Container } from "@mui/material";
import React from "react";
import { Fade, Zoom } from "react-reveal";
import "./Services.css";
import ServiceLogo from "./img/ServiceLogo.png";
import WebDesign from "./img/web-design.png";
import WebDevelop from "./img/web-develop.png";
import WebApp from "./img/Web-Application.png";
import ProjectManage from "./img/project-management.png";
import Backend from "./img/backend.png";

const Services = () => {
  return (
    <Container className="Services">
      <Fade left>
        <h1 className="center">
          <img src={ServiceLogo} width={60} height={60} alt="Services" />
          <span className="ht">Provide Services</span>
        </h1>
      </Fade>
      <div className="serviceContainer">
        <Zoom>
          <div className="service web-design">
            <img
              src={WebDesign}
              style={{ background: "transparent" }}
              alt="Web Design"
              width={100}
              height={80}
            />{" "}
            <br />
            <h3 className="">Web Design</h3>
          </div>
          <div className="service web-development">
            <img
              src={WebDevelop}
              style={{ background: "transparent" }}
              alt="Web Development"
              width={100}
              height={80}
            />{" "}
            <br />
            <h3 className="">Web Development</h3>
          </div>
          <div className="service web-application">
            <img
              src={WebApp}
              style={{ background: "transparent" }}
              alt="Web Application"
              width={100}
              height={80}
            />{" "}
            <br />
            <h3 className="">Web Application</h3>
          </div>
          <div className="service backend-development">
            <img
              src={Backend}
              style={{ background: "transparent" }}
              alt="Backend Development"
              width={100}
              height={80}
            />{" "}
            <br />
            <h3 className="">Backend Development</h3>
          </div>
          <div className="service project-mgt">
            <img
              src={ProjectManage}
              style={{ background: "transparent" }}
              alt="Project Management"
              width={100}
              height={80}
            />{" "}
            <br />
            <h3 className="">Project Management</h3>
          </div>
        </Zoom>
      </div>
    </Container>
  );
};

export default Services;
