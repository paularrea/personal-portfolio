import React from "react"
import Layout from "../components/Layout/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Masonry from "react-masonry-css"
import styles from "../styles/gallery.module.scss"

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
}

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              web
              github
              tech
              description
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields{
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
          {data.allMdx.edges.map(edge => {
            const featuredImage = edge.node.frontmatter.featuredImage
            return (
              <div>
                <Link to={`${edge.node.fields.slug}`}>
                  {featuredImage && (
                    <Img fluid={featuredImage.childImageSharp.fluid} />
                  )}
                </Link>
                <div>
                  <h1>{edge.node.frontmatter.title}</h1>
                  <p>{edge.node.frontmatter.description}</p>
                  <p>{edge.node.frontmatter.tech}</p>
                </div>
                <Link
                  className={styles.normal_link}
                  to={`${edge.node.fields.slug}`}
                >
                  Read more
                </Link>
              </div>
            )
          })}
        </Masonry>
      </div>
    </Layout>
  )
}

export default Projects