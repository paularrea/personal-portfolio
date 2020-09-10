import React from "react"
import Layout from "../components/Layout/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
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
    <div>
      <Layout>
        <h1>Contact</h1>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <div>
              <Link to={`/contact/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.description}</p>
              </Link>
            </div>
          )
        })}
      </Layout>
    </div>
  )
}

export default Contact
