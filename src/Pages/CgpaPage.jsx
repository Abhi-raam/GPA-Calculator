import React, { useEffect } from 'react'
import gpaImg from '../assets/gpa-removed.png'
import GPAtoCGPA from '../Components/GPAtoCGPA'
import { useLocation } from 'react-router-dom';

function CgpaPage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
    return (
        <div className='pt-5 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center px-4'>
                <img src={gpaImg} className='max-lg:w-[25rem]' alt="" />
                <div className='items-center flex max-sm:pb-5'>
                    <div className='space-y-2'>
                        <h1 className='text-2xl text-center text-slate-800 font-semibold'>Cumulative GPA Calculator</h1>
                        <p className='text-lg max-w-[30rem] text-justify'>
                            Wondering how you're doing overall? Your CGPA is the cumulative measure of your 
                            performance across all semesters. It’s the key to understanding your academic journey from the start till now.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <GPAtoCGPA/>
            </div>
        </div>
    )
}

export default CgpaPage