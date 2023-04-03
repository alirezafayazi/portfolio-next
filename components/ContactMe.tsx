import React from 'react'
import {PhoneIcon , MapPinIcon , EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
  };
type Props = {}

function ContactMe({}: Props) {
  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <div className='h-screen relative flex flex-col text-center justify-center md:text-left md:flex-row max-w-4xl items-center mx-auto px-8 '>
        <h3 className='uppercase absolute top-24 tracking-[20px] text-gray-400 text-2xl pl-5'>
            Contact
        </h3>

        <div className='flex flex-col space-y-8 h-3/5 mt-8 '>
            <h4 className='text-xl md:text-3xl font-semibold text-center'>
                I have got just what you need. {' '}
                <span className='decoration-[#f7AB0A]/50 underline'>Lets Talk</span>.
            </h4>

            <div className='space-y-8'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse'/>
                    <p className='md:text-xl'>+989334188237</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse'/>
                    <p className='md:text-xl'>Alirezafayazi@outlook.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse'/>
                    <p className='md:text-xl'>Tehran Iran</p>
                </div>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='grid grid-cols-2 gap-2'>
                <input {...register('name')} className='contantInput' placeholder='Name' type="text" />
                <input {...register('email')} className='contantInput' placeholder='Email' type="email" />
                <input {...register('subject')} className='contantInput col-start-1 col-end-3' placeholder='Subject' type="text" />
                <textarea {...register('message')} className='contantInput col-start-1 col-end-3 ' placeholder='Message'/>
                </div>
                    
                <button className='bg-[#F7AB0A] py-3 px-10 rounded-md text-black font-bold text-lg transition-all duration-300 hover:tracking-widest' type="submit" >Submit</button>
            </form>
        </div>
        
    </div>
  )
}

export default ContactMe