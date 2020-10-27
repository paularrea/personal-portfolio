import { slide as Menu } from "react-burger-menu"
import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import "./burger.css"
import style from "./header.module.scss"

class Burger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }
  closeMenu() {
    this.setState({ menuOpen: false })
  }
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }
  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        className="bm-menu"
      >
        <TransitionLink
          entry={{
            delay: 0.3,
          }}
          to="/#home"
          className={style.menu_item}
          onClick={() => this.closeMenu()}
        >
          Home
        </TransitionLink>
        <TransitionLink
          entry={{
            delay: 0.3,
          }}
          to="/#projects"
          className={style.menu_item}
          onClick={() => this.closeMenu()}
        >
          Projects
        </TransitionLink>
        <TransitionLink
          entry={{
            delay: 0.3,
          }}
          to="/#about"
          className={style.menu_item}
          onClick={() => this.closeMenu()}
        >
          About
        </TransitionLink>
        <TransitionLink
          entry={{
            delay: 0.3,
          }}
          to="/#contact"
          className={style.menu_item}
          onClick={() => this.closeMenu()}
        >
          Contact
        </TransitionLink>
      </Menu>
    )
  }
}

export default Burger
