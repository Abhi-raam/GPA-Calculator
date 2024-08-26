import React from 'react'
import home from '../assets/home.png'


function Home() {

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center place-content-center pb-5 min-h-[30vh]'>
                <div className=' flex justify-center'>
                    <img src={home} className='object-contain max-lg:w-[25rem]' alt="" />
                </div>
                <div className=' flex flex-col  items-center place-self-center space-y-5  px-4'>
                    <h2 className='text-2xl md:text-4xl lg:text-5xl text-center font-bold text-slate-800'>Get Your Results in your Fingertips</h2>
                    <p className=' max-w-[30rem] text-justify'>
                        Are you an Anna University B.Tech/BE student looking to stay on top of your academic game? 
                        Our platform is here to make your life easier by helping you calculate your GPA, CGPA, and Percentage
                         with just a few clicks!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home