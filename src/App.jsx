import React from 'react'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import GradetoGPA from './Components/GradetoGPA'

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        {/* components */}
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path="/grade-cgpa" element={<GradetoGPA />}></Route>
          {/* <Route exact path='/service' element={<Service/>}></Route> */}
          {/* <Route exact path='/projects' element={<Projects/>}></Route> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App