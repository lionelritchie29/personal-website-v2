import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext, useRef } from 'react';
import Container from './Container';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { ThemeContext } from '../../providers/ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import Headroom from 'react-headroom';
import { Link } from 'gatsby';

const Navbar = ({ location }) => {
  const [theme, setTheme] = useContext(ThemeContext);
  const nav = useRef(null);

  const links = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
    {
      title: 'Projects',
      path: '/projects',
    },
    {
      title: 'About',
      path: '/about',
    },
  ];

  return (
    <Headroom
      onPin={() =>
        !nav.current.classList.contains('shadow-md') &&
        nav.current.classList.add('shadow-md')
      }
      onUnfix={() =>
        nav.current.classList.contains('shadow-md') &&
        nav.current.classList.remove('shadow-md')
      }>
      <nav ref={nav} className='dark:bg-gray-800 bg-white'>
        <Container>
          <div className='flex justify-between items-center'>
            <div>
              {theme === 'light' ? (
                <StaticImage
                  className='w-12'
                  src='../../images/logo-light.png'
                  alt='Logo Light'
                />
              ) : (
                <StaticImage
                  className='w-12'
                  src='../../images/logo-dark.png'
                  alt='Logo Dark'
                />
              )}
            </div>

            <div>
              <ul className='flex'>
                {links.map((link) => (
                  <li
                    key={link.title}
                    className={`${
                      location.pathname === link.path ? 'font-bold' : ''
                    } ml-2 md:ml-3 text-black dark:text-white`}>
                    <Link to={link.path}>{link.title}</Link>
                  </li>
                ))}

                <ThemeToggler>
                  {({ theme, toggleTheme }) => (
                    <button
                      className='ml-1 md:ml-2 text-blue-500 dark:text-yellow-300 px-2'
                      onClick={() => {
                        setTheme(theme === 'light' ? 'dark' : 'light');
                        toggleTheme(theme === 'light' ? 'dark' : 'light');
                      }}>
                      {theme === 'light' ? (
                        <MoonIcon className='w-5 h-5' />
                      ) : (
                        <SunIcon className='w-5 h-5' />
                      )}
                    </button>
                  )}
                </ThemeToggler>
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </Headroom>
  );
};

export default Navbar;
