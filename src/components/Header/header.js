import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import Uv from "../UvToggle/uv"
import Burger from "./burger"

const Header = () => {

  return (
    <div>
      <header className={headerStyles.header}>
        {window.innerWidth >= 800 ? (
          <nav>
            <ul
              className={headerStyles.navList}
              style={{
                backgroundColor: "var(--bg)",
              }}
            >
              <li>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/projects"
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            <div className={headerStyles.uv}>
              <Uv />
            </div>
          </nav>
        ) : (
          <div className={headerStyles.burger_container}>
            <Burger />
              <Uv />
          </div>
        )}
      </header>
    </div>
  )
}

export default Header
