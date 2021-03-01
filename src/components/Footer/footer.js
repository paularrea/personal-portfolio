import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"
import TransitionLink from "gatsby-plugin-transition-link"

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
          <div className={footerStyles.name}>
            <h2>Pau Larrea.</h2>
            <div className={footerStyles.copyright}>
              <p>
                © {new Date().getFullYear()}, by
                {` `}
                {data.site.siteMetadata.author}.<br /> All Rights Reserved.
              </p>
            </div>
          </div>
          <div className={footerStyles.contentOne}>
            <div>
              <h3>Explore</h3>
              <ul className={footerStyles.navList}>
                <li>
                  <TransitionLink
                    entry={{
                      delay: 0.3,
                    }}
                    to="/#home"
                  >
                    Home
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink
                    entry={{
                      delay: 0.3,
                    }}
                    to="/#projects"
                  >
                    Projects
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink
                    entry={{
                      delay: 0.3,
                    }}
                    to="/#about"
                  >
                    About
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink
                    entry={{
                      delay: 0.3,
                    }}
                    to="/#contact"
                  >
                    Contact
                  </TransitionLink>
                </li>
              </ul>
            </div>
            <div>
              <h3>Contact</h3>
              <p>Gmail</p>
              <p>+34 638 30 54 14</p>
            </div>
            <div>
              <div className={footerStyles.media}>
                <h3>Media</h3>
                <a
                  className={footerStyles.normal_link}
                  href="https://github.com/paularrea"
                  target="blank"
                >
                  Github
                </a>
                <a
                  className={footerStyles.normal_link}
                  href="https://www.linkedin.com/in/pau-larrea/"
                  target="blank"
                >
                  LinkedIn
                </a>
                <a
                  className={footerStyles.normal_link}
                  href="https://www.instagram.com/paularrea/?hl=es"
                  target="blank"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
