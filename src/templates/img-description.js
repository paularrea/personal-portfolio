import React from "react";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade"
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout/layout";

export default ({
  data: {
    mdx: { body },
  },
}) => {
  return (
    <Layout>
      <Fade>
      <MDXRenderer>{body}</MDXRenderer>
      </Fade>
    </Layout>
  );
};

export const query = graphql`
  query MDXBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
    }
  }
`;