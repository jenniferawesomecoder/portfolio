import React from 'react'
//functional component
export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Jennifer Miller</h1>
        <div className="popEffect">
          <span>Software Engineer</span>
          <span>Front End Developer</span>
          <span>Continuously Learning</span>
          <span>Problem Solver</span>
          <span>Team Player</span>
        </div>
      </div>
      <a href='#about'>
        <div className="oval">
          <div className="triangle"></div>
        </div>
      </a>
    </div>
  )
}
