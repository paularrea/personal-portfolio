import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Masonry from "react-masonry-css"
import styles from "../../styles/gallery.module.scss"

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
}

const ProjectList = () => {
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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
      <div id='projects' className={styles.gallery_container}>
        <h1 className={styles.component_title}>Projects</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.my_masonry_grid}
          columnClassName={styles.my_masonry_grid_column}
        >
          {data.allMdx.edges.map(edge => {
            const featuredImage = edge.node.frontmatter.featuredImage
            
            return (
              <div>
                <div className={styles.project_info}>
                  <h1>{edge.node.frontmatter.title}</h1>
                  <Link to={`${edge.node.fields.slug}`}>
                    {featuredImage && (
                      <Img fluid={featuredImage.childImageSharp.fluid} />
                    )}
                  </Link>
                  <p>{edge.node.frontmatter.description}</p>
                  <p className={styles.tech}>{edge.node.frontmatter.tech}</p>
                  <Link
                    className={styles.underline}
                    to={`${edge.node.fields.slug}`}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            )
          })}
        </Masonry>
      </div>
  )
}

export default ProjectList