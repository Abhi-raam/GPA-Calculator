import React from 'react'
import CardCGPA from './Cards/CardCGPA'
import CardPercentage from './Cards/CardPercentage'
import CardGPA from './Cards/CardGPA'

function Calculator() {
  return (
    <div className='px-4 lg:px-10 pt-5 pb-5 bg-white'>
        <div className='space-y-3'>
            <h2 className='text-3xl font-medium text-center'>Academic  Calculators</h2>
            <h2 className='text-lg font-medium text-center text-slate-600'>Welcome to Your Ultimate Academic Companion!</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 pt-5 justify-items-center'>
            <CardGPA/>
            <CardCGPA/>
            <CardPercentage/>
        </div>
    </div>
  )
}

export default Calculator