import React from 'react'
import * as aboutStyles from '../styles/about.module.css'

export default function About (){
  return(
    <div id="about-container" className={aboutStyles.aboutContainer}>

      <h2 className={aboutStyles.header}>About Me</h2>
      <div>
        <p>
        Fromage frais cheese and wine red leicester. Croque monsieur cheese strings cheese triangles cheeseburger mascarpone swiss ricotta cauliflower cheese. Blue castello pecorino emmental cheesy grin lancashire monterey jack who moved my cheese say cheese. Cheddar cheesy grin.
        </p>
        <p>
          Emmental stinking bishop macaroni cheese. Pecorino brie cheese strings danish fontina cauliflower cheese goat edam everyone loves. Smelly cheese fromage who moved my cheese emmental airedale fromage frais taleggio paneer. Smelly cheese babybel roquefort stilton blue castello port-salut the big cheese.
        </p>
      </div>
    </div>

  )
}
