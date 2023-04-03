import React from 'react'
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import profilePic from '../public/AlirezaFayazi.jpg';
import profilePic2 from '../public/AlirezaFayazi_p2.jpg';
import Link from 'next/link';
type Props = {}

const Hero = ({}: Props) => {
    const [text , count] = useTypewriter({
        words : [
                    "Hi, you're on Alireza's website",
                    "guyWhoLovesCocoa",
                    "<>But loves to code more</>"
                ],
                loop : true,
                delaySpeed:2000 
    })
  return (
    <div className='h-screen flex flex-col space-y-10 items-center justify-center text-center overflow-hidden '>
      <BackgroundCircles/>
      <Image 
        src={profilePic2} 
        alt="Alireza Fayazi picture" 
        className="rounded-full relative h-32 w-32 mx-auto object-cover "
      />

      <div className='z-20'>
        <h2 className=' tracking-[10px] text-sm uppercase text-gray-400 pb-2 lg:tracking-[16px]'>
          Software Engineer
        </h2>
        <h1 className=' text-3xl lg:text-4xl font-semibold px-5 pt-3 h-[8rem] w-[22rem] sm:w-[30rem] md:w-[35rem] xl:w-[40rem]'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor="#F7AB0A"></Cursor>
        </h1>
        <div className='flex justify-center '>
          <Link href='#about'><button className='heroButton'>About</button></Link>
          <Link href='#experience'><button className='heroButton'>Experience</button></Link>
          <Link href='#skills'><button className='heroButton'>Skills</button></Link>
          <Link href='#projects'><button className='heroButton'>Projects</button></Link>   
        </div>
      </div>
    </div>
  );
}
export default Hero;