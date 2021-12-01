import React from 'react';
import OutlineButton from '../shared/OutlineButton';

const Header: React.FC = () => {
  return (
    <section className='pt-6 px-3 md:px-0'>
      <h1 className='font-bold text-4xl font-display text-primary dark:text-primary-dark'>
        Hi there, <br /> I'm Lionel
      </h1>

      <p className='mt-4 dark:text-white'>
        Currently a <b>computer science student</b> and <b>teaching</b> various
        computer-science related course, also responsible as a{' '}
        <b>Research and Development </b>
        for maintaining web-based application system at Software Laboratory
        Center.
      </p>

      <p className='mt-3 dark:text-white'>
        I dedicate this web to write my though and document my progress while
        learning web development, as well to showcase my works.
      </p>

      <div className='mt-4'>
        <OutlineButton text='Contact Me' />
      </div>
    </section>
  );
};

export default Header;
