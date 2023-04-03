import Image from 'next/image';
import React from 'react';
import {motion} from 'framer-motion';
import project1 from './../public/Project1.png';
type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='relative flex flex-col h-screen items-center text-left justify-evenly overflow-hidden
        md:flex-row mx-auto z-0  '
    >
        <h3 className='uppercase absolute top-24 tracking-[20px] text-gray-400 text-2xl pl-4'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory mt-10 z-20 '>
        {projects.map((project,i )=>(
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-2
                    items-center justify-center px-6 xl:p-44 h-[700px] -mb-5'>
                        <motion.div
                            initial={{ y:-300 , opacity:0 }}
                            whileInView={{ y:0 , opacity:1}}
                            transition={{ duration:1.2}}
                            viewport={{ once:true}}
                            className='w-[300px] md:w-[450px] relative '
                        >
                            <Image
                            src={project1}
                            alt=''
                            />
                        </motion.div>
                        
                        <div className='space-y-8 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-2xl md:text-3xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Case {i+1} study of {projects.length}
                                </span>
                                :UPS clone
                            </h4>
                            <p className='text-lg md:text-left text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint adipisci explicabo temporibus? Provident recusandae at ut molestiae nobis molestias illum, dignissimos vel officiis tempora eum ipsum, voluptatibus laboriosam repellendus?
                            </p>
                        </div>
                    </div>
            ))}

        </div>
        <div className='absolute top-[25%] bg-[#F7AB0A]/10 w-full
        left-0 h-[430px] -skew-y-12'>

        </div>
        
    </motion.div>
  )
}

export default Projects