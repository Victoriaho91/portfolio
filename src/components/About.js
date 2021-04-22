import React, {Component} from 'react'
import * as aboutStyles from '../styles/about.module.css'
import sal from 'sal.js'
import '../../node_modules/sal.js/dist/sal.css'


export default function About (){
  sal({
    threshold:1,
    once: false
  });
  return(
    <div id="about-container" className={aboutStyles.aboutContainer}>

      <h2 className={aboutStyles.header} >About Me</h2>
      {/* <div>
        <p
        data-sal-duration={"1200"}
        data-sal={"slide-left"}
        data-sal-delay={"200"}
        data-sal-easing={"ease"} >
        Fromage frais cheese and wine red leicester. Croque monsieur cheese strings cheese triangles cheeseburger mascarpone swiss ricotta cauliflower cheese. Blue castello pecorino emmental cheesy grin lancashire monterey jack who moved my cheese say cheese. Cheddar cheesy grin.
        </p>
        <p
        data-sal-duration={"1200"}
        data-sal={"slide-right"}
        data-sal-delay={"1000"}
        data-sal-easing={"ease"}>
          Emmental stinking bishop macaroni cheese. Pecorino brie cheese strings danish fontina cauliflower cheese goat edam everyone loves. Smelly cheese fromage who moved my cheese emmental airedale fromage frais taleggio paneer. Smelly cheese babybel roquefort stilton blue castello port-salut the big cheese.
        </p>
      </div> */}
    </div>

  )
}
