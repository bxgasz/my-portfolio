import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'

import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import React from 'react'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Every Tech or Language I Use</p>
        <h2 className={`${styles.sectionHeadText}`}>Tech</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
        {technologies.map((tech, index) => (
          <motion.div variants={fadeIn("up", "spring", 0.5 * (index / 6), 0.2)} className="flex justify-center items-center relative z-10 w-24 h-24 bg-tertiary p-2.5 rounded-full transition duration-300 transform hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]" key={tech.name}>
            <img src={tech.icon} alt={tech.name} className="object-contain w-[80%] " />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')