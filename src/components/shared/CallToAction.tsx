import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { AnnotationIcon, BriefcaseIcon } from '@heroicons/react/solid';
import { Link } from 'gatsby';

interface Props {
  text: string;
  icon: 'blog' | 'work';
  className?: string;
  linkTo: string;
}

const CallToAction: React.FC<Props> = ({ text, icon, className, linkTo }) => {
  const renderIcon =
    icon === 'blog' ? (
      <AnnotationIcon className='w-24 text-primary-lighter dark:text-gray-700' />
    ) : (
      <BriefcaseIcon className='w-24 text-primary-lighter dark:text-gray-700' />
    );

  return (
    <section
      className={`w-full border-t border-b px-4 py-8 border-gray-300  dark:border-gray-600 flex ${className}`}>
      {renderIcon}
      <div className='w-full md:flex md:justify-center md:items-center p-2 bg-primary-lighter text-primary dark:bg-gray-700 dark:text-gray-200 rounded ml-2'>
        {text}{' '}
        <Link className='underline' to={linkTo}>
          here
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
