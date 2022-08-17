import React from 'react'
import './Header.css'
import CallToAction from './CallToAction'
import HeaderSocials from './HeaderSocials'
import photo from '../../assets/photo.png'

const header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello, I'm</h5>
        <h1>Aishwarya</h1>
        <h5 className='text-light'>Web Developer</h5>
        <CallToAction />
        <HeaderSocials />
        <div className='me'>
          <img src={photo} alt='photo' className='photo-img'/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header