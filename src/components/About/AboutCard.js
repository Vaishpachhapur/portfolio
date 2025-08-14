import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vaishnavi Pachhapur </span> 
            from <span className="purple">Bangalore, India.</span>
            <br />
            I have completed my <span className="purple">Master of Computer Applications (MCA)</span> from PES University, Bangalore, 
            and hold a <span className="purple">Bachelor of Computer Applications (BCA)</span> from SDM Degree College, Ujire.
            <br />
            <br />
            I am a <span className="purple">fresher</span> seeking job opportunities in software development.
            <br />
            <br />
            <b>Internships:</b>
            <ul>
              <li>
                <b>Software Trainee Intern</b> at <span className="purple">USR Infotech</span> (Apr 2025 – Jul 2025)  
                <ul>
                  <li>Developed and optimized responsive web applications using <b>React (TSX)</b> and <b>Tailwind CSS</b>, improving UI consistency and performance.</li>
                  <li>Collaborated with clients to ensure seamless alignment of technical solutions with business needs.</li>
                </ul>
              </li>
              <li>
                <b>Python Developer Intern</b> at <span className="purple">Global Quest Technologies</span> (Mar 2023 – Apr 2023)  
                <ul>
                  <li>Worked on fundamental and advanced Python programming with real-world applications.</li>
                  <li>Enhanced debugging, problem-solving, and coding efficiency.</li>
                </ul>
              </li>
            </ul>
            <br />
            <b>Projects:</b>
            <br />
            1. <b>Intellicleanse</b> – Data cleansing tool to automate error detection, duplication removal, and standardization.  <br/>
            2. <b>Career-Connect</b> – Interview preparation platform with study materials, quizzes, resume templates, and analytics.  <br/>
            3. <b>Jeevapara</b> – E-commerce platform empowering women from slums to sell fresh produce.  
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
