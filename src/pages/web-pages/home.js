import React from "react"
import IntroVideo from "../../components/Video/introVideo.jsx"
import styles from "../../styles/home.module.scss"
import Fade from "react-reveal/Fade"
import SEO from "../../components/seo"

const Home = () => {
  return (
    <div id="home" className={styles.container}>
      <SEO
      title="home page"
      description="Portfolio website of the frontend web developer Pau Larrea, with
       all the available material (projects, contact, cv...)."/>
      <div className={styles.intro}>
        <h1 className={styles.title}>
          Hello! I'm Pau, and I'm a FRONTEND DEVELOPER based in Barcelona.
        </h1>
        <IntroVideo />
      </div>
      <div className={styles.intro_text}>
        <Fade left delay={2500}>
          <h1>
            My name is Pau Larrea, very nice to meet you! Please take a look
            around.<br/>Here you can find a bit of myself and some of my personal
            projects.
          </h1>
        </Fade>
      </div>
    </div>
  )
}

export default Home
