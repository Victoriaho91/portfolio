import React from 'react'
import Typed from 'react-typed';
import * as introStyles from '../styles/intro.module.css'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import sal from 'sal.js'
import '../../node_modules/sal.js/dist/sal.css'
import DownArrow from '../images/arrow.svg'


const strings = [
  '^300 Web Developer.',
  'Creator.',
  'Fullstack Engineer.'
]


export default function Intro (){
  sal({
    threshold:1,
    once: true
  });
  return(

    <div id="intro-container" className={introStyles.introContainer}>

      <div className={introStyles.intro}>
        <div className={introStyles.introText}>
          <span
            // data-sal-duration="1000"
            // data-sal="slide-left"
            // data-sal-delay="500"
            // data-sal-easing="ease-out-bounce"
          >
            Hey there, <br/>
          </span>
          <span
            // data-sal-duration="1000"
            // data-sal="slide-left"
            // data-sal-delay="900"
            // data-sal-easing="easeOutCubic"
          >
            I'm <span style={{color:'#634EFF'}}> Victoria</span>;<br/>
          </span>

          <span
          // data-sal-duration="1000"
          // data-sal="slide-left"
          // data-sal-delay="1000"
          // data-sal-easing="easeOutCubic"

          >
          <Typed strings={strings} typeSpeed={90} backSpeed={40}  smartBackspace={true} loop/>


          </span>

        </div>

      </div>

      <div className={introStyles.buttonContainer}
        // data-sal-duration={"1200"}
        // data-sal={"fade"}
        // data-sal-delay={"2500"}
        // data-sal-easing={"ease"}
        // data-sal-once
        >
            <AnchorLink className={introStyles.button} to='/#about-container'  title='about'>

            <div className={introStyles.downArrow}>
                <img className={introStyles.arrrow} style={{width: '4rem'}} src={DownArrow} alt="down arrow" />

            </div>
            </AnchorLink>


      </div>
    </div>

  )
}
