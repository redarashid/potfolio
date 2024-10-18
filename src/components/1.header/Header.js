
import { useState } from "react";
import './Header.css'
const Header = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <header className="  flex">
      <button onClick={() => {
        setshowModal(true)
      }} className="menu icon-menu flex">    </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="a">About</a>
          </li>

          <li>
            <a href="a">Articles</a>
          </li>
          <li>
            <a href="a">Projects</a>
          </li>
          <li>
            <a href="a">Speaking</a>
          </li>
          <li>
            <a href="a">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="mode flex">
        <span className="icon-moon">  </span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li >
              <button className="icon-close" onClick={() => {
                setshowModal(false)
              }} />   
              
             
              
           
            </li>
            <li>
              <a href="a">About</a>
            </li>
            <li>
              <a href="a">Articles</a>
            </li>
            <li>
              <a href="a">Projects</a>
            </li>
            <li>
              <a href="a">Speaking</a>
            </li>
            <li>
              <a href="a">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;