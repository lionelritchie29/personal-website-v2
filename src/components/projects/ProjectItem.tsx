import { ExternalLinkIcon } from '@heroicons/react/solid';
import React from 'react';
import { ProjectItem as ProjectItemModel } from '../../models/project-item';

interface Props {
  className?: string;
  isInverse?: boolean;
  project: ProjectItemModel;
}

const ProjectItem: React.FC<Props> = ({ className, isInverse, project }) => {
  return (
    <div
      className={`${
        isInverse ? 'md:flex flex-row-reverse' : 'md:flex'
      } ${className}`}>
      <img
        className='w-full md:w-1/3 h-80 object-cover shadow-md rounded-lg'
        src={project.imageUrl}
        alt={project.name}
      />

      <div className={`w-full md:w-2/3 ${isInverse ? 'md:mr-8' : 'md:ml-8'}`}>
        <a
          className='block font-display mt-3 md:mt-0 text-xl text-primary dark:text-primary-dark font-bold hover:underline'
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
