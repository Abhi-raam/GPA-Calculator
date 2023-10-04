import React, { useState } from 'react'
import GradetoGPA from './GradetoGPA'
import { Link } from "react-router-dom"
import CardGPA from './CardGPA'
import CardCGPA from './CardCGPA'
import CardPercentage from './CardPercentage'


function Home() {

    return (
        <div>
            <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 mt-3  lg:mt-0 lg:justify-around h-[100vh] items-center'>
                <CardGPA />
                <CardCGPA />
                <CardPercentage/>
            </div>
        </div>
    )
}

export default Home