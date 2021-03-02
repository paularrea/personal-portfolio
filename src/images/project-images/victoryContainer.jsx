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
          Static website for a Wholesale supplier who is based on B2B
          business models on the Swiss market.
        </p>
        <br />
        <h1>Challenge and technologies</h1>
        <p>
          Implementation of the page layouts of a static site using{" "}
          <span className={style.bold}>GatsbyJS</span> and styled with{" "}
          <span className={style.bold}>SASS</span>. Working closely with the IT team and the UX/UI designer we worked with{" "}
          <span className={style.bold}>Adobe XD </span>
          for the design and creation of a prototype of the user experience for
          the site which has helped me to develop the project in a much faster, more comfortable and structured way.
        </p>
        <Link className={style.link} to="/#projects">
          Back to projects
        </Link>
      </div>
    </div>
  )
}

export default VictoryComponent
