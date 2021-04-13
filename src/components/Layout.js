import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Intro from './Intro'
import Projects from '../pages/Projects/index'
import Contact from './Contact'
import * as contentStyles from '../styles/content.module.css'




export default function Layout (){
  return(
    <div className="layout" >
      <Navbar />
      <div className={contentStyles.content}>
        <Intro></Intro>
        <About ></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <footer>
        <p>Footer here</p>
      </footer>
    </div>
  )
}
