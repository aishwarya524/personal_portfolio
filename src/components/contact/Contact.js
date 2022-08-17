import React,{useRef} from 'react'
import './Contact.css'
import {MdOutlineEmail, MdOutlineLocationCity, MdOutlineCall} from 'react-icons/md'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fedz57b', 'template_3zowqcm', form.current, 'YrdpEY3c1qZzI3n1m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>aishushekar6@gmail.com</h5>
            <a href='mailto:aishushekar6@gmail.com'>Send a message</a>
          </article>
          <article className='contact-option'>
            <MdOutlineCall/>
            <h4>Phone</h4>
            <h5>+91 9916141005</h5>
            <a href='tel:9916141005'>Give a call</a>
          </article>
          <article className='contact-option'>
            <MdOutlineLocationCity/>
            <h4>Location</h4>
            <h5>Bangalore, India</h5>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required/>
          <input type='email' name='email' placeholder='Your email' required/>
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>         
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact