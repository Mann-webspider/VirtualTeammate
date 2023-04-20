import Image from 'next/image'
import React from 'react'

import heroImg from "../public/businessman-working-laptop.jpg"
import "./Hero.css"
import Link from 'next/link'
import { HiArrowSmRight } from "react-icons/hi";

function Hero() {
    return (
        <div className=' h-screen bg-gradient-to-br from-[#aacfb9] to-white flex flex-col-reverse justify-around lg:items-center  lg:flex-row lg:px-8 px-4'>
            <div className="left max-w-xl lg:w-2/4 flex    h-96 lg:h-full lg:pr-4 flex-col  lg:justify-center justify-around ">
                <h2 className='text-5xl lg:text-7xl font-bold lg:my-4'>Take Control of Your <span className='text-[#6aa381]'>To-Do List</span> With a Virtual Assistant</h2>
                <p className='text-gray-500 text-xl my-4 lg:text-lg lg:font-regular'>“There is no such thing as a self-made man. You will reach your goals only with the help of others.”</p>
                <Link href={'#'}><button className=' bg-[#aacfb9] py-2 rounded-full font-medium flex items-center justify-between lg:font-medium pl-8'>Get start -- Now <span className='ml-4 mr-2'><HiArrowSmRight className='h-12 w-12 bg-black text-white rounded-full p-2 '/></span> 
                    </button></Link>
            </div>
            <div className="right h-min max-w-xl lg:w-1/2  ">
               
                <div className='  object-center h-min lg:w-full lg:h-full' >
                    <div className=''>
                        <Image src={heroImg} className='hero   object-cover rounded-[3.5rem] z-0 ' />
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Hero