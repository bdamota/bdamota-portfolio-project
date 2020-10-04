import React from 'react';

function Nav () {
    return (
      <header id="home">

      <nav id="nav-wrap">
         <ul id="nav" className="nav">
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#web">Portfolio</a></li>
            <li><a className="smoothscroll" href="#portfolio">Resume</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
               <h1>Briana daMota</h1>
         </div>
      </div>
   </header>
    );
  }


export default Nav;
