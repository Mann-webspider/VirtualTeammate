import Image from 'next/image'
// import React, { useEffect } from 'react'
import heroImg from "../public/businessman-working-laptop.jpg"
import "./Hero.css"
import Link from 'next/link'
import { HiArrowSmRight } from "react-icons/hi";



const Button = (props) => {
    return(<Link href={'#'} className='no-underline'><button className=' bg-gradient-to-r from-blue-800 to-cyan-500 py-2 hover:translate-x-4 duration-300 active:scale-90 rounded-full font-bold flex items-center justify-between lg:font-bold lg:text-xl pl-8 text-white'>{props.text} <span className='ml-4 mr-2'><HiArrowSmRight className='h-12 w-12 bg-black text-white rounded-full p-2 '/></span> 
                    </button></Link>)
}

function Hero() {
    
    return (
        <div  className='scroll-smooth lg:mt-24 h-screen relative md:h-fit  lg:h-screen bg-transparent flex   lg:items-start md:items-center  lg:flex-row lg:px-0 '>
                <Image src={heroImg} className='absolute brightness-[0.60] z-[-1] object-[69%] object-cover shadow-2xl h-full w-full' alt='heroImg' loading='lazy' />
            <div   className="left  md:text-white lg:text-white  lg:w-3/4 py-32 flex md:bg-transparant  lg:h-screen  lg:px-32 flex-col  lg:justify-center justify-start  md:flex md:justify-start  px-4 text-white   md:items-start ">
                <h2 className='text-5xl lg:text-7xl py-8 font-bold lg:my-4 md:py-4 md:text-6xl'>We always believe that <span className='text-yellow-600 xl:text-8xl'>Time</span> is <span class='text-cyan-200 xl:text-8xl'> Money</span> and value to .it is a virtue.</h2>
                <p className=' text-xl my-4 lg:text-xl py-8 lg:font-medium'>“There is no such thing as a self-made man. You will reach your goals only with the help of others.”</p>
                <div>

                <Button text = {"Try a Consultation"}/>
                </div>
            </div>
           
        </div>
    )
}

export default Hero