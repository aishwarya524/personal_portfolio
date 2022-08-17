import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/aishwarya-c-81273a223'><BsLinkedin/></a>
        <a href='https://github.com/aishwarya524'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials