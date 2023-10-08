import React,{useState} from 'react'

function CGPAtoPersnt() {
    const [CGPA, setCGPA] = useState()
    const [percentage, setPercentage] = useState()

    function CGPAtoPercentage(){
        let percnt = CGPA*10
        console.log(percnt);
        setPercentage(percnt)

    }
    return (
        <div>
            <div>
                <h1 className='text-2xl font-semibold text-center pt-10 text-blue-600'>CGPA to % Calculator</h1>
            </div>
            <div className='space-y-4 mt-5 py-4 grid justify-items-center p-2 mx-5 border-4 rounded-md border-blue-600'>
                <div className=' font-semibold text-blue-500'>
                    <h1>Enter CGPA (Value between 0-10) :</h1>
                </div>
                <div className='flex space-x-10 '>
                    <h1 className='font-semibold'>CGPA :</h1>
                    <input onChange={(e)=>setCGPA(e.target.value)} className='outline-none  rounded-md border-2 border-slate-600 pl-1' type="text"  />
                </div>
                <div className=''>
                    <button onClick={CGPAtoPercentage} className='bg-blue-600 rounded-full p-1 text-white px-2'>Calculate Persentage</button>
                </div>
                {percentage ? 
                <div>
                    <p className='font-bold'>Your Percentage : {percentage} %</p>
                </div> : null}
            </div>
        </div>
    )
}

export default CGPAtoPersnt