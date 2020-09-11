import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ImgDescription = props => {
  return (
    <Layout>
      <div
        style={{
          width: "90vw",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "60vw" }}>
          <Img
            style={{ maxHeight: "90vh" }}
            fluid={
              props.data.markdownRemark.frontmatter.featuredImage
                .childImageSharp.fluid
            }
          />
        </div>
        <div
          style={{ width: "30vw", margin: "2rem" }}
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
      {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.description}</p> */}
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
