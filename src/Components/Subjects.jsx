import React from 'react'

function Subjects({ subject }) {
    return (
        <div>
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
    </div>
    )
}

export default Subjects