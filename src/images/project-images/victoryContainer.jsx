import React from "react"
import style from "./image.module.scss"
import GitHubIcon from "@material-ui/icons/GitHub"
import { Link } from "gatsby"
import SEO from "../../components/seo"

function VictoryComponent() {
  return (
    <div className={style.container}>
      <SEO
        title="Swap it!"
        description="InnoVision Medical is a professional and innovative company specialized in producing medical devices and personal protective equipment."
      />
      <div className={style.title}>
        <h1>Victory Switzerland</h1>
        <h5>Layouts and structure of the site</h5>
        <div className={style.container_icons}>
          <div>
            <a
              className={style.site}
              href="https://victory-website.netlify.app/"
              target="blank"
            >
              Visit site
            </a>
          </div>
          <div>
            <a href="https://github.com/paularrea/victory-web" target="blank">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/victory%2FMockups.png?alt=media&token=7b68e122-73db-43c6-8997-41ad258596ce"
          alt="victory project one"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/victory%2FMockups-2.png?alt=media&token=2960cb57-3b85-4114-b136-8485ee889667"
          alt="victory project two"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/victory%2FMockups-1.png?alt=media&token=baa30a50-0108-4dd3-8ec9-42d13508a810"
          alt="victory project three"
        />
      </div>
      <div className={style.description}>
        <h1>About the project</h1>
        <p>
          InnoVision Medical is a professional and innovative company
          specialized in producing medical devices and personal protective
          equipment.
        </p>
        <br />
        <h1>Challenge and technologies</h1>
        <p>
          Design and structure of the Innovision Medical website. The website
          design is clear and tidy, focusing on Innovision key information and
          principal products. Working closely with the Innovision team adding
          additional sections to improving the website. Developed with{" "}
          <span className={style.bold}>React Hooks</span> styled with{" "}
          <span className={style.bold}>CSS</span> and{" "}
          <span className={style.bold}>Bootstrap</span>.
        </p>
        <Link className={style.link} to="/#projects">
          Back to projects
        </Link>
      </div>
    </div>
  )
}

export default VictoryComponent
