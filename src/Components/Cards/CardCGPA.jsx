import React from 'react'
import { Link } from "react-router-dom"
import cgpaImg from '../../assets/cgpa.jpeg'

function CardCGPA() {
    return (
        <Link to="/cgpa">
            <div className="card bg-base-100 w-[18rem] md:w-[20rem] lg:w-[22rem] shadow-xl group">
                <figure>
                    <img className='group-hover:scale-105 transition'
                        src={cgpaImg}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        CGPA Calculator
                    </h2>
                    <p className='text-sm'>Quickly calculate your college or semester CGPA, and learn to do it yourself.</p>
                </div>
            </div>
        </Link>
    )
}

export default CardCGPA