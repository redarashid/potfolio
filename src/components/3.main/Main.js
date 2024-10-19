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


      <section className='flex right-section'>

        {['aa', 'bb', 'cc', 'dd', 'ff', 'ee', 'ww', 'rr'].map((items)=> {
          return (
            <article key={items} className=' card'>
          <img width={327} src='./1 (1).jpg' alt=''/>

          <div className='box'>
            <h1 className='title'>Landing Page 2</h1>
            <p className='sup-title'>Lorem ipsum dolor sit amet consectetur elit<br/> adipisicing . Ex
              tempore dolor in<br/> accusantium laudantium accusamus.
            </p>

            <div className='icons flex'>
              <div style={{ gap: "11px" }} className="flex">
                <i class="fa-solid fa-link"></i>
                <i class="fa-brands fa-github"></i>
              </div>

              <a href='#more' className='link flex'>
                More
                <span style={{ alignSelf: "end" }}><i class="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </article>
          )
        })}
        

        

      </section>
    </main>
  )
}

export default Main
