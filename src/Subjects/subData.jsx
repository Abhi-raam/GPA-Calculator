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
            { dept: "CIVIL", sem: "2" },
            { dept: "MECH", sem: "2" },
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
            { dept: "CIVIL", sem: "3" },
            { dept: "MECH", sem: "3" },
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
    {
        name: 'Basic Electrical and Electronic Engineering ',
        code: 'BE8251',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "2" },
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Mechanics',
        code: 'GE8292',
        credits: 4,
        department: [
            { dept: "CIVIL", sem: "2" },
        ],
        regulation: "2017",
    },
    {
        name: 'Compputer Aided Building Drawing',
        code: 'CE8211',
        credits: 2,
        department: [
            { dept: "CIVIL", sem: "2" },
        ],
        regulation: "2017",
    },
    //<======================================================CIVIL sem 3=======================================================>
    {
        name: 'Transform and Partial Differential Equations',
        code: 'MA8353',
        credits: 4,
        department: [
            { dept: "CIVIL", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Strength of Material I',
        code: 'CE8301',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Fluid Mechanics',
        code: 'CE8302',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Surveying',
        code: 'CE8351',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: ' Construction Materials',
        code: 'CE8391',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: ' Engineering Geology',
        code: 'CE8392',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Construction Materials Laboratory',
        code: 'CE8311',
        credits: 2,
        department: [
            { dept: "CIVIL", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Surveying Laboratory',
        code: 'CE8361',
        credits: 2,
        department: [
            { dept: "CIVIL", sem: "3" },
        ],
        regulation: "2017",
    },
    //<======================================================CIVIL sem 4=======================================================>
    {
        name: 'Numerical Methods',
        code: 'MA8491',
        credits: 4,
        department: [
            { dept: "CIVIL", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Construction Techniques and Practices',
        code: 'CE8401',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Strength of Materials II',
        code: 'CE8402',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Applied Hydraulic Engineering',
        code: 'CE8403',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Concrete Technology ',
        code: 'CE8404',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: ' Soil Mechanics',
        code: 'CE8491',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Strength of Materials Laboratory',
        code: 'CE8481',
        credits: 2,
        department: [
            { dept: "CIVIL", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Hydraulic Engineering Laboratory',
        code: 'CE8461',
        credits: 2,
        department: [
            { dept: "CIVIL", sem: "4" },
        ],
        regulation: "2017",
    },
    //<======================================================CIVIL sem 5=======================================================>
    {
        name: ' Design of Reinforced Cement Concrete Elements',
        code: 'CE8502',
        credits: 4,
        department: [
            { dept: "CIVIL", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Structural Analysis I',
        code: 'CE8501',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: ' Water Supply Engineering',
        code: 'EN8491',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Foundation Engineering',
        code: 'CE8591',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: ' Soil Mechanics Laboratory',
        code: 'CE8511',
        credits: 2,
        department: [
            { dept: "CIVIL", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Water and Waste Water Analysis Laboratory ',
        code: 'CE8512',
        credits: 2,
        department: [
            { dept: "CIVIL", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Survey Camp (2 weeks – During IV Semester) ',
        code: 'CE8513',
        credits: 2,
        department: [
            { dept: "CIVIL", sem: "5" },
        ],
        regulation: "2017",
    },

    //<======================================================CIVIL sem 6=======================================================>
    {
        name: 'Design of Steel Structural Elements',
        code: 'CE8601',
        credits: 4,
        department: [
            { dept: "CIVIL", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Structural Analysis II',
        code: 'CE8602',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Irrigation Engineering',
        code: 'CE8603',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Highway Engineering',
        code: 'CE8604',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Wastewater Engineering',
        code: 'EN8592',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Highway Engineering Laboratory',
        code: 'CE8611 ',
        credits: 2,
        department: [
            { dept: "CIVIL", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Irrigation and Environmental Engineering Drawing',
        code: 'CE8612 ',
        credits: 2,
        department: [
            { dept: "CIVIL", sem: "6" },
        ],
        regulation: "2017",
    },
    
    //<======================================================CIVIL sem 7=======================================================>
    {
        name: 'Estimation, Costing and Valuation Engineering',
        code: 'CE8701',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Railway, Airport, Docks and Harbour Engineering',
        code: 'CE8702',
        credits: 3,
        department: [
            { dept: "CIVIL", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Structural Design and Drawing',
        code: 'CE8703',
        credits: 4,
        department: [
            { dept: "CIVIL", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Creative and Innovative Project (Activity Based - Subject Related) ',
        code: 'CE8CE8711703',
        credits: 2,
        department: [
            { dept: "CIVIL", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Industrial Training (4 weeks During VI Semester – Summer)',
        code: 'CE8712',
        credits: 2,
        department: [
            { dept: "CIVIL", sem: "7" },
        ],
        regulation: "2017",
    },
    //<======================================================CIVIL sem 8=======================================================>
    {
        name: 'Project Work',
        code: 'CE8811',
        credits: 10,
        department: [
            { dept: "CIVIL", sem: "8" },
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
    {
        name: 'Basic Electrical, Electronics and Instrumentation Engineering',
        code: 'BE8253',
        credits: 3,
        department: [
            { dept: "MECH", sem: "2" },
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Mechanics',
        code: 'GE8292',
        credits: 4,
        department: [
            { dept: "MECH", sem: "2" },
        ],
        regulation: "2017",
    },
    {
        name: 'Basic Electrical, Electronics and Instrumentation Engineering Laboratory',
        code: 'BE8261',
        credits: 2,
        department: [
            { dept: "MECH", sem: "2" },
        ],
        regulation: "2017",
    },
    //<======================================================MECH sem 3=======================================================>
    {
        name: 'Transforms and Partial Differential Equations',
        code: 'MA8353',
        credits: 4,
        department: [
            { dept: "MECH", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Thermodynamics',
        code: 'ME8391',
        credits: 4,
        department: [
            { dept: "MECH", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Fluid Mechanics and Machinery',
        code: 'CE8394',
        credits: 4,
        department: [
            { dept: "MECH", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Manufacturing Technology - I ',
        code: 'ME8351',
        credits: 3,
        department: [
            { dept: "MECH", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Electrical Drives and Controls',
        code: 'EE8353',
        credits: 3,
        department: [
            { dept: "MECH", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Manufacturing Technology Laboratory - I',
        code: 'ME8361',
        credits: 2,
        department: [
            { dept: "MECH", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Computer Aided Machine Drawing ',
        code: 'ME8381',
        credits: 2,
        department: [
            { dept: "MECH", sem: "3" },
        ],
        regulation: "2017",
    },
    {
        name: 'Electrical Engineering Laboratory',
        code: 'EE8361',
        credits: 2,
        department: [
            { dept: "MECH", sem: "3" },
        ],
        regulation: "2017",
    },  
    //<======================================================MECH sem 4=======================================================>
    {
        name: 'Statistics and Numerical Methods',
        code: 'MA8452',
        credits: 4,
        department: [
            { dept: "MECH", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Kinematics of Machinery',
        code: 'ME8492',
        credits: 3,
        department: [
            { dept: "MECH", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Manufacturing Technology - II',
        code: 'ME8451',
        credits: 3,
        department: [
            { dept: "MECH", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Metallurgy',
        code: 'ME8491',
        credits: 3,
        department: [
            { dept: "MECH", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Strength of Materials for Mechanical Engineers',
        code: 'CE8395',
        credits: 3,
        department: [
            { dept: "MECH", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Thermal Engineering - I',
        code: 'ME8493',
        credits: 3,
        department: [
            { dept: "MECH", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Manufacturing Technology Laboratory – II',
        code: 'ME8462',
        credits: 2,
        department: [
            { dept: "MECH", sem: "4" },
        ],
        regulation: "2017",
    },
    {
        name: 'Strength of Materials and Fluid Mechanics and Machinery Laboratory',
        code: 'ME8462',
        credits: 2,
        department: [
            { dept: "MECH", sem: "4" },
        ],
        regulation: "2017",
    },
    
    //<======================================================MECH sem 5=======================================================>
    {
        name: 'Thermal Engineering- II',
        code: 'ME8595',
        credits: 3,
        department: [
            { dept: "MECH", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Design of Machine Elements',
        code: 'ME8593',
        credits: 3,
        department: [
            { dept: "MECH", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Metrology and Measurements',
        code: 'ME8501',
        credits: 3,
        department: [
            { dept: "MECH", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Dynamics of Machines',
        code: 'ME8594',
        credits: 4,
        department: [
            { dept: "MECH", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Kinematics and Dynamics Laboratory',
        code: 'ME8511',
        credits: 2,
        department: [
            { dept: "MECH", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Thermal Engineering Laboratory',
        code: 'ME8512',
        credits: 2,
        department: [
            { dept: "MECH", sem: "5" },
        ],
        regulation: "2017",
    },
    {
        name: 'Metrology and Measurements Laboratory',
        code: 'ME8513',
        credits: 2,
        department: [
            { dept: "MECH", sem: "5" },
        ],
        regulation: "2017",
    },
    //<======================================================MECH sem 6=======================================================>
    {
        name: 'Design of Transmission Systems',
        code: 'ME8651',
        credits: 3,
        department: [
            { dept: "MECH", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Computer Aided Design and Manufacturing',
        code: 'ME8691',
        credits: 3,
        department: [
            { dept: "MECH", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Heat and Mass Transfer',
        code: 'ME8693',
        credits: 4,
        department: [
            { dept: "MECH", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Finite Element Analysis',
        code: 'ME8692',
        credits: 3,
        department: [
            { dept: "MECH", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Hydraulics and Pneumatics',
        code: 'ME8694',
        credits: 3,
        department: [
            { dept: "MECH", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'CAD / CAM Laboratory',
        code: 'ME8681',
        credits: 2,
        department: [
            { dept: "MECH", sem: "6" },
        ],
        regulation: "2017",
    },
    {
        name: 'Design and Fabrication Project',
        code: 'ME8682',
        credits: 2,
        department: [
            { dept: "MECH", sem: "6" },
        ],
        regulation: "2017",
    },
    //<======================================================MECH sem 7=======================================================>
    {
        name: 'Power Plant Engineering ',
        code: 'ME8792',
        credits: 3,
        department: [
            { dept: "MECH", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Process Planning and Cost Estimation',
        code: 'ME8793',
        credits: 3,
        department: [
            { dept: "MECH", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Mechatronics',
        code: 'ME8791',
        credits: 3,
        department: [
            { dept: "MECH", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Simulation and Analysis Laboratory',
        code: 'ME8711',
        credits: 2,
        department: [
            { dept: "MECH", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Mechatronics Laboratory',
        code: 'ME8781',
        credits: 2,
        department: [
            { dept: "MECH", sem: "7" },
        ],
        regulation: "2017",
    },
    {
        name: 'Technical Seminar',
        code: 'ME8712',
        credits: 1,
        department: [
            { dept: "MECH", sem: "7" },
        ],
        regulation: "2017",
    },
    //<======================================================MECH sem 8=======================================================>
    {
        name: 'Project Work',
        code: 'ME8811',
        credits: 1,
        department: [
            { dept: "MECH", sem: "8" },
        ],
        regulation: "2017",
    },
]




export default subjects