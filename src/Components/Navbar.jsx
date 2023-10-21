import React from 'react'
import { FaGithub } from 'react-icons/fa'
function Navbar() {
    return (
        <div>
            <div className='shadow-2xl flex justify-between  p-3'>
                <h1 className='font-semibold text-xl md:text-2xl'>ScoreMate</h1>
                <a href="https://abhiramsuresh.vercel.app/">
                    <FaGithub className='text-3xl hover:scale-105 transition ' />
                </a>
            </div>
        </div>
    )
}

export default Navbar