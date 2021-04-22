import React from 'react'
import Typed from 'react-typed';
import * as introStyles from '../styles/intro.module.css'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import sal from 'sal.js'
import '../../node_modules/sal.js/dist/sal.css'

const strings = [
  'Fullstack Engineer.',
  'Creator.',
  'Visual Thinker.',
  'Daydreamer.'
]


export default function Intro (){
  sal({
    threshold:1,
    once: false
  });
  return(
    <div id="intro-container" className={introStyles.introContainer}>
      <div className={introStyles.intro}>
        <span className={introStyles.introText}
        data-sal-duration={"2000"}
        data-sal={"slide-up"}
        data-sal-delay={"1200"}
        data-sal-easing={"ease-out-bounce"}
        >
        Hello, I'm Victoria. <br/>
        </span>
        <span style={{marginTop:'-6vw' ,fontSize: '2vw',  display: 'inline-block',verticalAlign: 'middle'}}
        data-sal-duration={"1200"}
        data-sal={"fade"}
        data-sal-delay={"1000"}
        data-sal-easing={"ease"}
        >
        <Typed strings={strings} typeSpeed={80} backSpeed={50} loop/>

        </span>
      <div className={introStyles.buttonContainer} >
      <AnchorLink className={introStyles.button} to='/#about-container'  title='about'>
      View More
      {/* <button className={introStyles.button} >View More</button> */}
      </AnchorLink>
      </div>
      </div>
    </div>
  )
}
