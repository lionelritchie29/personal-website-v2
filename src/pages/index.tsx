import { graphql, Link } from 'gatsby';
import * as React from 'react';
import BlogPostCard from '../components/blog/BlogPostCard';
import Header from '../components/home/Header';
import ProjectItem from '../components/projects/ProjectItem';
import CallToAction from '../components/shared/CallToAction';
import Layout from '../components/shared/Layout';
import projectsJson from '../../data/projects/projects.json';
import { reverseArray } from '../utils/reverse-array';
import InfoAlert from '../components/shared/InfoAlert';

const IndexPage = ({ data, location }) => {
  const posts = data.allMdx.nodes;
  const { projects } = projectsJson;

  return (
    <Layout location={location}>
      <Header />
      <CallToAction className='my-10' icon='blog'>
        I do write blog in my free time, kindly check it out{' '}
        <Link className='underline' to='/blog'>
          here
        </Link>
      </CallToAction>

      <section>
        <h2 className='font-display font-bold text-2xl dark:text-white'>
          Latest Posts
        </h2>

        {(!posts || !posts.length) && (
          <InfoAlert
            className='mt-6'
            header='Coming soon 🚀'
            content='There is currently no post'
          />
        )}

        <ul className='grid grid-cols-1 gap-8 mt-6'>
          {posts.map(
            (post, idx) =>
              idx < 3 && (
                <BlogPostCard isFirst={true} key={post.id} post={post} />
              ),
          )}
        </ul>
      </section>

      <CallToAction className='my-10' icon='work'>
        Check some of my works and personal projects{' '}
        <Link className='underline' to='/projects'>
          here
        </Link>
      </CallToAction>

      <section className='mt-4 pb-6'>
        <h2 className='font-display font-bold text-2xl text-primary dark:text-white'>
          Latest Projects
        </h2>

        <ul className='mt-6 grid grid-cols-1 gap-6'>
          {reverseArray(projects).map(
            (project, idx) =>
              idx < 3 && (
                <li key={project.id}>
                  <ProjectItem project={project} />
                </li>
              ),
          )}
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
          date
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

export default IndexPage;
