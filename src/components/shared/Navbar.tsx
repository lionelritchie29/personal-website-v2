import React from 'react';
import LogoLightImg from '../../images/logo-light.png';

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
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <div>
            <img className='w-12' src={LogoLightImg} alt='Logo' />
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
      </div>
    </nav>
  );
};

export default Navbar;
