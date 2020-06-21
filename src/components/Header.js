import React from 'react';

export default function Header() {
  return (
    <header>
      <a href="#home">
        <p className="header-1">Jennifer Miller</p>
      </a>
      <a className="hide-display" href="#about">
        <p className="header-2">About</p>
      </a>
      <a className="hide-display" href="#projects">
        <p className="header-3">Projects</p>
      </a>
      <a className="hide-display" href="#contact">
        <p className="header-4">Contact</p>
      </a>
      <a className="hide-display" href="https://docdro.id/p0BXgmy" target="_blank" rel="noopener noreferrer">
        <p className="header-5">Resume</p>
      </a>
    </header>
  )
}
