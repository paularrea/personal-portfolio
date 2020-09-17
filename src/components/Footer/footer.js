import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <div className={footerStyles.container}>
        <div className={footerStyles.content}>
          <div>
          © {new Date().getFullYear()},<br/> by
          {` `}
          {data.site.siteMetadata.author}
          </div>
          <div className={footerStyles.icons}>
            <div>
              <a
                className={footerStyles.normal_link}
                href="https://github.com/paularrea"
                target="blank"
              >
                <GitHubIcon />
              </a>
            </div>
            <div>
              <a
                className={footerStyles.normal_link}
                href="https://www.instagram.com/paularrea"
                target="blank"
              >
                <InstagramIcon />
              </a>
            </div>
            <div>
              <a
                className={footerStyles.normal_link}
                href="https://www.linkedin.com/in/pau-larrea/"
                target="blank"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
