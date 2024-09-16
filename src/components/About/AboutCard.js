import React from "react";
import Card from "react-bootstrap/Card";
import { IoGameController } from "react-icons/io5";
import { GiHiking } from "react-icons/gi";
import { MdMovie } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, I am <span className="purple">Aman Kumar</span>,
            hailing from{" "}
            <span className="purple">Lucknow, Uttar Pradesh, India</span>.
            <br />
            I am currently in my third year of studies, pursuing a degree in
            Information Science and Engineering at Siddaganga Institute of
            Technology, Tumkur.
            <br />
            <br />
            Beyond my academic pursuits, I engage in various activities:
          </p>
          <ul>
            <li className="about-activity">
              <IoGameController /> Gaming
            </li>
            <li className="about-activity">
              <MdMovie /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <GiHiking /> Traveling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
