import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
import Uv from "../UvToggle/uv"
import Burger from "./burger"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <header className={headerStyles.header}>
        {window.innerWidth >= 500 ? (
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
          </nav>
        ) : (
          <Burger />
        )}
        <div className={headerStyles.uv}>
          <Uv />
        </div>
      </header>
    </div>
  )
}

export default Header
