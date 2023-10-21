import React, { useState,useEffect } from 'react';

function Subjects({ subject }) {
    const [grades, setGrades] = useState({}); // Track grades for each subject
    const [gpa, setGpa] = useState(null);
    const [showGpa, setShowGps] = useState(true)
    const gpaScale = {
        '10': 10, // Grade O
        '9': 9,   // Grade A+
        '8': 8,   // Grade A
        '7': 7,   // Grade B+
        '6': 6,   // Grade B
        '5': 5,   // Grade C
        '0': 0    // Grade RA
    };
    useEffect(()=>{
        setGrades({})
        setGpa(null)
    },[subject])

    const calculateGPA = () => {
        let totalWeightedGPA = 0;
        let finalGPA = 0
        let Tcredit = 0
        // console.log(subject.length);
        // console.log(grades);
        if (Object.keys(grades).length === subject.length) {
            subject.forEach(item => {
                const subCredit = item.credits;
                Tcredit = Tcredit + subCredit
                const grade = grades[item.name];
                if (grade && gpaScale[grade]) {
                    totalWeightedGPA = totalWeightedGPA + (subCredit * gpaScale[grade]);
                }
            });
            finalGPA = (totalWeightedGPA / Tcredit).toFixed(3);
            setGpa(finalGPA)
            setShowGps(true)
        } else {
            setShowGps(false)
        }
    };

    return (
        <div className='p-2 text-sm md:text-lg font-semibold'>
            {subject && subject.length > 0 && (
                <div>
                    {subject.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between space-x-4 py-3">
                                <div className='text-start flex space-x-3'>
                                    <p>{index + 1})</p>
                                    <p>{item.code} - {item.name} ({item.credits})</p>
                                </div>
                                <div>
                                    <select  name="" onChange={e => { const selectedGrade = e.target.value; setGrades(prevGrades => ({ ...prevGrades, [item.name]: selectedGrade })); }}
                                        className='outline-none bg-slate-200 p-1 rounded-md '>
                                        <option value='' selected={!grades[item.name]} >Choose</option>
                                        <option value="10">O</option>
                                        <option value="9">A+</option>
                                        <option value="8">A</option>
                                        <option value="7">B+</option>
                                        <option value="6">B</option>
                                        <option value="5">C</option>
                                        <option value="0">RA</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button className='bg-blue-600 text-white p-1 rounded-md' onClick={calculateGPA}>Calculate GPA</button>
                    {showGpa ? <div>
                        {gpa !== null && (
                            <div className="mt-4">
                                <p className="text-lg font-bold">Your GPA: {gpa}</p>
                            </div>
                        )}
                    </div> : <div className="mt-4">
                        <p className='text-red-700'>Choose all the grades</p>
                    </div>}
                </div>
            )}
        </div>
    );
}

export default Subjects;
