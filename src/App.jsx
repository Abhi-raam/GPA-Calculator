import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./Pages/HomePage'))
const CgpaPage = lazy(() => import('./Pages/CgpaPage'))
const GpaPage = lazy(() => import('./Pages/GpaPage'))
const PercentagePage = lazy(() => import('./Pages/PercentagePage'))

const Navbar = lazy(() => import('./Components/Navbar'))
const Footer = lazy(() => import('./Components/Footer'))
const Loading = lazy(() => import('./Components/Loading'))
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Suspense fallback={<div><Loading /></div>}>
          <Routes >
            <Route exact path='/' element={<HomePage />}></Route>
            <Route exact path='/gpa' element={<GpaPage />}></Route>
            <Route exact path="/cgpa" element={<CgpaPage />}></Route>
            <Route exact path='/percentage' element={<PercentagePage />} ></Route>
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  )
}

export default App