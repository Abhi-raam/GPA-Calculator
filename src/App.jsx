import React from 'react'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import GradetoGPA from './Components/GradetoGPA'
import CGPAtoPersnt from './Components/CGPAtoPersnt'
import GPAtoCGPA from './Components/GPAtoCGPA'

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        {/* components */}
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path="/gpa" element={<GradetoGPA />}></Route>
          <Route exact path='/cgpa' element={<GPAtoCGPA/>}></Route>
          <Route exact path='/persentage' element={<CGPAtoPersnt/>} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App