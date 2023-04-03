import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import myImage from './../public/fullOfMe.jpg';
type Props = {}

function About({}: Props) {
  return (
    <>
    <motion.div
        initial={{ opacity:0 }}
        transition={{ duration:1.2 }}
        whileInView={{ opacity:1 }}
        className='flex flex-col relative h-screen text-center md:text-left
                    md:flex-row px-10 justify-evenly items-center'>

        <h3 className='absolute top-24 uppercase text-gray-400 tracking-[20px] text-2xl pl-4  '>
            About
        </h3>

        <motion.div
            initial={{
                x:-200,
                opacity:0
            }}
            transition={{
                duration:1.2,
                
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            viewport={{
                once:true
            }}
            className='flex-shrink-0 self-center mx-auto pt-20 pb-8'
            >

            <Image
                src={myImage}
                alt="Alireza Fayazi picture" 
                className='-mb-24 md:mb-0 w-48 h-48
                rounded-full object-cover md:rounded-lg md:w-64 md:h-[350px] xl:w-[400px] xl:h-[500px]'
                />
        </motion.div>
        <div className='space-y-8 px-0 md:px-10 mt-5'>
            <h4 className='text-2xl font-semibold'>
                Here is a {' '} 
                <span className='underline decoration-[#F7AB0A]'>little</span>{' '}
                background
            </h4>
            <p className='text-sm sm:text-base md:text-base lg:text-base xl:text-lg text-justify '>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Born in 2000
                Place of residence in Tehran
                Interested in learning new topics in the field
                of programming.
                I have experience in the field of user
                interface design, back-end topics (database
                and back-end implementation with Django
                and PHP) and network (Windows Server).
            </p>
        </div>
        

    </motion.div>

    
  </>
  )
}

export default About