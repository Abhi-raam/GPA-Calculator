import React, { useEffect } from 'react'
import CGPAtoPercentage from '../Components/CGPAtoPercentage'
import gpaImg from '../assets/percentage-removed.png'
import { useLocation } from 'react-router-dom';

function PercentagePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
  return (
    <div className='pt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center px-4'>
                <img src={gpaImg} className='max-lg:w-[25rem]' alt="" />
                <div className='items-center flex max-sm:pb-5'>
                    <div className='space-y-2'>
                        <h1 className='text-2xl text-center text-slate-800 font-semibold'>Overall Percentage Calculator</h1>
                        <p className='text-lg max-w-[30rem] text-justify'>
                            Need to convert your CGPA to a percentage? We've got you covered. Whether it's for job applications or higher studies, 
                            knowing your percentage is crucial, and our tool makes it effortless.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <CGPAtoPercentage />
            </div>
        </div>
  )
}

export default PercentagePage