import React, {Component} from 'react'
import * as aboutStyles from '../styles/about.module.css'
import sal from 'sal.js'
import '../../node_modules/sal.js/dist/sal.css'


export default function About (){
  sal({
    threshold:1,
    once: true
  });
  return(
    <div id="about-container" className={aboutStyles.aboutContainer}

    >
      <div className={aboutStyles.aboutCard1}
         data-sal-duration={"1200"}
         data-sal={"slide-right"}
         data-sal-delay={"200"}
         data-sal-easing={"ease"}
      >

        <h2 className={aboutStyles.header} >About Me</h2>
        <div className={aboutStyles.aboutText}>
          <p>
          I'm a Full Stack Engineer with a passion for building elegant and performant UX/UI. I love incorporating intuitive design and usability into the work that I do to deliver meaningful experiences to end-users.
          </p>

        </div>

      </div>


    </div>

  )
}
