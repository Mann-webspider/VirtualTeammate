import React from 'react'
import desk from "../public/working-desk.jpg"
import Image from 'next/image';
import "./Features.css";

function Features() {
    const Testi = (props) => {
        return(
            <div className='py-14 px-8  mt-8 lg:mt-0 bg-primary text-black rounded-tr-[3rem] rounded-bl-[3rem]'>
                <h4 className='lg:font-semibold tracking-wider uppercase text-lg lg:text-white mb-8 text-white '>{props.head}</h4>
                <h3 className='font-bold text-5xl text-white'>{props.num} {props.thou?"K":""}<sup className='text-[#9ecfb2]'>+</sup></h3>
                {/* <p className='text-[#9b9c9d]'>{props.para}</p>  */}
                {/* <hr className='h-[2px] w-full bg-gray-200'></hr> */}
            </div>
        );
    }
  return (
    <div className=" py-24 sm:py-32 bg-blue-50  text-black">
      <h1 className=' font-bold  lg:text-7xl text-center text-5xl uppercase w-fit lg:mx-auto lg:mb-16 mb-8 px-8  rounded-lg '>Statistic</h1>
      <h4 className=' font-semibold  lg:text-2xl lg:text-center text-2xl  lg:w-2/3 w-full lg:mx-auto mb-8 px-8  rounded-lg z-10 '>"Experience Our Outstanding Success: Impressive Work Statistics, Delighted Client Testimonials, and Professional Numbers"</h4>
      {/* <div className='pattern2 z-[0]'></div> */}
      {/* <div className='pattern absolute left-0 z-[-2]'></div> */}
  <div className="mx-auto max-w-7xl px-6 lg:px-8 z-20 ">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3  rounded-xl">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 hover:shadow-xl rounded-xl  px-8 py-4 duration-300 z-5 hover:scale-110">
        <dt className="text-base leading-7  font-semibold">Hours saved for our clients</dt>
        <dd className="order-first text-5xl font-bold tracking-tight stroke text-transparent sm:text-6xl">1000+</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 hover:shadow-xl rounded-xl px-8 py-4 duration-300 z-5 hover:scale-110">
        <dt className="text-base font-semibold leading-7 ">Happy Clients</dt>
        <dd className="order-first text-5xl font-bold tracking-tight stroke text-transparent sm:text-7xl">55</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 hover:shadow-xl rounded-xl px-8 py-4 duration-300 z-5 hover:scale-110">
        <dt className="text-base leading-7  font-semibold">Skill Teams</dt>
        <dd className="order-first text-6xl font-bold tracking-tight stroke text-transparent sm:text-7xl">25</dd>
      </div>
    </dl>
  </div>
</div>
  )
}

export default Features