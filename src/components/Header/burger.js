import { slide as Menu } from 'react-burger-menu'
import React from "react"
import "./burger.css"

class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu className='bm-menu' >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="projects" className="menu-item" href="/projects">Projects</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/about" href="/contact">Contact</a>
      </Menu>
    );
  }
}

export default Burger