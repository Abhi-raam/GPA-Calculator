import React from 'react'
import { Link } from "react-router-dom"
import percentImg from '../../assets/percentage.jpeg'


function CardPercentage() {
    return (
        <Link to='/percentage'>
            <div className="card bg-base-100 w-[18rem] md:w-[20rem] lg:w-[22rem] shadow-xl group">
                <figure>
                    <img className='group-hover:scale-105 transition'
                        src={percentImg}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Percentage Calculator
                    </h2>
                    <p className='text-sm'>Figure out your overall Percentage, and how you stack up against the national average.</p>
                </div>
            </div>
        </Link>
    )
}

export default CardPercentage