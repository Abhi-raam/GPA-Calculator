import React from 'react'
import { Link } from "react-router-dom"
import gpaImg from '../../assets/gpa.jpeg'

function CardGPA() {
    return (
        <Link to="/gpa">
            <div className="card bg-base-100 w-[18rem] md:w-[20rem] lg:w-[22rem] shadow-xl group">
                <figure>
                    <img className='group-hover:scale-105 transition'
                       src={gpaImg}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        GPA Calculator
                    </h2>
                    <p className='text-sm'>Track and save your college GPA to keep tabs on your academic progress.</p>
                </div>
            </div>
        </Link>
    )
}

export default CardGPA