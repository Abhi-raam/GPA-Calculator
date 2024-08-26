import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ScoreMate.png'
function Footer() {

  return (
    <footer className="footer bg-[#ebf6fc] text-base-content p-10 border border-t-2 border-slate-400 mt-4">
      <aside>
        <img src={logo} className='w-[10rem]' alt="" />
        <p className='font-medium'>Copyright © 2024 - All right reserved </p>
      </aside>
      <div className='flex max-sm:justify-between justify-around w-full'>
        <nav>
          <h6 className="footer-title">Links</h6>
          <div className='flex flex-col gap-1'>
            <Link to="/" className="link link-hover">Home Page</Link>
            <Link to="/gpa" className="link link-hover">GPA Calculator</Link>
            <Link to="/cgpa" className="link link-hover">CGPA Calculator</Link>
            <Link to="/percentage" className="link link-hover">Percentage Calculator</Link>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <div className='flex flex-col gap-1'>
          <a href='https://www.instagram.com/rai__chu__' target='_blank' className="link link-hover">Instagram</a>
          <a href='https://abhiramsuresh.vercel.app/' target='_blank' className="link link-hover">Website</a>
          <a href='https://github.com/Abhi-raam' target='_blank' className="link link-hover">Github</a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
