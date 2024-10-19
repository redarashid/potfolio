import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <i class="fa-solid fa-envelope"></i>
        Contact US
      </h1>
      <p className='sup-title'>
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className='flex'>
        <form className=''>

          <div className='flex'>
            <label htmlFor='email'>Email Address:</label>
            <input placeholder='Email Address' required type='email' id='email'/>
          </div>

          <div className='flex' style={{marginTop: '24px'}}>
            <label htmlFor='message'>Your Message:</label>
            <textarea  placeholder='Your Message' name='' id='message'></textarea>
          </div>

          <button className="submit">Submit</button>
        </form>

        <div className='animation'></div>
      </div>
    </section>
  )  
}

export default ContactUs
