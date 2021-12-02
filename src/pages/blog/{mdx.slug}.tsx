import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/shared/Layout';

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <p>{data.mdx.frontmatter.title}</p>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
