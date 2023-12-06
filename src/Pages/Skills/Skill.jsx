import { Container, Grid } from "@mui/material";
import React from "react";
import "./Skill.css";
import Boostrap from "./img/Boostrap.png";
import ReactJS from "./img/ReactJS.png";
import NodeJS from "./img/NodeJS.png";
import ExpressJS from "./img/ExpressJS.png";
import MongoDB from "./img/MongoDB.png";
import Tailwind from "./img/Tailwind.png";
import JS from "./img/Javascript.png";
import HtmlCSS from "./img/HtmlCSS.png";

const Skill = () => {
  return (
    <>
      <Container
        style={{
          paddingTop: "50px",
        }}
      >
        <h1 className="center">
          My Achieve_ <span className="ht"> Skills</span>
        </h1>
        <div className="skill">
          <div className="item">
            <img
              src={HtmlCSS}
              style={{ background: "#fff" }}
              alt="HtmlCSS"
              width={100}
              height={80}
            />{" "}
            <br />
            <h3 className="">HTML_CSS</h3>
          </div>
          <div className="item">
            <img src={Boostrap} alt="Boostrap" width={100} height={80} /> <br />
            <h3 className="">Boostrap</h3>
          </div>
          <div className="item">
            <img src={Tailwind} alt="Tailwind" width={100} height={80} /> <br />
            <h3 className="">Tailwind</h3>
          </div>
          <div className="item">
            <img src={JS} alt="JavaScript" width={100} height={80} /> <br />
            <h3 className="">JavaScript</h3>
          </div>
          <div className="item">
            <img src={ReactJS} alt="ReactJS" width={100} height={80} /> <br />
            <h3 className="">ReactJS</h3>
          </div>
          <div className="item">
            <img
              src={NodeJS}
              style={{ background: "#fff" }}
              alt="NodeJS"
              width={100}
              height={80}
            />{" "}
            <br />
            <h3 className="">NodeJS</h3>
          </div>
          <div className="item">
            <img src={ExpressJS} alt="ExpressJS" width={100} height={80} />{" "}
            <br />
            <h3 className="">ExpressJS</h3>
          </div>
          <div className="item">
            <img
              src={MongoDB}
              style={{ background: "#fff" }}
              alt="Mongoose"
              width={100}
              height={80}
            />{" "}
            <br />
            <h3 className="">Mongoose</h3>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Skill;
