import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const [username,setusetname]=useState();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_09d6yaq', 'template_31toyfs', form.current, 'AhRD_N7h8nTsJGKIw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact" id="contact">
        <div className="heading">
          <h2>Contact</h2>
          <span>Connect With Me</span>
        </div>
        <div className="contact-form"> 
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" value={username} name="user_name" placeholder="Your Name" />
            <input type="email" name="user_email" placeholder="Your Email" />
            <input className='message' type="text" name="message" placeholder="Your Message" />
            <textare name="" id="" cols="30" rows="10" placeholder="Write Message Here..."></textare>
            <input type="submit" value="Send" className="contact-button" />
          </form >
        </div>
      </div>
  )
}

export default Contact