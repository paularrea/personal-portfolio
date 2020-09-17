import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout/layout";

export default ({
  data: {
    mdx: { body },
  },
}) => {
  return (
    <Layout>
      <MDXRenderer>{body}</MDXRenderer>
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