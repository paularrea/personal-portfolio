import { slide as Menu } from "react-burger-menu"
import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import "./burger.css"

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Menu className="bm-menu">
        <TransitionLink
          entry={{
            delay: 0.6,
          }}
          to="/"
          id="home"
          className="menu-item"
        >
          Home
        </TransitionLink>
        <TransitionLink
          entry={{
            delay: 0.6,
          }}
          to="/projects"
          id="projects"
          className="menu-item"
        >
          Projects
        </TransitionLink>
        <TransitionLink
          entry={{
            delay: 0.6,
          }}
          to="/about"
          id="about"
          className="menu-item"
        >
          About
        </TransitionLink>
        <TransitionLink
          entry={{
            delay: 0.6,
          }}
          to="/contact"
          id="contact"
          className="menu-item"
        >
          Contact
        </TransitionLink>
      </Menu>
    )
  }
}

export default Burger
