import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"
import styles from "../../styles/gallery.module.scss"
import SEO from "../../components/seo"

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const projects = (
    <>
      {data.allMdx.edges.map(edge => {
        const featuredImage = edge.node.frontmatter.featuredImage
        return (
          <Col xs={12} md={6}>
            <Link to={`${edge.node.fields.slug}`}>
              <div className={styles.project_info}>
                <div className={styles.title}>
                  <h1>{edge.node.frontmatter.title}</h1>
                </div>
                <Link to={`${edge.node.fields.slug}`}>
                  {featuredImage && (
                    <Img
                      className={styles.img}
                      fluid={featuredImage.childImageSharp.fluid}
                    />
                  )}
                </Link>
              </div>
            </Link>
          </Col>
        )
      })}
    </>
  )

  return (
    <div id="projects" className={styles.gallery_container}>
            <SEO title="Projects Pau Larrea" description="List of projects I've been involved with or I develop myself. Check them out!"/>
      <h1 className={styles.component_title}>Work</h1>
      <Container>
        <Row>{projects}</Row>
      </Container>
    </div>
  )
}

export default Projects
