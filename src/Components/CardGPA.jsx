import React, { useState } from 'react'
import { Link } from "react-router-dom"
import gpaImg from '../assets/grade-to-gpa.png'
// import gpaImg from '../assets/gpa.jpg'

function CardGPA() {
    const [gpaVIew, setGpaview] = useState(false)
    function GPAbutton() {
        setGpaview(!gpaVIew)
    }
    return (
        <div className='pb-10'>
            <div className="card w-96 bg-gray-300 shadow-xl">
                <figure><img src={gpaImg} className=' w-full '  alt="GPA TO CGPA" /></figure>
                <div className="card-body ">
                    <h2 className="card-title justify-center">GRADE TO GPA</h2>
                    <p></p>
                    <div className="card-actions justify-around">
                        <Link to='/gpa' className="hover:scale-105 transition ease-in-out rounded-full p-1 px-3 font-semibold bg-blue-600 text-white ">Calculate</Link>
                        <button onClick={GPAbutton} className="hover:scale-105 transition ease-in-out rounded-full p-1 px-3   font-semibold bg-blue-600 text-white ">View More</button>
                    </div>
                </div>
                {gpaVIew && <div className='max-w-sm p-3 '>
                    <p className='font-semibold'>Anna university GPA is calculated as the ratio of the sum of the products of the number of credits of courses registered and the grade points scored in those courses to the sum of the number of credits of in the semester. <br />
                        GPA = ∑ (𝐶𝑖 ∗ 𝐺𝑃i) / ∑ 𝐶𝑖 <br />
                        Where,<br />
                        <ul>
                            <li>𝐶𝑖 is the number of credits assigned to the course</li>
                            <li>𝐺𝑃i is the grade obtained for each course </li>
                            <li>n is the number of all courses successfully cleared</li>
                        </ul>
                    </p>
                </div>}
            </div>
        </div>
    )
}

export default CardGPA