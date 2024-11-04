import React from 'react'
import pdf from '../../assets/Siddharth Borekar Resume1.pdf'


const CTA = () => {

  return (
    
    <div className="cta">

        <a href={pdf} download className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA