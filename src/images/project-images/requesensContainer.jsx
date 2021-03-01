import React from "react"
import style from "./image.module.scss"
import GitHubIcon from "@material-ui/icons/GitHub"
import { Link } from "gatsby"
import SEO from "../../components/seo"

function RequesensComponent() {
  return (
    <div className={style.container}>
      <SEO
        title="Swap it!"
        description="InnoVision Medical is a professional and innovative company specialized in producing medical devices and personal protective equipment."
      />
      <div className={style.title}>
        <h1>Requesens</h1>
        <h5>web portfolio site for Pau Requesens</h5>
        <div className={style.container_icons}>
          <div>
            <a
              className={style.site}
              href="https://paurequesens.com/"
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
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/requesens%2FMockups-1.png?alt=media&token=0052168b-7ff0-48aa-b2f9-ce777d6e6530"
          alt="requesens one"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/requesens%2FMockups.png?alt=media&token=1baf31e9-28b8-4695-a1e0-1915b5f0d34c"
          alt="requesens two"
        />
      </div>
      <div className={style.description}>
        <h1>About the project</h1>
        <p>
          Design and structure of a web portfolio site for Pau Requesens.
          Catalan artist based in Barcelona that paints using a fluorescent
          paont that glows under ultaviolet lights. Play with the UV switch to
          discover the essence of his works.
        </p>
        <br />
        <h1>Challenge and technologies</h1>
        <p>
          The main feature of this site whas the implementation of a UV light
          toggle to help the user see all paints reacting under a ultaviolet
          light. Developed with <span className={style.bold}>React Hooks</span>{" "}
          and <span className={style.bold}>GatsbyJS</span>, styled with{" "}
          <span className={style.bold}>SASS</span>.
        </p>
        <Link className={style.link} to="/#projects">
          Back to projects
        </Link>
      </div>
    </div>
  )
}

export default RequesensComponent
