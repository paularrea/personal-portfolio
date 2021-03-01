import React from "react"
import style from "./image.module.scss"
import GitHubIcon from "@material-ui/icons/GitHub"
import { Link } from "gatsby"
import SEO from "../../components/seo"

function innoComponent() {
  return (
    <div className={style.container}>
      <SEO
        title="Swap it!"
        description="InnoVision Medical is a professional and innovative company specialized in producing medical devices and personal protective equipment."
      />
      <div className={style.title}>
        <h1>Innovision Medical</h1>
        <h5>Platform to promote environmental and social projects</h5>
        <div className={style.container_icons}>
          <div>
            <a
              className={style.site}
              href="https://www.innovision-medical.com/"
              target="blank"
            >
              Visit site
            </a>
          </div>
          <div>
            <a href="https://github.com/paularrea/innovision" target="blank">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/innovision%2FMockups.png?alt=media&token=ed90fe3e-ec57-49bc-b7a2-a1c79a9f23eb"
          alt="innovision project one"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/innovision%2FMockups-1.png?alt=media&token=bc67205d-0fed-43a9-b7d3-fa844751b876"
          alt="innvision project two"
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

export default innoComponent
