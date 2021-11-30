import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Container from './Container';

const Navbar = () => {
  const links = [
    {
      title: 'Home',
    },
    {
      title: 'Blog',
    },
    {
      title: 'Works',
    },
    {
      title: 'About',
    },
  ];

  return (
    <nav className=''>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
            <StaticImage
              className='w-12'
              src='../../images/logo-light.png'
              alt='Logo'
            />
          </div>

          <div>
            <ul className='flex'>
              {links.map((link) => (
                <li className='ml-3 text-black font-semibold'>
                  <a href=''>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
