const subjects = [
//<======================================================semester 1 =======================================================>
    {
        name: 'Communicative English',
        code: 'HS8151',
        credits: 4,
        department: [
            {dept:"CSE",sem:"1"},
            {dept:"ECE",sem:"1"},
            {dept:"CIVIL",sem:"1"},
            {dept:"MECH",sem:"1"}
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Mathematics - I',
        code: 'MA8151',
        credits: 4,
        department: [
            {dept:"CSE",sem:"1"},
            {dept:"ECE",sem:"1"},
            {dept:"CIVIL",sem:"1"},
            {dept:"MECH",sem:"1"}
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Physics',
        code: 'PH8151',
        credits: 3,
        department: [
            {dept:"CSE",sem:"1"},
            {dept:"ECE",sem:"1"},
            {dept:"CIVIL",sem:"1"},
            {dept:"MECH",sem:"1"}
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Chemistry',
        code: 'CY8151',
        credits: 3,
        department: [
            {dept:"CSE",sem:"1"},
            {dept:"ECE",sem:"1"},
            {dept:"CIVIL",sem:"1"},
            {dept:"MECH",sem:"1"}
        ],
        regulation: "2017",
    },
    {
        name: 'Problem Solving and Python Programming',
        code: 'GE8151',
        credits: 3,
        department: [
            {dept:"CSE",sem:"1"},
            {dept:"ECE",sem:"1"},
            {dept:"CIVIL",sem:"1"},
            {dept:"MECH",sem:"1"}
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Graphics',
        code: 'GE8152',
        credits: 4,
        department: [
            {dept:"CSE",sem:"1"},
            {dept:"ECE",sem:"1"},
            {dept:"CIVIL",sem:"1"},
            {dept:"MECH",sem:"1"}
        ],
        regulation: "2017",
    },
    {
        name: 'Problem Solving and Python Programming Laboratory',
        code: 'GE8161',
        credits: 2,
        department: [
            {dept:"CSE",sem:"1"},
            {dept:"ECE",sem:"1"},
            {dept:"CIVIL",sem:"1"},
            {dept:"MECH",sem:"1"}
        ],
        regulation: "2017",
    },
    {
        name: 'Physics and Chemistry Laboratory',
        code: 'BS8161',
        credits: 2,
        department: [
            {dept:"CSE",sem:"1"},
            {dept:"ECE",sem:"1"},
            {dept:"CIVIL",sem:"1"},
            {dept:"MECH",sem:"1"}
        ],
        regulation: "2017",
    },

//<======================================================sem 2 common=======================================================>
    {
        name: 'Technical English',
        code: 'HS8251',
        credits: 4,
        department: [
            {dept:"CSE",sem:"2"},
            {dept:"ECE",sem:"2"},
            {dept:"CIVIL",sem:"2"},
            {dept:"MECH",sem:"2"}
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Mathematics II',
        code: 'MA8251',
        credits: 4,
        department: [
            {dept:"CSE",sem:"2"},
            {dept:"ECE",sem:"2"},
            {dept:"CIVIL",sem:"2"},
            {dept:"MECH",sem:"2"}
        ],
        regulation: "2017",
    },
    {
        name: 'Engineering Practices Laboratory',
        code: 'GE8261',
        credits: 2,
        department: [
            {dept:"CSE",sem:"2"},
            {dept:"ECE",sem:"2"},
            {dept:"CIVIL",sem:"2"},
            {dept:"MECH",sem:"2"},
        ],
        regulation: "2017",
    },
//<======================================================CSE sem 2=======================================================>
    {
        name: 'Physics for Information Science',
        code: 'PH8252',
        credits: 3,
        department: [
            {dept:"CSE",sem:"2"},
        ],
        regulation: "2017",
    },
    {
        name: 'Basic Electrical, Electronics and Measurement Engineering ',
        code: 'BE8255',
        credits: 3,
        department: [
            {dept:"CSE",sem:"2"},
        ],
        regulation: "2017",
    },
    {
        name: 'Programming in C',
        code: 'CS8251',
        credits: 3,
        department: [
            {dept:"CSE",sem:"2"},
        ],
        regulation: "2017",
    },
    {
        name: 'Environmental Science and Engineering',
        code: 'GE8291',
        credits: 3,
        department: [
            {dept:"CSE",sem:"2"},
            {dept:"ECE",sem:"4"},
        ],
        regulation: "2017",
    },
    {
        name: 'C Programming Laboratory',
        code: 'CS8261',
        credits: 2,
        department: [
            {dept:"CSE",sem:"2"},
        ],
        regulation: "2017",
    },
//<======================================================CSE sem 3=======================================================>
{
    name: 'Discrete Mathematics',
    code: 'MA8351',
    credits: 4,
    department: [
        {dept:"CSE",sem:"3"},
    ],
    regulation: "2017",
},
{
    name: 'Digital Principles and System Design',
    code: 'CS8351',
    credits: 4,
    department: [
        {dept:"CSE",sem:"3"},
    ],
    regulation: "2017",
},
{
    name: 'Data Structures',
    code: 'CS8391',
    credits: 3,
    department: [
        {dept:"CSE",sem:"3"},
    ],
    regulation: "2017",
},
{
    name: 'Object Oriented Programming ',
    code: 'CS8392',
    credits: 3,
    department: [
        {dept:"CSE",sem:"3"},
    ],
    regulation: "2017",
},
{
    name: 'Communication Engineering ',
    code: 'EC8395',
    credits: 3,
    department: [
        {dept:"CSE",sem:"3"},
    ],
    regulation: "2017",
},
{
    name: 'Data Structures Laboratory ',
    code: 'CS8381',
    credits: 2,
    department: [
        {dept:"CSE",sem:"3"},
    ],
    regulation: "2017",
},
{
    name: 'Object Oriented Programming Laboratory',
    code: 'CS8383',
    credits: 2,
    department: [
        {dept:"CSE",sem:"3"},
    ],
    regulation: "2017",
},
{
    name: 'Digital Systems Laboratory',
    code: 'CS8382',
    credits: 2,
    department: [
        {dept:"CSE",sem:"3"},
    ],
    regulation: "2017",
},
{
    name: 'Interpersonal Skills/Listening & Speaking',
    code: 'HS8381',
    credits: 1,
    department: [
        {dept:"CSE",sem:"3"},
        {dept:"ECE",sem:"3"},
    ],
    regulation: "2017",
},
//<======================================================CSE sem 4=======================================================>

//<======================================================ECE sem 2=======================================================>
    {
        name: 'Physics for Electronics Engineering',
        code: 'PH8253',
        credits: 3,
        department: [
            {dept:"ECE",sem:"2"},
        ],
        regulation: "2017",
    },
    {
        name: 'Basic Electrical and Instrumentation Engineering ',
        code: 'BE8254',
        credits: 3,
        department: [
            {dept:"ECE",sem:"2"},
        ],
        regulation: "2017",
    },
    {
        name: 'Circuit Analysis',
        code: 'EC8251',
        credits: 4,
        department: [
            {dept:"ECE",sem:"2"},
        ],
        regulation: "2017",
    },
    {
        name: 'Electronic Devices',
        code: 'EC8252',
        credits: 3,
        department: [
            {dept:"ECE",sem:"2"},
        ],
        regulation: "2017",
    },
    {
        name: 'Circuits and DevicesLaboratory',
        code: 'EC8261',
        credits: 2,
        department: [
            {dept:"ECE",sem:"2"},
        ],
        regulation: "2017",
    },
//<======================================================CIVIL sem 2=======================================================>
    {
        name: 'Physics for Civil Engineering',
        code: 'PH8201',
        credits: 3,
        department: [
            {dept:"CIVIL",sem:"2"},
        ],
        regulation: "2017",
    },
//<======================================================MECH sem 2=======================================================>
    {
        name: 'Materials Science',
        code: 'PH8251',
        credits: 3,
        department: [
            {dept:"MECH",sem:"2"},
        ],
        regulation: "2017",
    },
]




export default subjects