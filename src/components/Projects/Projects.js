import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  const myProjects = [
    {
      title: "Text Editor (HTML & CSS)",
      description: "A basic web-based text editor developed in the first semester using HTML and CSS.",
      link: "https://github.com/ishu6787/Projects" // Replace with your GitHub link
    },
    {
      title: "Crick-Info (OOP Project)",
      description: "An object-oriented cricket statistics management system developed in C++.",
      link: "https://github.com/ishu6787/Projects"
    },
    {
      title: "Snake Game (Assembly)",
      description: "A terminal-based snake game programmed in assembly language to understand low-level coding.",
      link: "https://github.com/ishu6787/Projects"
    },
    {
      title: "Airline Management System (C#)",
      description: "A C# desktop application to manage airline bookings and flight schedules.",
      link: "https://github.com/ishu6787/Projects"
    },
    {
      title: "Full Stack E learning Platform ",
      description: "A full-stack e-learning platform built using HTML, CSS, JS, Node.js, Express, MongoDB with authentication and email support via Nodemailer.",
      link: "https://github.com/ishu6787/Projects/tree/master"
    },
    {
      title: "Peer-to-Peer Network ",
      description: "A secure, encrypted P2P network with advanced features, currently in development.",
      link: "https://github.com/ishu6787/Projects"
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've worked on:
        </p>
        <Row>
          {myProjects.map((proj, idx) => (
            <Col md={6} key={idx} style={{ marginBottom: "20px" }}>
              <div style={{
                background: "#1e1e2f",
                padding: "20px",
                borderRadius: "10px",
                color: "white",
                border: "1px solid #6c63ff"
              }}>
                <h5 style={{ color: "#6c63ff" }}>{proj.title}</h5>
                <p>{proj.description}</p>
               {proj.link && proj.link.startsWith("http") && (
                 <a
                   href={proj.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   title={`View ${proj.title} on GitHub`}
                   style={{ color: "#00bfff", textDecoration: "underline" }}
                 >
                  View Code ↗
                 </a>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
