import React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout/layout"
import style404 from "../styles/404.module.scss"

const NotFoundPage = () => (
  <Layout> 
      <div className={style404.container}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p><Link to='/'>Head home</Link></p>
      </div>
  </Layout>
)

export default NotFoundPage
