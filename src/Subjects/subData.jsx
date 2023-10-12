const subjects = [
    //<======================================================semester 1 =======================================================>
    {
        name: 'Communicative English',
        code: 'HS8151',
        credits: 4,
        department: [
            { dept: "CSE", sem: "1" },
            { dept: "ECE", sem: "1" },
            { dept: "CIVIL", sem: "1" },
            { dept: "MECH", sem: "1" }
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Mathematics - I',
        code: 'MA8151',
        credits: 4,
        department: [
            { dept: "CSE", sem: "1" },
            { dept: "ECE", sem: "1" },
            { dept: "CIVIL", sem: "1" },
            { dept: "MECH", sem: "1" }
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Physics',
        code: 'PH8151',
        credits: 3,
        department: [
            { dept: "CSE", sem: "1" },
            { dept: "ECE", sem: "1" },
            { dept: "CIVIL", sem: "1" },
            { dept: "MECH", sem: "1" }
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Chemistry',
        code: 'CY8151',
        credits: 3,
        department: [
            { dept: "CSE", sem: "1" },
            { dept: "ECE", sem: "1" },
            { dept: "CIVIL", sem: "1" },
            { dept: "MECH", sem: "1" }
        ],
        regulation: "2017",
    },
    {
        name: 'Problem Solving and Python Programming',
        code: 'GE8151',
        credits: 3,
        department: [
            { dept: "CSE", sem: "1" },
            { dept: "ECE", sem: "1" },
            { dept: "CIVIL", sem: "1" },
            { dept: "MECH", sem: "1" }
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Graphics',
        code: 'GE8152',
        credits: 4,
        department: [
            { dept: "CSE", sem: "1" },
            { dept: "ECE", sem: "1" },
            { dept: "CIVIL", sem: "1" },
            { dept: "MECH", sem: "1" }
        ],
        regulation: "2017",
    },
    {
        name: 'Problem Solving and Python Programming Laboratory',
        code: 'GE8161',
        credits: 2,
        department: [
            { dept: "CSE", sem: "1" },
            { dept: "ECE", sem: "1" },
            { dept: "CIVIL", sem: "1" },
            { dept: "MECH", sem: "1" }
        ],
        regulation: "2017",
    },
    {
        name: 'Physics and Chemistry Laboratory',
        code: 'BS8161',
        credits: 2,
        department: [
            { dept: "CSE", sem: "1" },
            { dept: "ECE", sem: "1" },
            { dept: "CIVIL", sem: "1" },
            { dept: "MECH", sem: "1" }
        ],
        regulation: "2017",
    },

    //<======================================================sem 2 common=======================================================>
    {
        name: 'Technical English',
        code: 'HS8251',
        credits: 4,
        department: [
            { dept: "CSE", sem: "2" },
            { dept: "ECE", sem: "2" },
            { dept: "CIVIL", sem: "2" },
            { dept: "MECH", sem: "2" }
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Mathematics II',
        code: 'MA8251',
        credits: 4,
        department: [
            { dept: "CSE", sem: "2" },
            { dept: "ECE", sem: "2" },
            { dept: "CIVIL", sem: "2" },
            { dept: "MECH", sem: "2" }
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Practices Laboratory',
        code: 'GE8261',
        credits: 2,
        department: [
            { dept: "CSE", sem: "2" },
            { dept: "ECE", sem: "2" },
            { dept: "CIVIL", sem: "2" },
            { dept: "MECH", sem: "2" },
        ],
        regulation: "2017",
    },
    //<======================================================CSE sem 2=======================================================>
    {
        name: 'Physics for Information Science',
        code: 'PH8252',
        credits: 3,
        department: [
            { dept: "CSE", sem: "2" },
        ],
        regulation: "2017",
    },
    {
        name: 'Basic Electrical, Electronics and Measurement Engineering ',
        code: 'BE8255',
        credits: 3,
        department: [
            { dept: "CSE", sem: "2" },
        ],
        regulation: "2017",
    },
    {
        name: 'Programming in C',
        code: 'CS8251',
        credits: 3,
        department: [
            { dept: "CSE", sem: "2" },
        ],
        regulation: "2017",
    },
    {
        name: 'Environmental Science and Engineering',
        code: 'GE8291',
        credits: 3,
        department: [
            { dept: "CSE", sem: "2" },
            { dept: "ECE", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'C Programming Laboratory',
        code: 'CS8261',
        credits: 2,
        department: [
            { dept: "CSE", sem: "2" },
        ],
        regulation: "2017",
    },
    //<======================================================CSE sem 3=======================================================>
    {
        name: 'Discrete Mathematics',
        code: 'MA8351',
        credits: 4,
        department: [
            { dept: "CSE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Digital Principles and System Design',
        code: 'CS8351',
        credits: 4,
        department: [
            { dept: "CSE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Data Structures',
        code: 'CS8391',
        credits: 3,
        department: [
            { dept: "CSE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Object Oriented Programming ',
        code: 'CS8392',
        credits: 3,
        department: [
            { dept: "CSE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Communication Engineering ',
        code: 'EC8395',
        credits: 3,
        department: [
            { dept: "CSE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Data Structures Laboratory ',
        code: 'CS8381',
        credits: 2,
        department: [
            { dept: "CSE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Object Oriented Programming Laboratory',
        code: 'CS8383',
        credits: 2,
        department: [
            { dept: "CSE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Digital Systems Laboratory',
        code: 'CS8382',
        credits: 2,
        department: [
            { dept: "CSE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Interpersonal Skills/Listening & Speaking',
        code: 'HS8381',
        credits: 1,
        department: [
            { dept: "CSE", sem: "3" },
            { dept: "ECE", sem: "3" },
        ],
        regulation: "2017",
    },
    //<======================================================CSE sem 4=======================================================>
    {
        name: 'Probability and Queueing Theory',
        code: 'MA8402',
        credits: 4,
        department: [
            {dept:"CSE",sem:"4"},
        ],
        regulation: "2017",
    },
    {
        name: 'Computer Architecture',
        code: 'CS8491',
        credits: 3,
        department: [
            {dept:"CSE",sem:"4"},
        ],
        regulation: "2017",
    },
    {
        name: 'Database Management Systems',
        code: 'CS8492',
        credits: 3,
        department: [
            {dept:"CSE",sem:"4"},
        ],
        regulation: "2017",
    },
    {
        name: 'Design and Analysis of Algorithms',
        code: 'CS8451',
        credits: 3,
        department: [
            {dept:"CSE",sem:"4"},
        ],
        regulation: "2017",
    },
    {
        name: 'Operating Systems',
        code: 'CS8493',
        credits: 3,
        department: [
            {dept:"CSE",sem:"4"},
        ],
        regulation: "2017",
    },
    {
        name: 'Software Engineering',
        code: 'CS8494',
        credits: 3,
        department: [
            {dept:"CSE",sem:"4"},
        ],
        regulation: "2017",
    },
    {
        name: 'Database Management Systems Laboratory',
        code: 'CS8481',
        credits: 2,
        department: [
            {dept:"CSE",sem:"4"},
        ],
        regulation: "2017",
    },
    {
        name: 'Operating Systems Laboratory',
        code: 'CS8461',
        credits: 2,
        department: [
            {dept:"CSE",sem:"4"},
        ],
        regulation: "2017",
    },
    {
        name: 'Advanced Reading and Writing ',
        code: 'HS8461',
        credits: 1,
        department: [
            {dept:"CSE",sem:"4"},
            {dept:"CIVIL",sem:"4"},
            {dept:"MECH",sem:"4"},
        ],
        regulation: "2017",
    },
    //<======================================================CSE sem 5=======================================================>
    {
        name: 'Algebra and Number Theory',
        code: 'MA8551',
        credits: 4,
        department: [
            {dept:"CSE",sem:"5"},
        ],
        regulation: "2017",
    },
    {
        name: 'Computer Networks',
        code: 'CS8591',
        credits: 3,
        department: [
            {dept:"CSE",sem:"5"},
        ],
        regulation: "2017",
    },
    {
        name: 'Microprocessors and Microcontrollers',
        code: 'EC8691',
        credits: 3,
        department: [
            {dept:"CSE",sem:"5"},
            {dept:"ECE",sem:"6"},
        ],
        regulation: "2017",
    },
    {
        name: 'Theory of Computation',
        code: 'CS8501',
        credits: 3,
        department: [
            {dept:"CSE",sem:"5"},
        ],
        regulation: "2017",
    },
    {
        name: 'Object Oriented Analysis and Design',
        code: 'CS8592',
        credits: 3,
        department: [
            {dept:"CSE",sem:"5"},
        ],
        regulation: "2017",
    },
    {
        name: 'Open Elective I',
        code: '',
        credits: 3,
        department: [
            {dept:"CSE",sem:"5"},
            {dept:"ECE",sem:"5"},
            {dept:"CIVIL",sem:"5"},
            {dept:"MECH",sem:"5"},
        ],
        regulation: "2017",
    },
    {
        name: 'Microprocessors and Microcontrollers Laboratory',
        code: 'EC8681',
        credits: 2,
        department: [
            {dept:"CSE",sem:"5"},
        ],
        regulation: "2017",
    },
    {
        name: 'Object Oriented Analysis and Design Laboratory',
        code: 'CS8582',
        credits: 2,
        department: [
            {dept:"CSE",sem:"5"},
        ],
        regulation: "2017",
    },
    {
        name: 'Networks Laboratory',
        code: 'CS8581',
        credits: 2,
        department: [
            {dept:"CSE",sem:"5"},
        ],
        regulation: "2017",
    },
    //<======================================================CSE sem 6=======================================================>
    {
        name: 'Internet Programming ',
        code: 'CS8651',
        credits: 3,
        department: [
            {dept:"CSE",sem:"6"},
        ],
        regulation: "2017",
    },
    {
        name: 'Artificial Intelligence',
        code: 'CS8691',
        credits: 3,
        department: [
            {dept:"CSE",sem:"6"},
        ],
        regulation: "2017",
    },
    {
        name: 'Mobile Computing',
        code: 'CS8601',
        credits: 3,
        department: [
            {dept:"CSE",sem:"6"},
        ],
        regulation: "2017",
    },
    {
        name: 'Compiler Design',
        code: 'CS8602',
        credits: 4,
        department: [
            {dept:"CSE",sem:"6"},
        ],
        regulation: "2017",
    },
    {
        name: 'Distributed Systems',
        code: 'CS8603',
        credits: 3,
        department: [
            {dept:"CSE",sem:"6"},
        ],
        regulation: "2017",
    },
    {
        name: 'Professional Elective I',
        code: '',
        credits: 3,
        department: [
            {dept:"CSE",sem:"6"},
            {dept:"ECE",sem:"5"},
            {dept:"CIVIL",sem:"5"},
            {dept:"MECH",sem:"6"},
        ],
        regulation: "2017",
    },
    {
        name: 'Internet Programming Laboratory',
        code: 'CS8661',
        credits: 2,
        department: [
            {dept:"CSE",sem:"6"},
        ],
        regulation: "2017",
    },
    {
        name: 'Mobile Application Development Laboratory',
        code: 'CS8662',
        credits: 2,
        department: [
            {dept:"CSE",sem:"6"},
        ],
        regulation: "2017",
    },
    {
        name: 'Mini Project',
        code: 'CS8611',
        credits: 1,
        department: [
            {dept:"CSE",sem:"6"},
        ],
        regulation: "2017",
    },
    {
        name: 'Professional Communication',
        code: 'HS8581',
        credits: 1,
        department: [
            {dept:"CSE",sem:"6"},
            {dept:"ECE",sem:"6"},
            {dept:"CIVIL",sem:"6"},
            {dept:"MECH",sem:"6"},
        ],
        regulation: "2017",
    },
    //<======================================================CSE sem 7=======================================================>
    {
        name: 'Principles of Management',
        code: 'MG8591',
        credits: 3,
        department: [
            {dept:"CSE",sem:"7"},
            {dept:"ECE",sem:"6"},
            {dept:"MECH",sem:"8"},
        ],
        regulation: "2017",
    },
    {
        name: 'Cryptography and Network Security',
        code: 'CS8792',
        credits: 3,
        department: [
            {dept:"CSE",sem:"7"},
        ],
        regulation: "2017",
    },
    {
        name: 'Cloud Computing',
        code: 'CS8791',
        credits: 3,
        department: [
            {dept:"CSE",sem:"7"},
        ],
        regulation: "2017",
    },
    {
        name: 'Open Elective II',
        code: '',
        credits: 3,
        department: [
            {dept:"CSE",sem:"7"},
            {dept:"ECE",sem:"7"},
            {dept:"CIVIL",sem:"7"},
            {dept:"MECH",sem:"7"},
        ],
        regulation: "2017",
    },
    {
        name: 'Professional Elective II',
        code: '',
        credits: 3,
        department: [
            {dept:"CSE",sem:"7"},
            {dept:"ECE",sem:"6"},
            {dept:"CIVIL",sem:"6"},
            {dept:"MECH",sem:"7"},
        ],
        regulation: "2017",
    },
    {
        name: 'Professional Elective III',
        code: '',
        credits: 3,
        department: [
            {dept:"CSE",sem:"7"},
            {dept:"ECE",sem:"7"},
            {dept:"CIVIL",sem:"7"},
            {dept:"MECH",sem:"7"},
        ],
        regulation: "2017",
    },
    {
        name: 'Cloud Computing Laboratory',
        code: 'CS8711',
        credits: 2,
        department: [
            {dept:"CSE",sem:"7"},
        ],
        regulation: "2017",
    },
    {
        name: 'Security Laboratory',
        code: 'IT8761',
        credits: 2,
        department: [
            {dept:"CSE",sem:"7"},
        ],
        regulation: "2017",
    },
    //<======================================================CSE sem 8=======================================================>
    {
        name: 'Professional Elective IV',
        code: '',
        credits: 3,
        department: [
            {dept:"CSE",sem:"8"},
            {dept:"ECE",sem:"8"},
            {dept:"CIVIL",sem:"8"},
            {dept:"MECH",sem:"8"},
        ],
        regulation: "2017",
    },
    {
        name: 'Professional Elective V',
        code: '',
        credits: 3,
        department: [
            {dept:"CSE",sem:"8"},
            {dept:"ECE",sem:"8"},
            {dept:"CIVIL",sem:"8"},
        ],
        regulation: "2017",
    },
    {
        name: 'Project Work',
        code: 'CS8811',
        credits: 10,
        department: [
            {dept:"CSE",sem:"8"},
        ],
        regulation: "2017",
    },
    //<======================================================ECE sem 2=======================================================>
    {
        name: 'Physics for Electronics Engineering',
        code: 'PH8253',
        credits: 3,
        department: [
            { dept: "ECE", sem: "2" },
        ],
        regulation: "2017",
    },
    {
        name: 'Basic Electrical and Instrumentation Engineering ',
        code: 'BE8254',
        credits: 3,
        department: [
            { dept: "ECE", sem: "2" },
        ],
        regulation: "2017",
    },
    {
        name: 'Circuit Analysis',
        code: 'EC8251',
        credits: 4,
        department: [
            { dept: "ECE", sem: "2" },
        ],
        regulation: "2017",
    },
    {
        name: 'Electronic Devices',
        code: 'EC8252',
        credits: 3,
        department: [
            { dept: "ECE", sem: "2" },
        ],
        regulation: "2017",
    },
    {
        name: 'Circuits and DevicesLaboratory',
        code: 'EC8261',
        credits: 2,
        department: [
            { dept: "ECE", sem: "2" },
        ],
        regulation: "2017",
    },
    //<======================================================ECE sem 3=======================================================>
    {
        name: 'Linear Algebra and Partial Differential Equations',
        code: 'MA8352',
        credits: 4,
        department: [
            { dept: "ECE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Fundamentals of Data Structures In C ',
        code: 'EC8393',
        credits: 3,
        department: [
            { dept: "ECE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Electronic Circuits- I',
        code: 'EC8351',
        credits: 3,
        department: [
            { dept: "ECE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Signals and Systems',
        code: 'EC8352',
        credits: 4,
        department: [
            { dept: "ECE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Digital Electronics',
        code: 'EC8392',
        credits: 3,
        department: [
            { dept: "ECE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Control Systems Engineering',
        code: 'EC8391',
        credits: 3,
        department: [
            { dept: "ECE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Fundamentals of Data Structures in C Laboratory',
        code: 'EC8381',
        credits: 2,
        department: [
            { dept: "ECE", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Analog and Digital Circuits Laboratory',
        code: 'EC8361',
        credits: 2,
        department: [
            { dept: "ECE", sem: "3" },
        ],
        regulation: "2017",
    },
    //<======================================================ECE sem 4=======================================================>
    {
        name: 'Probability and RandomProcesses',
        code: 'MA8451',
        credits: 4,
        department: [
            { dept: "ECE", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Electronic Circuits I',
        code: 'EC8452',
        credits: 3,
        department: [
            { dept: "ECE", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Communication Theory',
        code: 'EC8491',
        credits: 3,
        department: [
            { dept: "ECE", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Electromagnetic Fields',
        code: 'EC8451',
        credits: 4,
        department: [
            { dept: "ECE", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Linear Integrated Circuits',
        code: 'EC8453',
        credits: 3,
        department: [
            { dept: "ECE", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Circuits Design and Simulation Laboratory',
        code: 'EC8461',
        credits: 2,
        department: [
            { dept: "ECE", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Linear Integrated Circuits Laboratory',
        code: 'EC8462',
        credits: 2,
        department: [
            { dept: "ECE", sem: "4" },
        ],
        regulation: "2017",
    },
    //<======================================================ECE sem 5========================================================>
    {
        name: 'Digital Communication',
        code: 'EC8501',
        credits: 3,
        department: [
            { dept: "ECE", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Discrete-Time Signal Processing',
        code: 'EC8553',
        credits: 4,
        department: [
            { dept: "ECE", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Computer Architecture and Organization',
        code: 'EC8552',
        credits: 3,
        department: [
            { dept: "ECE", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Communication Networks',
        code: 'EC8551',
        credits: 3,
        department: [
            { dept: "ECE", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Digital Signal Processing Laboratory',
        code: 'EC8562',
        credits: 2,
        department: [
            { dept: "ECE", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Communication Systems Laboratory',
        code: 'EC8561',
        credits: 2,
        department: [
            { dept: "ECE", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Communication Networks Laboratory',
        code: 'EC8563',
        credits: 2,
        department: [
            { dept: "ECE", sem: "5" },
        ],
        regulation: "2017",
    },
    //<======================================================ECE sem 6=======================================================>
    {
        name: 'VLSI Design',
        code: 'EC8095',
        credits: 3,
        department: [
            { dept: "ECE", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Wireless Communication',
        code: 'EC8652',
        credits: 3,
        department: [
            { dept: "ECE", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Transmission Lines and RF Systems',
        code: 'EC8651',
        credits: 3,
        department: [
            { dept: "ECE", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Microprocessors and Microcontrollers Laboratory',
        code: 'EC8681',
        credits: 2,
        department: [
            { dept: "ECE", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'VLSI Design Laboratory',
        code: 'EC8661',
        credits: 2,
        department: [
            { dept: "ECE", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Technical Seminar',
        code: 'EC8611',
        credits: 1,
        department: [
            { dept: "ECE", sem: "6" },
        ],
        regulation: "2017",
    },
    //<======================================================ECE sem 7=======================================================>
    {
        name: 'Antennas and Microwave Engineering',
        code: 'EC8701',
        credits: 3,
        department: [
            { dept: "ECE", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Optical Communication ',
        code: 'EC8751',
        credits: 3,
        department: [
            { dept: "ECE", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Embedded and Real Time Systems',
        code: 'EC8791',
        credits: 3,
        department: [
            { dept: "ECE", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Ad hoc and Wireless Sensor Networks',
        code: 'EC8702',
        credits: 3,
        department: [
            { dept: "ECE", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Embedded Laboratory',
        code: 'EC8711',
        credits: 2,
        department: [
            { dept: "ECE", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Advanced Communication Laboratory',
        code: 'EC8761',
        credits: 2,
        department: [
            { dept: "ECE", sem: "7" },
        ],
        regulation: "2017",
    },
    //<======================================================ECE sem 8=======================================================>
    {
        name: 'Project Work',
        code: 'EC8811',
        credits: 10,
        department: [
            { dept: "ECE", sem: "8" },
        ],
        regulation: "2017",
    },
    //<======================================================CIVIL sem 2=======================================================>
    {
        name: 'Physics for Civil Engineering',
        code: 'PH8201',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "2" },
        ],
        regulation: "2017",
    },
    //<======================================================MECH sem 2=======================================================>
    {
        name: 'Materials Science',
        code: 'PH8251',
        credits: 3,
        department: [
            { dept: "MECH", sem: "2" },
        ],
        regulation: "2017",
    },
]




export default subjects