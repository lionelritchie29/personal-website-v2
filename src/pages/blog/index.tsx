import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/shared/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage: React.FC<any> = ({ data }) => {
  return (
    <Layout>
      <ul>
        {data.allMdx.nodes.map((d) => (
          <article key={d.id}>
            <div>
              <h2>{d.frontmatter.title}</h2>
              <div>Posted on {d.frontmatter.date}</div>
            </div>

            <div>
              <MDXRenderer>{d.body}</MDXRenderer>
            </div>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
