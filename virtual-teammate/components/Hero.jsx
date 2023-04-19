import Image from 'next/image'
import React from 'react'
import mask from "../public/heroMask.png"
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
                {/* <div className="block w-20 h-20 rounded-[1.5rem] bg-black z-10 lg:w-40 lg:h-40 lg:rounded-[3.5rem]">
                </div> */}
                <div className='  object-center h-min lg:w-full lg:h-full' >
                    <div className=''>
                        <Image src={heroImg} className='hero   object-cover rounded-[3.5rem] z-0 ' />
                    </div>
                    {/* <Image src={mask} className=' object-contain absolute top-[-10rem] left-10 mix-blend-screen  '/> */}
                    {/* <svg width="572" height="531" viewBox="0 0 572 531" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-0 mix-blend-screen'>
                        <path d="M182 41C182 18.9086 199.909 1 222 1H442C464.091 1 482 18.9086 482 41V68C482 90.0914 499.909 108 522 108H531.5C553.591 108 571.5 125.909 571.5 148V398C571.5 420.091 553.591 438 531.5 438H388C365.909 438 348 455.909 348 478V490.5C348 512.591 330.091 530.5 308 530.5H41C18.9086 530.5 1 512.591 1 490.5V224.5C1 202.409 18.9086 184.5 41 184.5H142C164.091 184.5 182 166.591 182 144.5V41Z" fill="black" stroke="black" />
                    </svg> */}

                </div>
            </div>
        </div>
    )
}

export default Hero