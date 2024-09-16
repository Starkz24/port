import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

import lower from "../../Assets/myImg.png";

import interest from "../../Assets/interest.gif";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.8em", fontWeight: "bold" }}>
              My Interests
              <img
                style={{ width: "4rem", paddingBottom: "25px" }}
                src={interest}
                alt=""
              />
            </h1>
            <p className="home-about-body">
              I discovered a passion for programming and have gathered knowledge
              in the field, continually expanding my skills.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple"> C, C++, Javascript, and Express.js </b>
              </i>
              <br />
              <br />
              My interests include creating innovative &nbsp;
              <i>
                <b className="purple">Web Technologies and Products.</b> 
              </i>
              <br />
              <br />I also enjoy working with <b className="purple">
                Node.js
              </b>{" "}
              and modern JavaScript libraries and frameworks like
              <i>
                <b className="purple"> React.js, Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={lower} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>I'm open to connecting, feel free to reach out!</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Starkz24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  style={{ fontSize: "1.5em" }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Aman90250827"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  style={{ fontSize: "1.5em" }}
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aman-kumar-1946421b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  style={{ fontSize: "1.5em" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aman.kumar24048__/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ fontSize: "1.5em" }}
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:aman.kumarz2404@gmail.com"
                  className="icon-colour home-social-icons"
                  style={{ fontSize: "1.5em" }}
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
