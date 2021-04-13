import React from 'react'
import Typed from 'react-typed';
// import '../fonts/Femen.otf'
import * as introStyles from '../styles/intro.module.css'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import useWindowDimensions from './WindowDimensions'

const strings = [
  'Fullstack Engineer.',
  'Creator.',
  'Visual Thinker.',
  'Daydreamer.'
]


export default function Intro (){
let {width, height } = useWindowDimensions()
console.log('window heigh==>', height)
  return(
    <div id="intro-container" style={{width, height}}className={introStyles.introContainer}>
      <div style={{marginTop: '15vw'}} className={introStyles.intro}>
        <span >
        Victoria Ho |
        <Typed style={{fontSize: '2.5vw',  display: 'inline-block',verticalAlign: 'middle' }}strings={strings} typeSpeed={80} backSpeed={50} loop/>

        </span>
      </div>
      <div className={introStyles.buttonContainer} >
      <AnchorLink to='/#about-container'  title='about'>
      <button className={introStyles.button} >View More</button>
      </AnchorLink>
      </div>
    </div>
  )
}
