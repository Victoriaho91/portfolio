import React from 'react'
import Typed from 'react-typed';
// import '../fonts/Montserrat-Thin.ttf'
// import '../fonts/Montserrat-SemiBold.ttf'

const strings = [
  'Fullstack Engineer.',
  'Creator.',
  'Visual Thinker.',
  'Daydreamer.'
]


export default function Intro (){
  // const typed = new Typed('.element', {strings})
  return(
    <div id="intro-container" style={{height: 800}}>
      <div className='intro'>
        <h1 style={{marginTop: 40, fontSize: '5vw'}}>Hi, my name is Victoria Ho.</h1>
        <span style={{fontSize: '3vw'}}>
        <Typed strings={strings} typeSpeed={80} backSpeed={50} loop/>
        </span>

      </div>
      {/* <span className='element'></span> */}
    </div>
  )
}
