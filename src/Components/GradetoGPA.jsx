import React, { useState } from 'react'
import subjects from '../Subjects/subData'
import Subjects from './Subjects'

function GradetoGPA() {
    const [subject, setSubject] = useState([])
    const [regulation, setRegulation] = useState();
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState();
    const [showSubjects, setShowSubjects] = useState(true);

    const handleButtonClick = () => {
        // Filter subjects based on selected criteria
    if (regulation && department && semester) {
        const selected = subjects.filter(subject => {
            return (
                subject.regulation === regulation &&
                subject.department.some(dep => dep.dept === department && dep.sem === semester)
            );
        }); 
        setSubject(selected);
        setShowSubjects(true);
    } else {
        setShowSubjects(false);
    }
};

    return (
        <div className='shadow-2xl'>
            {/* <div>
                <h1 className='text-center font-semibold text-xl pt-3'>Anna University GPA Calculator</h1>
            </div> */}
            <div >
                <h1 className='text-center pt-10 text-2xl font-semibold text-blue-600'>Grade to GPA Calculator</h1>
                <div className='m-4 pt-5 border-4 border-blue-600   grid rounded-md justify-items-center space-y-5 text-center py-3'>
                    <div className='border-2 border-blue-600 rounded-md w-56'>
                        <select className='outline-none bg-white p' onChange={e => setRegulation(e.target.value)} name="" id="">
                            <option value="">Choose Regulation</option>
                            <option value="2021">Regulation 2021</option>
                            <option value="2017">Regulation 2017</option>
                        </select>
                    </div>
                    <div className='border-2 border-blue-600 rounded-md w-56'>
                        <select className='outline-none bg-white' onChange={e => setDepartment(e.target.value)} name="" id="">
                            <option value="">Choose Department</option>
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="MECH">MECH</option>
                        </select>
                    </div>
                    <div className='border-2 border-blue-600 rounded-md w-56'>
                        <select className='outline-none bg-white' onChange={e => setSemester(e.target.value)} name="" id="">
                            <option value="">Choose Semester</option>
                            <option value="1">Semester 1</option>
                            <option value="2">Semester 2</option>
                            <option value="3">Semester 3</option>
                            <option value="4">Semester 4</option>
                            <option value="5">Semester 5</option>
                            <option value="6">Semester 6</option>
                            <option value="7">Semester 7</option>
                            <option value="8">Semester 8</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={handleButtonClick} className='bg-blue-600 text-white p-2 rounded-md'>Fetch Subjects</button>
                    </div>
                    {/* <Subjects subject={subject} /> */}
                    {showSubjects ? <Subjects subject={subject} /> : <p className='text-red-700'>Please choose all options to proceed</p>}
                </div>
            </div>
        </div>
    )
}

export default GradetoGPA