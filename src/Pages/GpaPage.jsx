import React, { useEffect } from 'react'
import cgpaImg from '../assets/cgpa-removed.png'
import GradetoGPA from '../Components/GradetoGPA'
import { useLocation } from 'react-router-dom';

function GpaPage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
    return (
        <div className='pt-5 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center px-4'>
                <img src={cgpaImg} className='max-lg:w-[25rem]' alt="" />
                <div className='items-center flex max-sm:pb-5'>
                    <div className='space-y-2'>
                        <h1 className='text-2xl text-center text-slate-800 font-semibold'>College GPA Calculator</h1>
                        <p className='text-lg max-w-[30rem] text-justify'>
                            Keep track of your performance every semester! GPA is your average score in a 
                            particular semester, reflecting how well you've aced your courses. Enter your grades, and let us do the math!
                        </p>
                    </div>
                </div>
            </div>
            <div>
            <GradetoGPA /> 
            </div>
        </div>
    )
}

export default GpaPage