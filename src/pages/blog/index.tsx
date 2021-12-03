import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/shared/Layout';
import BlogPostCard from '../../components/blog/BlogPostCard';
import WarningAlert from '../../components/shared/WarningAlert';

const BlogPage: React.FC<any> = ({ data }) => {
  const posts = data.allMdx.nodes;

  if (!posts || !posts.length)
    return (
      <Layout>
        <WarningAlert
          className='mt-6'
          header='Ups'
          content='There is no post'
        />
      </Layout>
    );

  return (
    <Layout>
      <section className='py-10'>
        <div className='mb-10'>
          <BlogPostCard key={posts[0].id} post={posts[0]} isFirst={true} />
        </div>

        {posts.length > 1 && (
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-8 md:gap-y-12'>
            {posts.slice(1).map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </ul>
        )}
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
          hero_image_alt
          hero_image_credit_text
          hero_image_credit_link
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
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
