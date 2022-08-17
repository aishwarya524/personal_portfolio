import React from 'react'
import './Nav.css'
import {AiOutlineBook, AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBookContent, BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#header' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#resume' onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''}><AiOutlineBook/></a>
      <a href='#project' onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><BiBookContent/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
