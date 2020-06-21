import React from 'react';

export default function About() {
  return (
    <div data-aos="fade-up" className="about">
      <div className="about-span-container">
        <span>About Me</span>
      </div>
      <div className="about-content">
        <div className="about-content-contact">
          <div className="mainAA">
            <div data-aos="fade-right" className="about-content-right-container mainA">
              <img data-aos="zoom-in" src="https://media-exp1.licdn.com/dms/image/C4D03AQFjyLgxTr5bZA/profile-displayphoto-shrink_800_800/0?e=1597881600&v=beta&t=aaSK7TXjs95Kv-QRomRA2IrDquHX4yB8ZQ1EMOOMbOE" alt="About me description" />
              {/* <img data-aos="zoom-in" src={RJPhoto} alt="About me description" /> */}
            </div>
            <div data-aos="fade-left" className="mainB">
              <p>I am a full-stack software engineer with a deep interest in front-end development.
              My previous career as a government contractor focused on  Technology - Software team, has taught me to be detail-oriented, resilient and analytical.
              I started to become passionate about developing early in my contracting career soon as I was exposed to the many different types of software development  contracts.
              I was fascinated by the disruptive technologies providing solutions to what was previously complex problems.
              I quickly realized that my passion and drive for web development, as well as my desire to seek deeper involvement in building out applications, stems from a hunger to learn and create.
              I am self-motivated enough to work independently, but also recognize that the best products and services are produced by teams that work well together.
              I love working with others and approach teamwork in a caring, helpful and selfless manner. It is my belief that having a genuine care for others encourages the greatest collaborative environments.
              I am excited to continue my growth within the technology space and look to connect with other like-minded developers.</p>
            </div>
          </div>
          <div data-aos="fade-up" className="mainC">
            <div className="about-content-right top">
              <a href="https://www.linkedin.com/in/jennifer-miller-software-engineer-ror-java-react-redux-7509621/" target="_blank" rel="noopener noreferrer">
                <img src="https://res.cloudinary.com/de0lfihzm/image/upload/v1576809004/iconmonstr-note-14_mg5i0k.svg" alt="resume" />
                <p>Resume</p>
              </a>
            </div>
            <div className="about-content-right">
              <a href="https://github.com/jenniferawesomecoder" target="_blank" rel="noopener noreferrer">
                <img src="https://res.cloudinary.com/de0lfihzm/image/upload/v1576808366/iconmonstr-github-1_abz9tm.svg" alt="github icon" />
                <p>GitHub</p>
              </a>
            </div>
            <div className="about-content-right">
              <a href="https://www.linkedin.com/in/jennifer-miller-software-engineer-ror-java-react-redux-7509621/" target="_blank" rel="noopener noreferrer">
                <img src="https://res.cloudinary.com/de0lfihzm/image/upload/v1576809224/iconmonstr-linkedin-3_ylytqe.svg" alt="linked in profile" />
                <p>LinkedIn</p>
              </a>
            </div>
            <div className="about-content-right">
              <a href="mailto:millerarcher@me.com" target="_blank" rel="noopener noreferrer">
                <img src="https://res.cloudinary.com/de0lfihzm/image/upload/v1576807545/iconmonstr-email-2_gbfl3c.svg" alt="email icon" />
                <p>Email</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-icon-container">
        <div className="about-icon-span-container">
          <span>Skills &amp; Tools</span>
        </div>
        <br />
        <div data-aos="zoom-in-up" className="about-icons">
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-bootstrap-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
          <i className="devicon-ruby-plain-wordmark colored"></i>
          <i className="devicon-sass-original colored"></i>
          <i className="devicon-jquery-plain-wordmark colored"></i>
          <i className="devicon-nodejs-plain colored"></i>
          <i className="devicon-rails-plain-wordmark colored"></i>
          <i className="devicon-postgresql-plain-wordmark colored"></i>
          <i className="devicon-github-plain-wordmark colored"></i>
          <i className="devicon-git-plain-wordmark colored"></i>
          <i className="devicon-express-original-wordmark colored"></i>
          <i className="devicon-sequelize-plain-wordmark colored"></i>
        </div>
      </div>
    </div>
  )
}
