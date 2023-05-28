import Image from 'next/image'
// import React, { useEffect } from 'react'
import heroImg from "../public/businessman-working-laptop.jpg"
import "./Hero.css"
import Link from 'next/link'
import { HiArrowSmRight } from "react-icons/hi";



const Button = (props) => {
    return(<Link href={'#'} className='no-underline'><button className=' bg-primary py-2 hover:translate-x-4 duration-300 active:scale-90 rounded-full font-bold flex items-center justify-between lg:font-bold lg:text-xl pl-8 text-white'>{props.text} <span className='ml-4 mr-2'><HiArrowSmRight className='h-12 w-12 bg-black text-white rounded-full p-2 '/></span> 
                    </button></Link>)
}

function Hero() {
    
    return (
        <div  className='scroll-smooth mt-24 h-fit  md:h-fit py-16 lg:h-screen bg-gradient-to-br from-primary via-[#f2f2f2] to-secondary flex flex-col-reverse justify-around lg:items-center md:items-center  lg:flex-row lg:px-8 px-4'>
            <div   className="left max-w-xl lg:w-2/4 flex  h-96 lg:h-full lg:pr-4 flex-col  lg:justify-center justify-around md:max-w-screen-md md:flex md:justify-start     md:items-start md:px-16">
                <h2 className='text-5xl lg:text-7xl  font-bold lg:my-4 md:py-4 md:text-6xl'>Take Control of Your <span className='text-primary'>To-Do List</span> With a Virtual Teammate</h2>
                <p className='text-col text-xl my-4 lg:text-xl lg:font-medium'>“There is no such thing as a self-made man. You will reach your goals only with the help of others.”</p>
                <div>

                <Button text = {"Try a Consultation"}/>
                </div>
            </div>
            <div className="right h-full max-w-xl  lg:w-2/3 md:max-w-screen-md md:flex md:justify-center md:items-center md:py-8 py-16">
                {/* <div className="block w-20 h-20 rounded-[1.5rem] bg-black z-10 lg:w-40 lg:h-40 lg:rounded-[3.5rem]">
                </div> */}
                <div className='  relative  object-center h-full lg:w-full lg:h-full md:items-center '  >
                    <div className=' h-full  flex justify-center w-full'>
                        <Image src={heroImg} className='  object-cover rounded-tr-[3rem] rounded-bl-[3rem] shadow-2xl h-full w-full' alt='heroImg' loading='lazy' />
                        {/* <Image src={heroImg} className='w-full h-full object-cover rounded-[3rem] shadow-2xl lg:rounded-[4rem] md:w-fit' /> */}
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Hero