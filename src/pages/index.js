import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout/layout"
import Home from "../components/web-pages/home"
import About from "../components/web-pages/about"
import Contact from "../components/web-pages/contact"
import Projects from "../components/web-pages/projects"
import style from "../styles/home.module.scss"
import Fade from "react-reveal/Fade"

const App = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const intro = setTimeout(() => {
      setLoaded(true)
    }, 2000)
    return () => clearTimeout(intro)
  }, [])

  return (
    <div>
      {loaded ? (
        <Layout>
          <Home />
          <Projects />
          <About />
          <Contact />
        </Layout>
      ) : (
        <div className={style.on_load}>
          <Fade top>
          <div className={style.animation}>Pau Larrea .</div>
          </Fade>
        </div>
      )}
    </div>

  )
}

export default App
