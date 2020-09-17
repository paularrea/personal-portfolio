const { createFilePath } = require("gatsby-source-filesystem");
const mdxTemplate = require.resolve("./src/templates/img-description.js");

exports.onCreatePage = ({
  page,
  actions: { createPage, deletePage },
}) => {
  const { frontmatter } = page.context;
  if (frontmatter) {
    deletePage(page);
    createPage({
      ...page,
      component: mdxTemplate,
      context: {
        ...page.context,
        slug: page.path,
      },
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
      type Mdx implements Node {
          frontmatter: MdxFrontmatter!
      }
      type MdxFrontmatter {
          featuredImage: File @fileByRelativePath
      }
  `)
}
