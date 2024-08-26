import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import CgpaPage from './Pages/CgpaPage'
import Footer from './Components/Footer'
import GpaPage from './Pages/GpaPage'
import PercentagePage from './Pages/PercentagePage'

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes >
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/gpa' element={<GpaPage />}></Route>
          <Route exact path="/cgpa" element={<CgpaPage />}></Route>
          <Route exact path='/percentage' element={<PercentagePage />} ></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App