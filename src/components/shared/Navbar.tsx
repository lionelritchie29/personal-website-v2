import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import Container from './Container';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { ThemeContext } from '../../providers/ThemeProvider';

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
                <li className='ml-3 text-black font-semibold dark:text-white'>
                  <a href=''>{link.title}</a>
                </li>
              ))}

              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <label className='block ml-3 dark:text-white'>
                    <input
                      type='checkbox'
                      onChange={(e) => {
                        setTheme(e.target.checked ? 'dark' : 'light');
                        toggleTheme(e.target.checked ? 'dark' : 'light');
                      }}
                      checked={theme === 'dark'}
                    />{' '}
                    {theme === 'dark' ? 'Dark' : 'Light'}
                  </label>
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
