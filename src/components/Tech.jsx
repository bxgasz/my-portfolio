import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'

import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Every Tech or Language I Use</p>
        <h2 className={`${styles.sectionHeadText}`}>Tech</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-25">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')