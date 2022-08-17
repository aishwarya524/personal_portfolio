import React from 'react'
import './About.css'
import CV from '../../assets/Aishwarya\'s Resume.pdf';
import CallToAction from './../header/CallToAction';

const About = () => {
  return (
    <section id='about'>
      <h5>Get  to know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <p className='about'>Hello everyone, I am Aishwarya. I am an engineering grad, who completed her graduation in 2018. I have previously worked at <b>Accenture</b> as <b>Associate Software Engineer</b> and then as <b>Application Development Analyst</b> for <b>2 years and 9 months</b>.</p>
        
        <p className='about'>I have been learning web dev for quite a while now. I have joined Acciojob bootcamp for Fullstack Development to improve my existing knowledge on front end technologies like <b>HTML, CSS and Javascript</b> and learn backend technologies like <b>Nodejs, Express and MongoDB</b>. I have also been learning <b>java and DSA</b> as part of the bootcamp.</p>

        <div className='about-info'>
          <div className='about-title'>
            <p>Full Name</p>
            <p>Current location</p>
            <p>Availability</p>
          </div>
          <div className='info'>
            <p>: Aishwarya C</p>
            <p>: Bangalore, India</p>
            <p>: Can join immediately</p>
          </div>         
        </div>

        <div>
        <a href={CV} download className='btn'>Download CV</a>
        </div>
      </div>

    </section>
  )
}

export default About