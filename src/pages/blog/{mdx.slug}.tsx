import { graphql, navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/shared/Layout';
import { BlogPost } from '../../models/blog-post';
import { GlobeAltIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import TagBadge from '../../components/blog/TagBadge';
import Markdown from '../../components/shared/Markdown';

const BlogPostPage = ({ data }) => {
  const post: BlogPost = data.mdx;
  const heroImage = getImage(post.frontmatter.hero_image);

  return (
    <Layout>
      <section className='py-6'>
        <button
          onClick={() => navigate(-1)}
          className='hover:underline flex items-center dark:text-gray-300 text-gray-400'>
          <ArrowLeftIcon className='w-5 h-5' />
          <span className='inline-block ml-1'>Back</span>
        </button>

        <div className='flex mt-6'>
          {post.frontmatter.tags.map((tag, idx) => (
            <TagBadge
              key={idx}
              tag={tag}
              className={idx !== post.frontmatter.tags.length - 1 && 'mr-1'}
            />
          ))}
        </div>

        <h1 className='mt-2 text-3xl font-display text-primary dark:text-primary-dark font-bold'>
          {post.frontmatter.title}
        </h1>

        <div className='mt-1 text-gray-400 dark:text-gray-300'>
          <div className='flex items-center mt-1'>
            <div className='inline-block'>{post.frontmatter.date}</div>
            <GlobeAltIcon className='inline-block w-5 h-5 mx-2' />
            <div className='inline-block'>{post.timeToRead} min read</div>
          </div>
        </div>

        <div className='mt-8'>
          <GatsbyImage
            className='w-full rounded-lg'
            image={heroImage}
            alt={post.frontmatter.hero_image_alt}
          />

          <div className='mt-4 text-justify dark:text-gray-300'>
            <Markdown body={post.body} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
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
      timeToRead
    }
  }
`;

export default BlogPostPage;
