import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero flex'>
      <div className='left-section'>
        <div className='parent-avatar'>
          <img src='./me-modified.png' className='avatar' alt='me'/>
          <div className="icon-check-alt"></div>
        </div>

        <h1 className='title'>
        Software designer, founder,<br/>
        and amateur astronaut.
        </h1>
        <p className='sup-title'>
        I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and<br/>
        CEO of Planetaria, where we develop technologies that empower regular people to explore<br/>
        space on their own terms.
        </p>
        
        <div className='all-icons flex'>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>

      <div className='left-section animation border'>Right</div>
    </section>
  )
}

export default Hero
