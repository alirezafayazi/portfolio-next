import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ex1pc from './../public/AlirezaFayazi.jpg'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='relative flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     w-[320px] md:w-[450px] xl:w-[600px] snap-center bg-[#292929] p-7 hover:opacity-100
     opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>

        <motion.div
            initial={{y:-100 , opacity:0}}
            whileInView={{y:0 , opacity:1 }}
            transition={{duration:1.2}}
            viewport={{once: true }}
            className='-mb-4'
        >
             <Image 
                src={ex1pc}
                className='w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover 
                object-center'
                alt=''
            />
        </motion.div>
           
        
        <div className='px-0 md:px-16 self-start'>
            <h4 className='text-2xl font-light'>Artificial Intelligence</h4>
            <p className=' font-semibold text-1xl mt-1'>Alireza</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-5 w-5 rounded-full' src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="" />
                <img className='h-5 w-5 rounded-full' src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="" />
                <img className='h-5 w-5 rounded-full' src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="" />
            </div>
            <p className='my-3 uppercase font-light text-sm '>started work... = Ended...</p>
            <ul className='list-disc space-y-1 ml-6 text-base '>
                <li>Summray points Summray points </li>
                <li>Summray points Summray points </li>
                <li>Summray points Summray points </li>
                <li>Summray points Summray points </li>
                <li>Summray points Summray points </li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard