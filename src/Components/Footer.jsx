import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa'

function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (isHome) {
    return null; // Don't render footer on the Home page
  }

  return (
    <footer>
        <div className='fixed bottom-0 w-full bg-gray-200 '> 
            <div className='flex justify-evenly  p-3 text-black'>
                <div><FaGithub className='text-3xl hover:scale-105 transition ' /></div>
                <div><FaGithub className='text-3xl hover:scale-105 transition ' /></div>
                <div><FaGithub className='text-3xl hover:scale-105 transition ' /></div>
                <div><FaGithub className='text-3xl hover:scale-105 transition ' /></div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
