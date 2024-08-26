import React, { useState } from 'react'

function CGPAtoPercentage() {
    const [CGPA, setCGPA] = useState()
    const [percentage, setPercentage] = useState()
    const [errorMessage, setErrorMessage] = useState("")


    const isNumeric = (value) => {
        return /^[0-9]*\.?[0-9]*$/.test(value);
    };

    const CGPAtoPercentage = (e) => {
        e.preventDefault()
        if (isNumeric(CGPA)) {
            const parsedCGPA = parseFloat(CGPA);

            if (parsedCGPA >= 0 && parsedCGPA <= 10) {
                const percnt = parsedCGPA * 10;
                setPercentage(percnt.toFixed(2));
                setErrorMessage('');
            } else {
                setPercentage(null);
                setErrorMessage('Please enter a valid CGPA between 0 and 10.');
            }
        } else {
            setPercentage(null);
            setErrorMessage('Please enter a valid number for CGPA.');
        }
    };

    return (
        <div className='flex justify-center bg-slate-50 pb-5 w-full'>
            <div>
                <h1 className='text-2xl font-semibold text-center pt-10 text-slate-600'>CGPA to % Calculator</h1>
                <div className='space-y-4 w-[23rem] md:w-[35rem]  lg:w-[50rem] mt-5 shadow-md py-4 grid justify-items-center p-4 mx-5 bg-base-100'>
                    <div className=' font-semibold text-slate-500'>
                        <h1>Enter CGPA (Value between 0-10)</h1>
                    </div>
                    <form onSubmit={CGPAtoPercentage} >
                        <div className='flex  justify-around items-center gap-5 '>
                            <h2 className="font-semibold" >CGPA</h2>
                            <input onChange={(e) => setCGPA(e.target.value)} type="text" placeholder="Enter CGPA" className="input input-bordered md:w-[20rem] max-w-xs" />
                        </div>
                        <div className="flex justify-center pt-5">
                            <button onClick={CGPAtoPercentage} className='btn bg-SecondaryGreen hover:bg-SecondaryGreen/80 text-white'>Calculate</button>
                        </div>
                    </form>
                    {errorMessage ? (
                        <div>
                            <p className='text-red-600 font-semibold'>{errorMessage}</p>
                        </div>
                    ) : percentage ? (
                        <div>
                            <p className='font-bold'>Your Percentage : {percentage} %</p>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default CGPAtoPercentage