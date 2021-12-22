import React from 'react';

interface Props {
  header: string;
  content: string;
  className?: string;
}

const InfoAlert: React.FC<Props> = ({ header, content, className }) => {
  return (
    <div className={`rounded-md bg-blue-50 p-4 ${className}`}>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-blue-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
        <div className='ml-3'>
          <h3 className='text-sm font-medium text-blue-800'>{header}</h3>
          <div className='mt-2 text-sm text-blue-700'>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAlert;
