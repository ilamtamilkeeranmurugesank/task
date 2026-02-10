import React from 'react'
import { Link } from 'react-router-dom'


const Careers = () => {
  return (
    <>
      <div className='titl1'>
        <h2>Careers</h2>
      </div>
       <h2 className='tit1'>Open Positions</h2>
       <div className='title3'>

       <div className='tit2'>
        <h2>01</h2>
        <Link to="/Health"> <p>Health and Safety Coordinator - Hamburg, Germany</p></Link>
        <p>FULL-TIME</p>
       </div>
       <div className='tit2'>
        <h2>02</h2>
        <Link to="/Construction"> <p> Construction Safety Manager - Hamburg, Germany</p></Link>
        <p>FULL-TIME</p>
       </div>
       <div className='tit2'>
        <h2>03</h2>
        <Link to="/Cengineer"><p>Construction Engineer - Hamburg, Germany</p></Link>
        <p>FULL-TIME</p>
       </div>
       </div>
       
    
    
    
    
    
    
    
    </>
  )
}

export default Careers