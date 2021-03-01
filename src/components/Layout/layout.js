import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Header from "../Header/header"
import "../../styles/index.scss"
import Fade from "react-reveal/Fade"

import layoutStyles from "./layout.module.scss"

const Layout = props => {
  const [closeIntro, setCloseIntro] = useState(false)

  useEffect(() => {
    const intro = setTimeout(() => {
      setCloseIntro(true)
    }, 2500)
    return () => clearTimeout(intro)
  }, [])

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
         {!closeIntro && (
        <div className={layoutStyles.on_load}>
          <Fade >
            <div className={layoutStyles.animation}>Pau Larrea .</div>
          </Fade>
        </div>
      )}
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <main className={layoutStyles.main_container}>{props.children}</main>
      </div>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
