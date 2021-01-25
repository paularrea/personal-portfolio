import React from "react"
import style from "./image.module.scss"
import GitHubIcon from "@material-ui/icons/GitHub"
import { Link } from "gatsby"
import SEO from "../../components/seo"

function gmImg() {
  return (
    <dir className={style.container}>
      <SEO
        title="Swap it!"
        description="InnoVision Medical is a professional and innovative company specialized in producing medical devices and personal protective equipment."
      />
      <h1 className={style.title}>Innovision Medical</h1>
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
      </div>
      <Link className={style.link} to="/#projects">
        Back to projects
      </Link>
      <div className={style.row}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/innovision%2Finnovision-1.png?alt=media&token=b712a450-9593-415b-afb5-090a1899efbb"
          alt="innovision project one"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/innovision%2Finnovision-2.png?alt=media&token=d50482ab-94a5-4d1d-9485-f98cbc3d18b5"
          alt="innvision project two"
        />
      </div>
    
    </dir>
  )
}

export default gmImg
