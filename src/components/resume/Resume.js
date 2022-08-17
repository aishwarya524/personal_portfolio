import React from 'react'
import './Resume.css'
import Css from '../../assets/Css-icon.jpg'
import Html from '../../assets/Html-icon.png'
import Java from '../../assets/Java-icon.png'
import Js from '../../assets/Js-icon.png'
import ReactIcon from '../../assets/React-icon.png'
import {MdOutlineWork} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'
import {GoPrimitiveDot} from 'react-icons/go'
import {FaGraduationCap} from 'react-icons/fa'

const Resume = () => {
  return (
    <section id='resume'>
      <h5>What Skills I have</h5>
      <h2>My Resume</h2>
      <div className='heading'><GiSkills className='heading-img'/><h1>Skills</h1></div>
      <div className='skills'>        
        <div className='skill-container'>
          <img src={Html} alt='Html' className='skill-img'/>
          <div className='skill-title'>HTML5</div>
        </div>
        <div className='skill-container'>
          <img src={Css} alt='Css' className='skill-img'/>
          <div className='skill-title'>CSS3</div>
        </div>
        <div className='skill-container'>
          <img src={Js} alt='Js' className='skill-img'/>
          <div className='skill-title'>JavaScript</div>
        </div>
        <div className='skill-container'>
          <img src={ReactIcon} alt='ReactIcon' className='skill-img'/>
          <div className='skill-title'>React</div>
        </div>
        <div className='skill-container'>
          <img src={Java} alt='Java' className='skill-img'/>
          <div className='skill-title'>Java</div>
        </div>
      </div>

      <div className='experience'>
        <div className='heading'><MdOutlineWork className='heading-img'/><h1>Working experience</h1></div>
        <div className='exp'>
            <h2>Application development Analyst</h2>
            <h4> Accenture</h4> 
            <p><GoPrimitiveDot className='exp-dot'/> Involved in planning, implementing and modifying
            telecommunication network designs.</p> 
            <p><GoPrimitiveDot className='exp-dot'/>Daily work involved working on technologies like FTTC, FTTN
            and FTTP networks using GIS tools like SpatialNet, mapInfo.</p>
            <p><GoPrimitiveDot className='exp-dot'/>Involved in the reconciliation process during issues.</p>
            <p><GoPrimitiveDot className='exp-dot'/>Uplifting the service class of different locations across
            regions based on customer requirement in AutoCAD Physical
            Network Inventory (PNI).</p> 
            <p><GoPrimitiveDot className='exp-dot'/>Updating design in SpatialNet tool to align with the field
            data. </p>
            <p><GoPrimitiveDot className='exp-dot'/>Conducted training sessions within the team for knowledge
            transfer.</p>
        </div>
      </div>

      <div className='education'>
      <div className='heading'><FaGraduationCap className='heading-img'/><h1>Educational qualification</h1></div>
          <div className='edu'>
            <h2>Bachelor of Engineering(Electronics and Communication)</h2>
            <h4>RNS Institute of technology</h4> 
          </div>
      </div>
    </section>
  )
}

export default Resume