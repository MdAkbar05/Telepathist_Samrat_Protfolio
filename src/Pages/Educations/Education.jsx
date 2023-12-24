import React from "react";
import { Container } from "react-bootstrap";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import "./Education.css";
import { Fade, Zoom } from "react-reveal";
import EduLogo from "./img/EduLogo.png";
import Educations from "./img/Educations.png";
const Education = () => {
  return (
    <Container className="Education">
      <Fade left>
        <h1 className="center">
          <img src={EduLogo} width={65} height={60} alt="Educations" />
          <span className="ht">Education Qualifications</span>
        </h1>
      </Fade>
      {/* University Education Details */}
      <div className="Introduce">
        <div className="left image">
          <img src={Educations} alt="" />
        </div>
        <div className="right edu">
          <Zoom>
            <div className="degree">
              <CheckCircleRoundedIcon style={{ marginRight: "10px" }} />
              Secoundary School Certificates | 2020
            </div>
            <div className="degree">
              <CheckCircleRoundedIcon style={{ marginRight: "10px" }} /> Diploma
              in Computer Science & Engineering | 2024
            </div>
            <div className="degree">
              <CheckCircleRoundedIcon style={{ marginRight: "10px" }} />{" "}
              Upcoming
            </div>
          </Zoom>
        </div>
      </div>
    </Container>
  );
};

export default Education;
