import React, { useState } from 'react'

const Stornaway = () => {
    const [text,setText]=useState("");
  return (
    <div>
        <div className='p2'>
            <h1>Quality you can trust</h1>
        </div>
        <div className='btn'>
            <button className='btn1' type='button'>Get a Quote</button>
        </div>
        <div className='title1'>
            <h2>ABOUT <br /> STORNOWAY</h2>
        </div>
        <div className='para1'>
            <p className='para1'>Stornoway is a construction company with a long-standing reputation for <br /> excellence. We specialize in commercial property construction but have a small <br /> portfolio of industrial and residential properties. Currently, we cater to the <br /> German market, but are looking to expand internationally.</p>
        </div>
        <div className='title2'>
            <h2>PROJECTS</h2>
        </div>
            <div className='para2'>
            <p>Huawei HQ, Frankfurt</p>
            <p>Rhein-Main Conference Centre, Wiesbaden</p>
            <p>Danske Bank Offices, Hamburg</p>

            </div>
        <div className='btn2'>
            <button className='btn3' type='button'>See More</button>
        </div>
        <div className='content'>
            <div className='section1'>
                <h2 className='t2'>Services</h2>
                <p>Stornoway specializes in commercial construction, <br /> but over the years we have undertaken a number of <br /> projects in industrial and residential property <br /> construction. We are a flexible team with expertise in <br /> all aspects of construction work.</p>
                <button className='btn3' type='button'>More Services</button>
            </div>
            <div className='section2'>
                <div className='t1'>
                    <h2>01</h2>
                    <p>Commercial Construction</p>
                </div>
                <div className='t1'>
                    <h2>02</h2>
                    <p>Industrial Contruction</p>
                </div>
                <div className='t1'>
                    <h2>03</h2>
                    <p>Residential contruction</p>
                </div>
            </div>

        </div>
        <div className="section3">
            <div className='para3'>
            <h2>Careers</h2>
            <p>We are always looking for skilled construction <br /> professionals to join our team. If you think you’d <br /> make a good fit, have a look at our open positions, <br /> or leave an unsolicited application.</p>
            <button className='btn3' type='button'>Open Positions</button>

            </div>
       </div>
        
    </div>
    
  )
}

export default Stornaway;