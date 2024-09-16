import React from "react";
import { Col, Row } from "react-bootstrap";
import cpp from "../../Assets/skills/Cpp.svg";
import sql from "../../Assets/skills/SQL Developer.svg";
import js from "../../Assets/skills/JavaScript.svg";
import ex from "../../Assets/skills/Express.svg";
import react from "../../Assets/skills/React.svg"
import node from "../../Assets/skills/Node.js.svg"
import mongo from "../../Assets/skills/MongoDB.svg"
import mysql from "../../Assets/skills/MySQL.svg"
import firebase from "../../Assets/skills/Firebase.svg"
import html from "../../Assets/skills/HTML5.svg"
import css from "../../Assets/skills/CSS3.svg"
import bootstrap from "../../Assets/skills/Bootstrap.svg"
import swift from "../../Assets/skills/Swift.svg"
import tcss from "../../Assets/skills/Tailwind CSS.svg"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={cpp} alt="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={sql} alt="sql" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={js} alt="js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ex} alt="ex" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={react} alt="react" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={node} alt="node" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src={mongo} alt="mongodb" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={mysql} alt="mysql" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={html} alt="html" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={css} alt="css" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={bootstrap} alt="bootstrap" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={tcss} alt="tcss" />
      </Col>
    </Row>
  );
}

export default Techstack;
