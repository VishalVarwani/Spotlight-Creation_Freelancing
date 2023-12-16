import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
       <header className="header">
      
      <nav class="navbar navbar-light bg-white">
          <div className='navbar_brand'>
          <a href="index.html"><div className="logo"></div></a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"  >
      <div className="burger">
              <div className="burger__patty" />
              <div className="burger__patty" />
              <div className="burger__patty" />
              </div>
      </button>
  
      <div style={{ position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                 
               
                 }}class="collapse navbar-collapse" id="navbarText">
      <div className="menu__brand">
              <a href="index.html"><div className="logo"></div></a>
          </div>
          <ul class="menu__list">
          <li class="menu__item active">
              <Link className="menu__link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li class="menu__item">
             <Link  class="menu__link" to='Services'>Services </Link>
          </li>
          <li class="menu__item">
             <Link  class="menu__link" to='Gallery'>Gallery </Link>
          </li>
          <li class="menu__item">
              <a class="menu__link" href="#">Contact Us</a>
          </li>
          </ul>
         
      </div>
      </nav>
      </header>
    </div>
  )
}
