import React from 'react'

const Hero = () => {
  return (
    <React.Fragment>
      <section>
        <div>
          <div className='centered'>
            <div>
              <p style={{color:'white'}}>Your Foundation To Build A Reliable Future</p>
            </div>
            <div>
              <button className='hero-btn'>Login</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className='hero-btn'>Contact</button>
            </div >
            {/* <div>
              <button>Login</button>
              <button>Dashboard</button>
              <button>Report</button>
              <button>Form</button>
              <button>Contact</button>
              <button>Support</button>
            </div> */}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Hero