import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import InstagramIcon from "@material-ui/icons/Instagram"
// import MailOutlineIcon from "@material-ui/icons/MailOutline"
// import LinkedInIcon from "@material-ui/icons/LinkedIn"

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
      <div
        className={footerStyles.container}
      >
        <div
          className={footerStyles.content}
        >
          © {new Date().getFullYear()}, by
          {` `}
          {data.site.siteMetadata.author}
          <div className={footerStyles.icons}>
            <div>
              <a href="mailto:aperacaularuiz@gmail.com" target="blank">
                {/* <MailOutlineIcon /> */}Mail
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/aperacaula" target="blank">
                {/* <InstagramIcon /> */}Insta
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/alex-peracaula-9b4b1b11a/"
                target="blank"
              >
                {/* <LinkedInIcon /> */}linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
