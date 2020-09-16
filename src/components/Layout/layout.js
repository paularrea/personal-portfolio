
import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import '../../styles/index.scss'

import layoutStyles from "./layout.module.scss"

const Layout = (props) => {

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
      <Header />
        <main className={layoutStyles.main_container}>{props.children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
