import React, { useState, useEffect } from "react"
import headerStyles from "./header.module.scss"
import Uv from "../UvToggle/uv"
import Burger from "./burger"
import Media from "react-media"
import TransitionLink from "gatsby-plugin-transition-link"

const Header = () => {
  const [homeUnderline, setHomeUnderline] = useState(false)
  const [projectsUnderline, setProjectsUnderline] = useState(false)
  const [aboutUnderline, setAboutUnderline] = useState(false)
  const [contactUnderline, setContactUnderline] = useState(false)

  useEffect(() => {
    const changeUnderline = () => {
      console.log(window.scrollY)
      if (window.scrollY < (90 * window.innerHeight) / 100) {
        setHomeUnderline(true)
        setProjectsUnderline(false)
        setAboutUnderline(false)
        setContactUnderline(false)
      } else if (
        window.scrollY > (90 * window.innerHeight) / 100 &&
        window.scrollY < (180 * window.innerHeight) / 100
      ) {
        setHomeUnderline(false)
        setProjectsUnderline(true)
        setAboutUnderline(false)
        setContactUnderline(false)
      } else if (
        window.scrollY > (180 * window.innerHeight) / 100 &&
        window.scrollY < (260 * window.innerHeight) / 100
      ) {
        setHomeUnderline(false)
        setProjectsUnderline(false)
        setAboutUnderline(true)
        setContactUnderline(false)
      } else if (
        window.scrollY > (260 * window.innerHeight) / 100 &&
        window.scrollY < (320 * window.innerHeight) / 100
      ) {
        setHomeUnderline(false)
        setProjectsUnderline(false)
        setAboutUnderline(false)
        setContactUnderline(true)
      }
    }
    window.addEventListener("scroll", changeUnderline)
  }, [])

  return (
    <div>
      <header id="navbar" className={headerStyles.header}>
        <Media query={{ minWidth: 950 }}>
          <nav>
            <ul className={headerStyles.navList}>
              <li>
                <TransitionLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={
                    homeUnderline
                      ? headerStyles.activeNavItem
                      : headerStyles.navItem
                  }
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
                  className={
                    projectsUnderline
                      ? headerStyles.activeNavItem
                      : headerStyles.navItem
                  }
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
                  className={
                    aboutUnderline
                      ? headerStyles.activeNavItem
                      : headerStyles.navItem
                  }
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
                  className={
                    contactUnderline
                      ? headerStyles.activeNavItem
                      : headerStyles.navItem
                  }
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
