import { motion } from 'framer-motion';
import React from 'react'
import { SocialIcon } from 'react-social-icons'
type Props = {}

function Header({}: Props) {
  return (
    <header className=' sticky top-0 p-4 flex flex-row items-start justify-between  mx-auto max-w-6xl z-20
    xl:items-center'>
        <motion.div 
            initial={{
                x:-400,
                opacity : 0,
                scale : 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center' >
            {/* Social Icons */}
            <SocialIcon url="https://ir.linkedin.com/in/alireza-fayazi/" fgColor='gray'  bgColor='transparent'/>
            <SocialIcon url="https://github.com/alirezafayazi" fgColor='gray'  bgColor='transparent'/>
        </motion.div>
        <motion.div
            initial={{
                x:500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration:1.5
            }}
            className='flex flex-row items-center cursor-pointer  text-gray-400'>
            <SocialIcon 
                network='email'
                fgColor='gray'
                bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm'>
                Get in touch
            </p>
        </motion.div>
    </header>
  );
}

export default Header