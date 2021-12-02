import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/shared/Layout';
import BlogPostCard from '../../components/blog/BlogPostCard';

const BlogPage: React.FC<any> = ({ data }) => {
  return (
    <Layout>
      <section className='py-6'>
        <div className='mb-10'>
          <BlogPostCard
            key={data.allMdx.nodes[0].id}
            post={data.allMdx.nodes[0]}
            isFirst={true}
          />
        </div>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-8 md:gap-y-12'>
          {data.allMdx.nodes.slice(1).map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </ul>
      </section>
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
          tags
        }
        id
        body
        excerpt
        slug
      }
    }
  }
`;

export default BlogPage;
