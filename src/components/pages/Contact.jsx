import React from "react";

function Contact() {
  // linkedIn="www.linkedin.com/in/kevinngonzales"
  // github="https://github.com/kevinngonzales"
  return (
    <>


<div className="page-container">

<img className="connect-title" src="project-titles/connect-title.png" />

      <div className="contact-container">


      <div className="contact-content">
          <img className="logo-img" src="/button-logos/mail-logo.png" />
          <span>kevinngstem@gmail.com </span>
        </div>




        <div className="contact-content2">
          <a href="https://linkedin.com/in/kevinngonzales" target="_blank">
            <img className="logo-img" src="/button-logos/linkedin-logo.png" />
          </a>
          <span>LinkedIn</span>
        </div>





        <div className="contact-content3">
          <a href="https://github.com/kevinngonzales" target="_blank">
            <img className="logo-img" src="/button-logos/github-logo.png" />
          </a>
          <span>Github</span>
        </div>


      </div>
</div>



    </>
  );
}

export default Contact;
