import { graphql } from 'gatsby';
import * as React from 'react';
import BlogPostCard from '../components/blog/BlogPostCard';
import Header from '../components/home/Header';
import ProjectItem from '../components/projects/ProjectItem';
import CallToAction from '../components/shared/CallToAction';
import Layout from '../components/shared/Layout';
import WarningAlert from '../components/shared/WarningAlert';
import projectsJson from '../data/projects/projects.json';
import { reverseArray } from '../utils/reverse-array';

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;
  const { projects } = projectsJson;

  return (
    <Layout>
      <Header />
      <CallToAction
        className='my-10'
        icon='blog'
        text='I do write blog in my free time, kindly check it out '
        linkTo='/blog'
      />

      <section>
        <h2 className='font-display font-bold text-2xl dark:text-white'>
          Latest Posts
        </h2>

        {(!posts || !posts.length) && (
          <WarningAlert
            className='mt-6'
            header='Ups'
            content='There is currently no post'
          />
        )}

        <ul className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-6'>
          {posts.map(
            (post, idx) =>
              idx < 3 && <BlogPostCard key={post.id} post={post} />,
          )}
        </ul>
      </section>

      <CallToAction
        linkTo='/projects'
        className='my-10'
        icon='work'
        text='Check some of my works and personal projects '
      />

      <section className='mt-4 pb-12'>
        <h2 className='font-display font-bold text-2xl text-primary dark:text-white'>
          Latest Projects
        </h2>

        <ul className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6'>
          {reverseArray(projects).map(
            (project, idx) =>
              idx < 3 && (
                <li>
                  <ProjectItem
                    key={project.id}
                    project={project}
                    isInverse={idx % 2 == 1}
                    forShowcase={true}
                  />
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

export default IndexPage;
