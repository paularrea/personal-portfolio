import React from "react"
import style from "./image.module.scss"
import GitHubIcon from "@material-ui/icons/GitHub"
import {Link} from 'gatsby'

function gmImg() {
  return (
    <dir className={style.container}>
      <h1 className={style.title}>
        Green Move app
      </h1>
      <div className={style.container_icons}>
        <div>
          <a className={style.site} href="https://greenmove-app.herokuapp.com/" target="blank">
            Visit site
          </a>
        </div>
        <div>
          <a
            href="https://github.com/paularrea/GreenMove-app"
            target="blank"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className={style.description}>
        <h1>About the project</h1>
        <p>
          Green Move app is a platform to promote environmental and social
          projects. You can support actions that are happening in your city,
          join them or create your own movement and involve people. Always with
          the intention of changing the world for the better.
        </p>
        <h1>Challenge and technologies</h1>
        <p>
          This was my first <span className={style.bold}>MERN stack</span> project developed in one week working in
          pair programming. We have used <span className={style.bold}>NodeJS</span> and <span className={style.bold}>Express</span> to manage
          the server side using <span className={style.bold}>Cloudinary</span> for image storage and management and 
          <span className={style.bold}> MongoDB</span> for storing user data. Deployed with <span className={style.bold}>heroku</span>.
        </p>
      </div>
      <div className={style.row}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/greenmove%2Fgreen-move1.png?alt=media&token=2a134d8c-97ba-4df6-a827-2ad4b28d386d"
          alt="greenmove project one"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/greenmove%2Fgreen-move2.png?alt=media&token=107f883e-a04c-48b8-9425-abb71223a33b"
          alt="greenmove project two"
        />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/greenmove%2Fgreen-move3.png?alt=media&token=107f883e-a04c-48b8-9425-abb71223a33b"
        alt="greenmove project three"
        />
        </div>
        <Link className={style.link} to='/#projects'>Back to projects</Link>
    </dir>
  )
}

export default gmImg
