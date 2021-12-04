import React from 'react';
import ProjectItem from '../components/projects/ProjectItem';
import Layout from '../components/shared/Layout';
import projectsJson from '../data/projects/projects.json';
import { reverseArray } from '../utils/reverse-array';

const ProjectsPage = ({ location }) => {
  const { projects } = projectsJson;

  return (
    <Layout location={location}>
      <section className='py-10'>
        <h1 className='font-display text-4xl text-primary dark:text-primary-dark font-bold'>
          ~ Projects
        </h1>

        <ul className='mt-6 grid grid-cols-1 gap-6'>
          {reverseArray(projects).map((project, idx) => (
            <li key={project.id}>
              <ProjectItem project={project} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
