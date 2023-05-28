import React from 'react'


import Link from 'next/link'
import { HiArrowSmRight } from "react-icons/hi";
function Interaction() {
  return (
    <section className='flex flex-col  h-fit lg:h-fit p-0 m-0 bg-background   lg:items-center lg:justify-center pb-16 '>
      <div className=' lg:w-screen lg:h-fit lg:py-24 lg:flex-row lg:items-center lg:flex lg:justify-center md:items-center md:flex md:flex-col md:px-16  md:justify-center  lg:px-16 flex flex-col justify-center items-center bg-[#000000e3] md:py-16 py-16 px-8'>

        

        <div  className="right lg:w-2/3 text-white ">
          <h2 className='lg:font-bold font-bold text-5xl px-8 lg:px-16  pb-8'>
          What does a Virtual Teammate do?
          </h2>

          <p className='text-gray-400 px-8 pb-8 font-medium text-lg lg:px-16'>
          If it steals your energy or you don't like doing it, we'll take care of it. 
          </p>

          <div className=' w-fit h-fit flex justify-center items-center flex-col lg:flex-row md:flex-row gap-4'>
            <Link href={'freeConsult'} className='no-underline text-black w-fit md:pr-4 lg:ml-16'><button className=' bg-secondary pointer text-col shadow-2xl active:scale-90   hover:translate-x-4 duration-600  py-2 rounded-tr-[2rem] hover:rounded-full transition-all rounded-bl-[2rem] font-medium flex items-center justify-between lg:font-bold pl-8  text-lg '>Try a Virtual Assistant for Free  <span className='ml-4 mr-2'><HiArrowSmRight className='h-12 w-12 bg-primary text-[#000] rounded-full p-2 ' /></span>
            </button></Link>
            <Link href={"#"} className='flex hover:translate-x-4 transition duration-300 lg:ml-8 hover:underline-offset-2 '> <p className='font-semibold text-lg underline'> Book a Virtual Teammate </p><span className='font-light '><HiArrowSmRight className='h-8 w-8 text-[#fff] font-light ' /></span> </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interaction