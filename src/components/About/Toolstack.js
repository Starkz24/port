import React from "react";
import { Col, Row } from "react-bootstrap";

import vs from "../../Assets/skills/Visual Studio Code (VS Code).svg";
import pc from "../../Assets/skills/PyCharm.svg";
import xcode from "../../Assets/skills/Xcode.svg";
import postman from "../../Assets/skills/Postman.svg";
import vercel from "../../Assets/skills/Vercel.svg";
import git from "../../Assets/skills/Git.svg";
import github from "../../Assets/skills/github.png";
import apple from "../../Assets/skills/apple.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{ height: "150px" }} src={apple} alt="apple" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vs} alt="vs" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={pc} alt="pc" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={xcode} alt="xcode" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postman} alt="postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vercel} alt="vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={git} alt="git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{ height: "110px" }} src={github} alt="github" />
      </Col>
    </Row>
  );
}

export default Toolstack;
