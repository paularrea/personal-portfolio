import React from "react"
import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({
  data: {
    mdx: { body },
  },
}) => {
  return (
    <Fade>
      <MDXRenderer>{body}</MDXRenderer>
    </Fade>
  )
}

export const query = graphql`
  query MDXBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
    }
  }
`
