import React from 'react'


import Link from 'next/link'
import { HiArrowSmRight } from "react-icons/hi";
function Interaction() {
  return (
    <section className='flex flex-col  h-fit lg:h-fit p-0 m-0    lg:items-center lg:justify-center  '>
      <div className=' lg:w-screen lg:h-fit lg:py-24 lg:flex-row lg:items-center lg:flex lg:justify-center md:items-center md:flex md:flex-col md:px-16  md:justify-center  lg:px-16 flex flex-col justify-center items-center bg-[#000000e3] md:py-16 py-16 px-8'>

        

        <div  className="right lg:w-2/3 text-white w-full">
          <h2 className='lg:font-bold font-bold lg:text-5xl text-4xl px-4 lg:px-16  pb-8'>
          What does a Virtual Teammate do?
          </h2>

          <p className='text-gray-300 px-4 pb-8 font-medium text-xl lg:px-16'>
          If it steals your energy or you do not like doing it, we will take care of it. 
          </p>

          <div className=' w-fit h-fit flex justify-center items-center flex-col lg:flex-row md:flex-row gap-4'>
            <Link href={'/get-started'} className='no-underline text-black w-fit md:pr-4 lg:ml-16'><button className=' bg-gradient-to-r from-blue-800 to-cyan-500 pointer text-white shadow-2xl active:scale-90   hover:translate-x-4 duration-600  py-2 rounded-full hover:rounded-full transition-all  font-medium flex items-center justify-between lg:font-bold pl-8  text-md '>Try a Virtual Teammate for Free  <span className='ml-4 mr-2'><HiArrowSmRight className='h-12 w-12 bg-black text-white rounded-full p-2 ' /></span>
            </button></Link>
            <Link href={"#"} className='flex hover:translate-x-4 transition duration-300 lg:ml-8 hover:underline-offset-2 '> <p className='font-semibold text-lg underline'> Book a Virtual Teammate </p><span className='font-light '><HiArrowSmRight className='h-8 w-8 text-[#fff] font-light ' /></span> </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interaction