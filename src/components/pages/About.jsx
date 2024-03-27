import React from "react";

// Inside the Summary component, include the following information, using semantic HTML elements (BE CREATIVE!):
// Introduction and Background:
// Briefly introduce yourself and your team (if applicable). Mention your name, role, and perhaps a bit about your background in web development.
// Mission Statement:
// Clearly state the mission or goal of your web development services. This helps potential clients understand the purpose and values of your work.
// Expertise and Specialization:
// Describe your areas of expertise and specialization within web development. This could include front-end development, back-end deveblopment, full-stack development, UI/UX design, e-commerce solutions, mobile-responsive design, etc.
// Note: This may include transferable skills from previous professions/work experience. The goal is to establish a target audience with skills you presently have.
// Technologies and Tools:
// List the technologies, programming languages, frameworks, and tools you are proficient in. This gives clients an idea of the technical capabilities you bring to the table.
// Client-Centric Approach:
// Highlight your focus on client satisfaction and how you ensure their needs and vision are met throughout the development process.
// Education and Certifications:
// If relevant, mention any degrees, certifications, or training related to web development.

//Font options?
// https://fonts.google.com/specimen/DM+Mono

function About() {
  function Summary() {
    return (
      <>
        <div className="about-container">
          <img className="about-title" src="/name-title.png" />

          <img className="profile-pic" src="/profile-picture.png"/>

          <div className="about-text">
            <h2>Full-Stack Developer specializing in Web Technlologies</h2>
            <div className="text">
            <h3>ABOUT</h3>


              My name is Kevinn Gonzales and I am based in the Los Angeles area.
              I have always been passionate about computers and technology and I
              decided that a career in this space is something I can see myself
              doing long-term. I started my journey in the tech space during the
              summer of 2023 through The Knowledge House Fellowship. Although, I
              am fairly new to this space, I am absolutely thrilled and excited
              to commit myself and focus these skills into a career where I'm
              excited to make a meaningful impact in the digital world.

              <h3>MISSION</h3>

              Having a good amount of experience in the customer-service space,
              I believe that I have exceptional interpersonal skills and
              customer satisfaction is a top priority for me. Additionally, with
              a keen eye for design and detail, I strive to create uniqe
              applications/websites that embody the vision and values for
              clients and companies.
            </div>

            <h2>Technlologies</h2>

            <ul>
              <li> HTML </li>
              <li> CSS </li>
              <li> JavaScript </li>
              <li> Express </li>
              <li> NodeJS </li>
              <li> React.js </li>
              <li> MongoDB </li>
            </ul>

            <h2> Certifications </h2>

            <h4> The Knowledge House Web Development Fellowship: </h4>

            <div>
              (In Progress) 12-month job training program that prepares participants for the
              competitive tech industry. Learned industry tools that power
              popular apps, from creating beautiful, fast, and responsive
              interfaces with Meta’s ReactJS to creating powerful APIs with the
              Express framework.
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Summary />
    </>
  );
}

export default About;
