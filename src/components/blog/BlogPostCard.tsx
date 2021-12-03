import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { BlogPost } from '../../models/blog-post';
import TagBadge from './TagBadge';

interface Props {
  post: BlogPost;
  isFirst?: boolean;
}

const BlogPostCard: React.FC<Props> = ({ post, isFirst }) => {
  const heroImage = getImage(post.frontmatter.hero_image);

  return (
    <article className={isFirst && 'md:flex'}>
      <div className={isFirst ? `md:w-3/5` : 'w-full'}>
        <GatsbyImage
          className='w-full rounded-lg h-64'
          image={heroImage}
          alt={post.frontmatter.hero_image_alt}
        />
      </div>

      <div className={isFirst ? `md:w-2/5 md:ml-6` : 'w-full'}>
        <ul className={isFirst ? 'md:mt-0 mt-2' : `mt-2`}>
          {post.frontmatter.tags.map((tag, idx) => (
            <TagBadge
              className={idx !== post.frontmatter.tags.length && 'mr-2'}
              tag={tag}
            />
          ))}
        </ul>

        <h1
          className={`mt-2 font-bold text-primary dark:text-primary-dark font-display ${
            isFirst ? 'text-2xl' : 'text-xl'
          }`}>
          {post.frontmatter.title}
        </h1>
        <p className='text-gray-700 dark:text-gray-300 mt-2'>
          {post.excerpt}
          <Link
            className='dark:hover:text-primary-dark hover:text-primary'
            to={`/blog/${post.slug}`}>
            <ArrowSmRightIcon className='w-5 h-5 inline' />
          </Link>
        </p>

        <p className='block mt-3 text-gray-700 dark:text-gray-300'>
          Posted on {post.frontmatter.date}
        </p>
      </div>
    </article>
  );
};

export default BlogPostCard;
