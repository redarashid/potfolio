import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero flex'>
      <div className='left-section border'>
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
          <div className='icon icon-instagram'></div>
          <div className='icon icon-github'></div>
          <div className='icon icon-linkedin'></div>
        </div>
      </div>

      <div className='left-section animation border'>Right</div>
    </section>
  )
}

export default Hero
