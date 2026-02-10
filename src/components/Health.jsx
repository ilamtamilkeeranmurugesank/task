import React from 'react'

const Health = () => {
  return (
    <>
    <div className='h1'>
        <h2>Health and Safety Coordinator</h2>
        <p>Hamburg, Germany / FULL-TIME</p>
    </div>
    <div className='h3'>
        <h2>Summary</h2>
        <p>As a Health and Safety Coordinator, you are responsible for ensuring that both the regulatory <br /> and company-specific health and safety legislation and regulations are followed both off- and <br /> on-site. In this role, you will be reporting directly to the Chief Health and  Safety Manager, and <br /> are expected to carry out a diverse and in-depth analysis of the current health and safety <br /> practices. </p>
    </div>
    <div className='h3'>
        <h2>Key Responsibilities</h2>
        <p>You will monitor the whole construction cycle and ensure that firstly, all of the expected health <br /> and safety protocols are being followed. Secondly, you analyze the current workflows and <br /> develop an in-depth understanding of the bottlenecks and potential risks associated with <br /> particular protocols. </p>
    </div>
    <div className='h3'>
        <h2>Key Skills</h2>
        <p>Health and safety regulatory experience, preferably for 5 years or more. <br />

                 Excellent communication and project management skills. <br />

                 Full fluency in industry-specific health and safety software. <br />

                 Ability to work as part of a flexible and adaptable team.</p>
    </div>
    <div className='h3'>
        <h2>What We Offer</h2>
        <p>At Stornoway, you will be able to work with the latest technologies in the industry. <br />

As standard, all of our employees are fully covered by our extensive health insurance, including dental and maternity.
<br />
We also offer a full 30 days of paid annual leave, plus our annual company-wide team-building weekend away. <br />

All protective gear and attractive offices in multiple locations are also available for the successful candidate. </p>
    </div>
    <div className='h6'>
        <h2>Apply</h2>
        <div>
            <label htmlFor="Name*">Name*</label> <br />
            <input className='h7' type="text" name='text' placeholder='Your Name' /> <br />
            <label htmlFor='Last name'>Last Name</label> <br />
            <input className='h7' type="text" name='text' placeholder='Last Name' /> <br />
            <label htmlFor="email">Your Email*</label> <br />
            <input className='h7' type="email" name='email' placeholder='Your Email Address'/> <br />
            <label htmlFor="Message">Message*</label> <br />
            <input className='h8' type="text" name='text' placeholder='Enter your message' /> <br />
        </div>
    </div>
    <div className='but1'>
        <button className='btn2' type='button'>Submit</button>

    </div>
    
    
    
    </>
  )
}

export default Health