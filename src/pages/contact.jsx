import React from "react"
import Layout from "../components/Layout/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Masonry from "react-masonry-css"
import styles from "../styles/gallery.module.scss"

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={styles.gallery_container}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.my_masonry_grid}
          columnClassName={styles.my_masonry_grid_column}
        >
          {data.allMarkdownRemark.edges.map(edge => {
            const featuredImage = edge.node.frontmatter.featuredImage
            return (
              <div>
                <Link to={`/contact/${edge.node.fields.slug}`}>
                  {featuredImage && (
                    <Img fluid={featuredImage.childImageSharp.fluid} />
                  )}
                </Link>
              </div>
            )
          })}
        </Masonry>
    </div>
      </Layout>
  )
}

export default Contact
