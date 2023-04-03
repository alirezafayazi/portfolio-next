import React from 'react'
import Skill from './Skill'
import {motion} from 'framer-motion'
import pythonIcon from '@./../public/python.svg';
type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
     xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center '>
        <h2 className='absolute top-24 uppercase text-gray-400 tracking-[20px] text-2xl pl-4'>
            Skills
        </h2>
        <h3 className='absolute top-36 uppercase text-gray-400 tracking-[3px] text-xs xl:text-sm md:text-sm sm:text-sm '>
            Hover over a skill for currency profiecienty
        </h3>  
          <div className='grid grid-cols-4 gap-4 absolute top-72 xl:top-56 md:top-60'>
            <Skill icon={pythonIcon}/>
            <Skill icon={pythonIcon}/>
            <Skill icon={pythonIcon}/>
            <Skill icon={pythonIcon}/>
            <Skill icon={pythonIcon} directionLeft={true}/>
            <Skill icon={pythonIcon} directionLeft={true}/>
            <Skill icon={pythonIcon} directionLeft={true}/>
            <Skill icon={pythonIcon} directionLeft={true}/>
            <Skill icon={pythonIcon}/>
            <Skill icon={pythonIcon}/>
            <Skill icon={pythonIcon}/>
            <Skill icon={pythonIcon}/>
        </div>     
        
    </motion.div>
  )
}

export default Skills