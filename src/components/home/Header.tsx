import { Link } from 'gatsby';
import React from 'react';
import OutlineButton from '../shared/OutlineButton';

const Header: React.FC = () => {
  return (
    <section className='pt-10 px-3 md:px-0'>
      <h1 className='font-bold  text-4xl font-display text-primary dark:text-primary-dark'>
        Hi there, <br /> I'm Lionel
      </h1>

      <p className='mt-5 dark:text-white'>
        Currently a <b>computer science student</b> and responsible as a{' '}
        <b>Research and Development</b> for maintaing web-based application
        system at <b>Software Laboratory Center</b> Binus University. I also{' '}
        <b>teach</b> various computer-science related course such as Data
        Structure, Database, Operating System, etc.
      </p>

      <p className='mt-5 dark:text-white'>
        I dedicate this web to write my though and document my progress while
        learning web development, as well to showcase my works.
      </p>

      <div className='mt-6'>
        <Link to='/about'>
          <OutlineButton text='Contact Me' />
        </Link>
      </div>
    </section>
  );
};

export default Header;
