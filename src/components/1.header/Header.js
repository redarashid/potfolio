import React, { useState } from 'react'
import './Header.css'

const Header = () => {

  const[showModle, setShowModle] = useState(false)

  return (
    <header className='flex'>
      <button onClick={()=> {
        setShowModle(true)
      }} className='menu icon-menu'></button>
      <div/>

      <nav className='navigate'>
        <ul className='flex'>
          <li> <a href='#about'>About</a> </li>
          <li> <a href='#articles'>Articles</a> </li>
          <li> <a href='#projects'>Projects</a> </li>
          <li> <a href='#speaking'>Speaking</a> </li>
          <li> <a href='#uses'>Uses</a> </li>
        </ul>
      </nav>

      <button>
        light
      </button>


      {showModle && (
        <div className='fixed'>
          <ul className='modle'>
            <li><button className='icon-clos' onClick={()=> {
              setShowModle(false)
            }}></button></li>
            <li> <a href='#about'>About</a> </li>
            <li> <a href='#articles'>Articles</a> </li>
            <li> <a href='#projects'>Projects</a> </li>
            <li> <a href='#speaking'>Speaking</a> </li>
            <li> <a href='#uses'>Uses</a> </li>
          </ul>
      </div>

      )}

    </header>
  )
}

export default Header
