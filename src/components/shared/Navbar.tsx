import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import Container from './Container';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { ThemeContext } from '../../providers/ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeContext);

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
                <li className='ml-2 md:ml-3 text-black font-semibold dark:text-white'>
                  <a href=''>{link.title}</a>
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
  );
};

export default Navbar;
