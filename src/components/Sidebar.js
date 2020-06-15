import React from 'react';
import { bubble as Menu } from "react-burger-menu";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  closeAllMenusOnEsc = (e) => {
    e = e || window.event;
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.setState({ menuOpen: false });
    }
    this.closeMenu()
  };

  render() {
    return (
      // Pass on our props
      <Menu
        right
        disableAutoFocus
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        customOnKeyDown={this.closeAllMenusOnEsc}
      >
        <main id="page-wrap">
          <a onClick={() => this.closeMenu()} className="menu-item" href="#about">
            About
          </a>

          <a onClick={() => this.closeMenu()} className="menu-item" href="#projects">
            Projects
          </a>

          <a onClick={() => this.closeMenu()} className="menu-item" href="#contact">
            Contact
          </a>

          <a onClick={() => this.closeMenu()} className="menu-item" href="https://www.docdroid.net/5ojslv8/rauljiminianresume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </main>
      </Menu>
    )
  }
}
