import React, { useState, useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import Installbtn from './Installbtn';
import { Link } from 'react-router-dom';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className=''>
            <div className="navbar  shadow-xl">
                <div className="navbar-start  w-full">
                    <Link to="/" className="btn btn-ghost text-xl">ScoreMate</Link>
                </div>
                <div className="dropdown dropdown-end" ref={dropdownRef}>
                    <button
                        tabIndex={0}
                        role="button"
                        className=" m-1 lg:hidden"
                        onClick={toggleDropdown}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    {dropdownOpen && (
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] font-medium mt-3 w-48 p-2 shadow">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/gpa'>GPA Calculator</Link></li>
                            <li><Link to='/cgpa'>CGPA Calculator</Link></li>
                            <li><Link to='/percentage'>Percentage Calculator</Link></li>
                        </ul>
                    )}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-medium px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/gpa'>GPA Calculator</Link></li>
                        <li><Link to='/cgpa'>CGPA Calculator</Link></li>
                        <li><Link to='/percentage'>Percentage Calculator</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
