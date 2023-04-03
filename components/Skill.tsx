import React from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';

type Props = {directionLeft?:boolean , icon:any}

function Skill({directionLeft , icon}: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
      <motion.div
        initial={{
          x:directionLeft ? -50 : 50,
          opacity: 0
        }}
        transition={{ duration: 1}}
        whileInView={{opacity:1 , x:0}}
        className='relative w-16 h-16 md:w-24 md:h-24 xl:h-28 xl:w-28'
      >
        <Image
          src={icon}
          alt=''
          className='rounded-full border border-gray-400 filter group-hover:grayscale
           transition duration-300 ease-in-out object-contain '
        />
      </motion.div>
      <div className='absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300
      ease-in-out group-hover:bg-white w-16 h-16 md:w-24 md:h-24 xl:h-28 xl:w-28 z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='xl:text-3xl md:text-2xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
            
        
    </div>
  )
}

export default Skill