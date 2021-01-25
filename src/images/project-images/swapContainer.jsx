import React from "react"
import style from "./image.module.scss"
import GitHubIcon from "@material-ui/icons/GitHub"
import {Link} from 'gatsby'
import SEO from "../../components/seo"

function gmImg() {
  return (
    <dir className={style.container}>
        <SEO
        title="Swap it!"
        description="Swap it is a social platform designed to post and exchange handmade products."
      />
      <h1 className={style.title}>
        Swap it!
      </h1>
      <div className={style.container_icons}>
        <div>
          <a className={style.site} href="https://swap-it-app.herokuapp.com/" target="blank">
            Visit site
          </a>
        </div>
        <div>
          <a
            href="https://github.com/paularrea/swapit"
            target="blank"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className={style.description}>
        <h1>About the project</h1>
        <p>
          Swap it is a social platform designed to post and exchange handmade
          products between people, using photographies, drawings, decoration
          items, etc., as currency.
        </p>
        <br />
        <h1>Challenge and technologies</h1>
        <p>
          The platform consists of a responsive <span className={style.bold}>MERN stack</span> web application made
          to put into practice acquired knowledge such as <span className={style.bold}>React Hooks</span>,
          implementing libraries such as <span className={style.bold}>Bootstrap, socket.io</span> and <span className={style.bold}> material UI </span>
          components for the frontend. We have used <span className={style.bold}>NodeJS</span> and <span className={style.bold}>Express</span> to manage
          the server side using <span className={style.bold}>Cloudinary</span> for image storage and management and
          <span className={style.bold}> MongoDB</span> for storing user data. Deployed with <span className={style.bold}>heroku</span>. pair programming.
        </p>
      </div>
      <Link className={style.link} to="/#projects">
        Back to projects
      </Link>
      <div className={style.row}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/swapit%2Fsw1.png?alt=media&token=2117ea13-44cd-4bdb-945d-affc67fa0cc5"
          alt="swapit project one"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/swapit%2Fsw2.png?alt=media&token=c2ffa11a-560e-40a7-9fd7-59b876438350"
          alt="swapit project two"
        />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/swapit%2Fsw3.png?alt=media&token=27405190-91d7-40d2-9304-7303ce6ff167"
        alt="swapit project three"
        />
        </div>
 
    </dir>
  )
}

export default gmImg
