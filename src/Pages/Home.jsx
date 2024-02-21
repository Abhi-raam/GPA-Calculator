import React from 'react'
import home from '../assets/home.jpg'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center'>
        <div className=' flex justify-center'>
            <img src={home} className='w-[70%] ' alt="" />
        </div>
        <div className=' space-y-5 place-self-center px-4'>
            <h2 className='text-2xl md:text-4xl lg:text-6xl text-center font-bold text-violet-600'>Get Your Results in your Fingertips</h2>
            <p className='text-justify'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                 make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.
            </p>
            <Link to='/home' className='btn bg-violet-600 hover:bg-violet-700 text-white'>get started</Link>
        </div>
    </div>
  )
}

export default Home