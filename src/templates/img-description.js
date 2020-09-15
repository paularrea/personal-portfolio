import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./gallery.template.module.scss"

const ImgDescription = props => {
  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <Img
            className={styles.img}
            fluid={
              props.data.markdownRemark.frontmatter.featuredImage
                .childImageSharp.fluid
            }
          />
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}
export default ImgDescription

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
