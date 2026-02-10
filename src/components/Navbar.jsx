import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='top'>
        <h1><Link to="/Stornaway">Stornaway</Link></h1>
        {/* <h1>Stornoway</h1> */}
        
        <div>
            <ul>
               
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Careers">Careers</Link></li>
                <li><Link to="/Contact Us">Contact Us</Link></li>
            </ul>
        </div>

    </div>
    
        {/* <div className='p2'>

            <h2>Quality You Can Trust</h2>
        <div>

        <input type="button">Get a Quote</input>

        </div>
    
    
        </div>
     */}
    
    
    </>
  )
}

export default Navbar