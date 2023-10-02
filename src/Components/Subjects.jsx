import React, { useState } from 'react';

function Subjects({ subject }) {
    const [grades, setGrades] = useState({}); // Track grades for each subject
    const [gpa, setGpa] = useState(null);
    const gpaScale = {
        '10': 10, // Grade O
        '9': 9,   // Grade A+
        '8': 8,   // Grade A
        '7': 7,   // Grade B+
        '6': 6,   // Grade B
        '5': 5,   // Grade C
        '0': 0    // Grade RA
    };

    const calculateGPA = () => {
        let totalCredits = 0;
        let totalWeightedGPA = 0;
        let finalGPA = 0
        subject.forEach(item => {
            const subCredit = item.credits;
            const grade = grades[item.code];
            if (grade && gpaScale[grade]) {
                totalCredits += subCredit;
                totalWeightedGPA += subCredit * gpaScale[grade];
            }
        });
        if (totalCredits === 0) {
            finalGPA = 0; // Prevent division by zero
        }
        finalGPA = (totalWeightedGPA / totalCredits).toFixed(3);
        setGpa(finalGPA)
    };

    return (
        <div className='p-2 text-sm md:text-lg font-semibold'>
            {subject && subject.length > 0 &&(
                <div>
                    {subject.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between space-x-4 py-3">
                                <div className='text-start'>
                                    <p>{item.code} - {item.name}</p>
                                </div>
                                <div>
                                    <select name="" onChange={e => { const selectedGrade = e.target.value; setGrades(prevGrades => ({ ...prevGrades,[item.code]: selectedGrade}));}}
                                        className='outline-none bg-slate-200 p-1 rounded-md '>
                                        <option value="">Choose</option>
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
                    {gpa !== null && (
                        <div className="mt-4">
                            <p className="text-lg font-bold">Your GPA: {gpa}</p>
                        </div>
                     )} 
                </div>
            )}
        </div>
    );
}

export default Subjects;
