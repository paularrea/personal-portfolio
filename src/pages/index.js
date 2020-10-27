import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/Layout/layout"
import Home from "../components/web-pages/home"
import About from "../components/web-pages/about"
import Contact from "../components/web-pages/contact"
import Projects from "../components/web-pages/projects"
import style from "../styles/index.scss"

const App = () => {
  return (
    <div>
      <Layout>
        <div className={style.container}>
          <Home />
          <Projects />
          <About />
          <Contact />
        </div>
      </Layout>
    </div>
  )
}

export default App
