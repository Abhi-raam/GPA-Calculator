import React, { useState } from 'react'
import { Link } from "react-router-dom"

function CardCGPA() {
    const [gpaVIew, setGpaview] = useState(false)
    function GPAbutton() {
        setGpaview(!gpaVIew)
    }
    return (
        <div className='pb-10'>
            <div className="card  w-96 bg-gray-300 shadow-xl">
                <figure><img src="https://cdn.stucor.in/wp-content/uploads/results-01.png" className='w-40 lg:w-56' alt="GPA TO CGPA" /></figure>
                <div className="card-body">
                    <h2 className="card-title">GPA TO CGPA</h2>
                    <p></p>
                    <div className="card-actions justify-center">
                        <Link to='/cgpa' className="hover:scale-105 transition ease-in-out rounded-full p-1 px-2 font-semibold bg-blue-600 text-white ">Calculate</Link>
                        <button onClick={GPAbutton} className="hover:scale-105 transition ease-in-out rounded-full p-1 px-2   font-semibold bg-blue-600 text-white ">View More</button>
                    </div>
                </div>
                {gpaVIew && <div className='max-w-sm p-3'>
                    <p className='font-semibold'>CGPA is the average of the grade points obtained by the student during the whole course. GPA is calculated for a single semester, while CGPA is calculated for the entire course duration.</p>
                </div>}
            </div>
        </div>
    )
}

export default CardCGPA