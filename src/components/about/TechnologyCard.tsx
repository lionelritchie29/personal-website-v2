import React from 'react';
import { Technology } from '../../models/technology';

interface Props {
  tech: Technology;
}

const TechnologyCard: React.FC<Props> = ({ tech }) => {
  return (
    <div className=''>
      <div className='h-32 relative rounded border border-gray-200 dark:border-gray-700 dark:shadow'>
        <div className='p-2 flex items-center justify-center h-full'>
          <img
            title={`${tech.type} - ${tech.name}`}
            className='w-full -mt-5'
            src={tech.image}
            alt={tech.name}
          />
        </div>
        <div className='absolute bottom-0 left-0 w-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'>
          <h4 className='text-center'>{tech.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
