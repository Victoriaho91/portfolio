import React, {Component} from 'react'
import * as aboutStyles from '../styles/about.module.css'
import sal from 'sal.js'
import '../../node_modules/sal.js/dist/sal.css'
import Photo from '../images/Photo.png'

export default function About (){
  sal({
    threshold:1,
    once: true
  });
  return(
    <div id="about-container" className={aboutStyles.aboutContainer}

    >
      <div className={aboutStyles.aboutCard1}
      >

        <div className={aboutStyles.aboutText}
         data-sal-duration={"1200"}
         data-sal={"slide-right"}
         data-sal-delay={"100"}
         data-sal-easing={"ease"}
        >
          <h2 className={aboutStyles.header} >About Me</h2>
          <p>
          I'm a Full Stack Engineer born and raised in NYC. I have a passion for building elegant and performant UX/UI by incorporating intuitive design and usability into the work that I do to deliver meaningful experiences to end-users.
          </p>

        </div>

        <img className={aboutStyles.photo}src={Photo}
        data-sal-duration={"1200"}
        data-sal={"slide-right"}
        data-sal-delay={"700"}
        data-sal-easing={"ease"}
        ></img>
        </div>

    </div>

  )
}
