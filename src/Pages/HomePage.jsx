import React, { useEffect } from 'react'
import Calculator from '../Components/Calculator'
import Home from '../Components/Home'
import WhyChooseUs from '../Components/WhyChooseUs'
import { useLocation } from 'react-router-dom';
function HomePage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className=' '>
      <Home />
      <Calculator />
      <WhyChooseUs/>
    </div>
  )
}

export default HomePage