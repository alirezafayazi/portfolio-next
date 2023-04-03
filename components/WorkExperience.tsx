import React from 'react';
import {motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';
type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
        initial={{

        }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
          max-w-full px-10 justify-evenly space-y-28 mx-auto items-center  '>
        <h3 className='uppercase absolute top-24 tracking-[20px] text-gray-400 text-2xl pl-4'>
            Experience
        </h3>

        <div className='w-full flex overflow-x-scroll snap-mandatory pb-8 px-1 md:mt-20 space-x-5 xl:h-[550px] md:h-[500px] '>
            <ExperienceCard></ExperienceCard>
            <ExperienceCard></ExperienceCard>
            <ExperienceCard></ExperienceCard>
            <ExperienceCard></ExperienceCard>
        </div>
    </motion.div>
  )
}

export default WorkExperience