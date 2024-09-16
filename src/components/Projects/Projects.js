import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"../../Assets/Projects/scrappy.png"}
              isBlog={false}
              title="Scrappy"
              description=" Developed and deployed an ML web app  on AWS using Node.js, Express.js, MongoDB, and React.js to gamify waste  management. The application enables waste scanning for points, user authentication, eco-friendly drives, and leaderboard tracking.  Additionally, I integrated PM2 to manage and keep the application running smoothly in a production environment on AWS."
              ghLink="https://github.com/Starkz24/estash"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"../../Assets/Projects/social.webp"}
              isBlog={false}
              title="Sociopedia | Social Media"
              description="Developed and deployed  a social media platform on render using MERN stack with Redux, featuring user authentication with JWT, post creation, likes,  comments, and follow functionalities for enhanced user engagement and interactivity."
              ghLink="https://github.com/Starkz24/socialMedia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"../../Assets/Projects/smoothCoder.webp"}
              isBlog={false}
              title="SmoothCoder"
              description="Developed a Next. js-based coding  platform enabling users to write, execute, and monitor code with real-time metrics  on execution time and memory usage. Include Coding Arena to solve problems that are available on the platform."
              ghLink="https://github.com/starkz24/codeBrew/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"../../Assets/Projects/browse.png"}
              isBlog={false}
              title="Browse | Tech Fest"
              description="I designed and implemented  a robust registration system for my college's annual Technical Fest, facilitating seamless sign-up and participation for over 1000 students across two successful years. The system streamlined the registration process, enhancing user experience and ensuring efficient event management."
              ghLink="https://www.sitsark.in/browse/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
