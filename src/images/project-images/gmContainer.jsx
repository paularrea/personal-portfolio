import React from "react"
import style from "./image.module.scss"
import GitHubIcon from "@material-ui/icons/GitHub"
import { Link } from "gatsby"
import SEO from "../../components/seo"

function gmImg() {
  return (
    <div className={style.container}>
      <SEO
        title="Green Move app"
        description="Green Move is a platform to create, promote and join environmental and social projects. Always with the intention of changing the world for the better."
      />
      <div className={style.title}>
        <h1>Green Move app</h1>
        <h5>Platform to promote environmental and social projects</h5>
        <div className={style.container_icons}>
          <div>
            <a
              className={style.site}
              href="https://greenmove-app.herokuapp.com/"
              target="blank"
            >
              Visit site
            </a>
          </div>
          <div>
            <a href="https://github.com/paularrea/GreenMove-app" target="blank">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/greenmove%2FMockups.png?alt=media&token=61677d58-eff4-47e0-9f8a-8851d803c0fa"
          alt="greenmove project one"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/greenmove%2FMockups-2.png?alt=media&token=35ecb298-7325-4d3c-b2aa-99e9ac06eb13"
          alt="greenmove project two"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/greenmove%2FMockups-1.png?alt=media&token=eaaa72e5-fd47-4797-8271-f429bf7c3f1a"
          alt="greenmove project three"
        />
        <div className={style.description}>
          <h1>About the project</h1>
          <p>
            Green Move app is a platform to promote environmental and social
            projects. You can support actions that are happening in your city,
            join them or create your own movement and involve people. Always
            with the intention of changing the world for the better.
          </p>
          <br />
          <h1>Challenge and technologies</h1>
          <p>
            This was my first <span className={style.bold}>MERN stack</span>{" "}
            project developed in one week working in pair programming. We have
            used <span className={style.bold}>NodeJS</span> and{" "}
            <span className={style.bold}>Express</span> to manage the server
            side using <span className={style.bold}>Cloudinary</span> for image
            storage and management and
            <span className={style.bold}> MongoDB</span> for storing user data.
            Deployed with <span className={style.bold}>heroku</span>.
          </p>
          <br/>
          <Link className={style.link} to="/#projects">
          Back to projects
        </Link>
        </div>
      </div>
    </div>
  )
}

export default gmImg
