import { ExternalLinkIcon } from '@heroicons/react/solid';
import React from 'react';
import { ProjectItem as ProjectItemModel } from '../../models/project-item';

interface Props {
  className?: string;
  isInverse?: boolean;
  project: ProjectItemModel;
  forShowcase?: boolean;
}

const ProjectItem: React.FC<Props> = ({ className, project }) => {
  return (
    <div
      className={`md:flex border border-gray-200 dark:border-gray-700 rounded-lg p-3 dark:shadow-sm ${className}`}>
      <img
        className='w-full h-80 object-cover border border-gray-200 dark:border-gray-700 rounded-lg md:w-1/3'
        src={project.imageUrl}
        alt={project.name}
      />

      <div className='w-full md:w-2/3 md:ml-10'>
        <a
          className='block font-display mt-3 text-xl text-primary dark:text-primary-dark font-bold hover:underline md:mt-0'
          href={project.link}
          target='_blank  '>
          {project.name} <ExternalLinkIcon className='inline w-5 h-5' />
        </a>
        <p className='mt-1 text-gray-600 dark:text-gray-200'>{project.desc}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
