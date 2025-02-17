import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[200px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center" options={{ max: 45, scale: 1, speed: 450 }}>
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={`${styles.sectionSubText}`}>Intrudoction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.5, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Saya seorang Fullstack Developer yang memiliki passion dalam membangun aplikasi web dan sistem yang scalable, efisien, serta user-friendly. Dengan pengalaman di Laravel, Livewire, Vue.js dan database management, saya siap menghadirkan solusi teknologi yang inovatif.
      Saya selalu antusias mempelajari teknologi baru dan mencari tantangan dalam proyek-proyek menarik. Saat ini, saya terbuka untuk peluang Fullstack Developer, Software Developer, atau Web Developer – baik full-time, remote, maupun freelance.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")