import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
       <Link to="https://api.whatsapp.com/send?phone=+91 9324214404&amp;text=Hi I need to know about Interior Designing"
        className="float" target="_blank"><i className="fab fa-whatsapp my-float"></i></Link>
<Link className="wp-call-button" to="tel:+91 9324214404"></Link>
       <header className="header">
      
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
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
  
      <div style={{
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
             <Link  className="menu__link" to='Services'>Services </Link>
          </li>
          <li class="menu__item">
             <Link  className="menu__link" to='Gallery'>Gallery </Link>
          </li>
          <li class="menu__item">
              <a className="menu__link" href="#">Contact Us</a>
          </li>
          </ul>
         
      </div>
      </nav>
      </header>
    </div>
  )
}
