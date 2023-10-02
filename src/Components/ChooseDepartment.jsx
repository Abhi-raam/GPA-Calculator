import React, { useState } from 'react'
import '../Firebase/config'
import { collection, getFirestore, getDocs } from 'firebase/firestore'
import Subjects from './Subjects'

function ChooseDepartment() {
    const db = getFirestore()
    const [subject, setSubject] = useState([])
    const [regulation, setRegulation] = useState();
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState();

    const handleClick = async () => {
        const querySnapshot = await getDocs(collection(db, 'subjects'));
        const fetchedData = [];
        querySnapshot.forEach(doc => {
            fetchedData.push(doc.data());
            setSubject(fetchedData)
        });
    };
    function showDb() {
        console.log(regulation);
        console.log(department);
        console.log(semester);
    }

    return (
        <div>
            <div>
                <h1 className='text-center font-semibold text-xl pt-3'>Anna University GPA Calculator</h1>
            </div>
            <div>
                <h1 className='text-center pt-10 text-lg font-semibold text-blue-600'>Grade to GPA Calculator</h1>
                <div className='m-4 pt-5 border-4 border-blue-600 grid rounded-md justify-items-center space-y-5 text-center py-3'>
                    <div className='border-2 border-blue-600 rounded-md w-56'>
                        <select className='outline-none' onChange={e => setRegulation(e.target.value)} name="" id="">
                            <option value="">Choose Regulation</option>
                            <option value="2017">2017</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>
                    <div className='border-2 border-blue-600 rounded-md w-56'>
                        <select className='outline-none' onChange={e => setDepartment(e.target.value)} name="" id="">
                            <option value="">Choose Department</option>
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="MECH">MECH</option>
                        </select>
                    </div>
                    <div className='border-2 border-blue-600 rounded-md w-56'>
                        <select className='outline-none' onChange={e => setSemester(e.target.value)} name="" id="">
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
                        <button onClick={handleClick} className='bg-blue-600 text-white p-2 rounded-md'>Fetch Subjects</button>
                    </div>
                </div>
            </div>
            {/* <div>
                {subject && (
                    <ul>
                        {subject.map((item, index) => (
                            <li key={index}>
                                <p>Name: {item.name}</p>
                                <p>Code: {item.code}</p>
                                <h4>Departments:</h4>
                                <ul>
                                    {item.departments.map((dept, idx) => (
                                        <li key={idx}>{dept.dept}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                )}
            </div> */}
            <Subjects subject={subject}/>
        </div>
    )
}

export default ChooseDepartment