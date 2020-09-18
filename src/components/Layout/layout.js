
import React from "react"
import PropTypes from "prop-types"
// import Fade from "react-reveal/Fade"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import '../../styles/index.scss'

import layoutStyles from "./layout.module.scss"

const Layout = (props) => {

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
      <Header />
      {/* <Fade cascade delay={300} duration={1000}> */}
        <main className={layoutStyles.main_container}>{props.children}</main>
      {/* </Fade> */}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
