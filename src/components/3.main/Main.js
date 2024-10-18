import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <main className='flex'>
      <section className='left-section flex'>
        <button className='active'>All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>


      <section className='right-section'>Right</section>
    </main>
  )
}

export default Main
