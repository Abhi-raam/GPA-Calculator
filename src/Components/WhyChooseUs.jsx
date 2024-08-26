import React from 'react'


const CardLeft = ({ number,heading, description }) => {
  return (
    <div className='space-y-2'>
      <div className='flex justify-center lg:justify-end'>
        <button className="btn bg-SecondaryGreen hover:bg-SecondaryGreen/60  text-slate-50 text-2xl">{number}</button>
      </div>
      <h2 className='text-center lg:text-right text-xl font-medium'>{heading}</h2>
      <div className='flex justify-center lg:justify-end'>
        <p className='text-justify max-w-[20rem]'>{description}</p>
      </div>
    </div>
  )
}
const CardRight = ({number,heading, description }) => {
  return (
    <div className='space-y-2'>
      <div className='flex justify-center lg:justify-start'>
        <button className="btn bg-SecondaryGreen hover:bg-SecondaryGreen/60  text-slate-50 text-2xl">{number}</button>
      </div>
      <h2 className='lg:text-left text-center text-xl font-medium'>{heading}</h2>
      <div className='flex justify-center lg:justify-start'>
        <p className='text-justify max-w-[20rem]'>{description}</p>
      </div>
    </div>
  )
}
function WhyChooseUs() {
  return (

    <div className="grid grid-cols-1 place-items-center items-center gap-2 pt-4">
      <div className="space-y-2">
        <h2 className="text-4xl font-semibold text-SecondaryGreen text-center">Why Choose Us</h2>
      </div>
      <div className="flex max-md:flex-col md:flex-row justify-between  max-lg:w-3/4 lg:w-2/3 gap-5">
        <div className='grid md:grid-cols-1 lg:grid-cols-1'>
          <CardLeft number={1} heading={"Precision at Its Best"} description={"We use  official grading system to ensure your GPA, CGPA, and Percentage calculations are spot-on every time."} />
          <CardLeft number={2} heading={"Effortless Experience"} description={"Our user-friendly platform is designed with you in mind—easy to navigate, straightforward inputs, and instant results."} />
        </div>

        <div className='grid md:grid-cols-1 lg:grid-cols-1 '>
          <CardRight number={3} heading={"Time-Saving"} description={"No more manual calculations or second-guessing. Get accurate results in seconds, so you can focus on what really matters—your studies!"}/>
          <CardRight number={4} heading={"Comprehensive Insights"} description={"Not just numbers, but a deeper understanding of your academic progress, helping you set clear goals and achieve them."}/>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs