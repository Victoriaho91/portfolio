import React, { useState, useEffect} from 'react'
// import {Link} from 'gatsby'
// import { HashLink as Link } from 'react-router-hash-link'
import { AnchorLink } from "gatsby-plugin-anchor-links";



export default function Navbar (){

  return(
    <nav id='navbar' style ={ {position: 'fixed',top: '0',width: '100%'}}>
      <div className="links">
        <AnchorLink to='/#intro-container' title='home'>Home</AnchorLink>
        <AnchorLink to='/#about-container' title='about'>About</AnchorLink>
        <AnchorLink to='/#projects-container' title='portfolio'>Portfolio</AnchorLink>
        <AnchorLink to='/#contact-container' title='contact'>Contact</AnchorLink>
      </div>
    </nav>
  )
}

