import React from 'react'
import img from "../public/two-smiling-young-businessmen-looking-laptop-screen.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowSmRight } from "react-icons/hi";
function Interaction() {
  return (
    <section className='flex flex-col w-screen h-fit lg:h-screen p-0 m-0  bg-green-50  lg:items-center lg:justify-center pb-16'>
      <div className=' lg:w-screen lg:h-screen lg:flex-row lg:items-center lg:flex lg:justify-center md:items-center md:flex md:flex-col md:px-16  md:justify-center  lg:px-16 flex flex-col justify-center items-center'>

      <div className="left w-96 h-96  lg:w-1/2 md:w-fit mt-16 ">
        <Image src={img} className='w-full h-full object-cover rounded-[3rem] shadow-2xl lg:rounded-[4rem] md:w-fit' />
      </div>

      <div className="right lg:w-1/2">
        <h2 className='lg:font-bold font-extrabold text-5xl px-8 lg:px-16 pt-16 pb-8'>
          Free Consultancy of our Expert Virtual Assistant
        </h2>

        <p className='text-gray-500 px-8 pb-8 font-medium text-md lg:px-16'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga obcaecati consectetur delectus aperiam quae quo nesciunt perferendis. Pariatur quod incidunt nemo corrupti rem expedita quo amet laudantium, dicta delectus quam iure voluptate dolorum? Ullam, dolor.
        </p>

        <div className=' w-fit h-fit '>
        <Link href={'#'}><button className=' bg-[#aacfb9] py-2 rounded-full font-medium flex items-center justify-between lg:font-bold pl-8 ml-8 text-lg lg:mx-16'>Free Consult <span className='ml-4 mr-2'><HiArrowSmRight className='h-12 w-12 bg-black text-[#aacfb9] rounded-full p-2 '/></span> 
                    </button></Link>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Interaction