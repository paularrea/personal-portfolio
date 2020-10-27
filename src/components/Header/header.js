import React from "react"
import headerStyles from "./header.module.scss"
import Uv from "../UvToggle/uv"
import Burger from "./burger"
import Media from "react-media"
import TransitionLink from "gatsby-plugin-transition-link"

const Header = () => {
  return (
    <div>
      <header id="navbar" className={headerStyles.header}>
        <Media query={{ minWidth: 950 }}>
          <nav>
            <ul
              className={headerStyles.navList}
              style={{
                backgroundColor: "var(--bg)",
              }}
            >
              <li>
                <TransitionLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/#home"
                >
                  HOME
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/#projects"
                >
                  PROJECTS
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/#about"
                >
                  ABOUT
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/#contact"
                >
                  CONTACT
                </TransitionLink>
              </li>
            </ul>
            <div className={headerStyles.uv}>
              <Uv />
            </div>
          </nav>
        </Media>
        <Media query={{ maxWidth: 950 }}>
          <div className={headerStyles.burger_container}>
            <Burger />
            <Uv />
          </div>
        </Media>
      </header>
    </div>
  )
}

export default Header
