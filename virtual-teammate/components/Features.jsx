import React from 'react'
import desk from "../public/working-desk.jpg"
import Image from 'next/image';


function Features() {
    const Testi = (props) => {
        return(
            <div className='py-14 px-8  mt-8 lg:mt-0 bg-white text-black rounded-2xl'>
                <h4 className='lg:font-thin tracking-wider uppercase text-sm lg:text-gray-700 mb-8 text-gray-900 '>{props.head}</h4>
                <h3 className='font-bold text-5xl text-green-700'>{props.num} {props.thou?"K":""}<sup className='text-[#9ecfb2]'>+</sup></h3>
                {/* <p className='text-[#9b9c9d]'>{props.para}</p>  */}
                {/* <hr className='h-[2px] w-full bg-gray-200'></hr> */}
            </div>
        );
    }
  return (
    <div className='w-screen h-fit snap-mandatory snap-center relative text-white  flex justify-center items-center text-center pb-20'>
        <Image src={desk} className='absolute z-[-2] brightness-50 h-full object-cover'/>
        <div className='w-full h-full flex flex-col justify-center items-center  '>

        <h2 data-aos="fade-down" className='text-4xl font-bold lg:text-5xl w-22 px-8 mt-20'>Features And Benefits</h2>
        <p className='my-8  text-[#c7c7c8] font-medium w-2.5/3 lg:w-2/3 lg:text-xl px-8'>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut placeat in facilis corrupti, et amet?</p>
        <div data-aos="fade-up " data-aos-duration="1000" className='flex flex-col lg:flex-row justify-between items-center lg:justify-evenly lg:flex leading-10 w-full h-full'>

        <Testi num="15" head="project done" para="lorem impus golem fus in lobdf db db dfvd " thou={true}/>
        <Testi num="7" head="Happy clients" para="lorem impus golem fus in idbdgb b fgbf b bfb" thou={true}/>
        <Testi num="78" head="Expert staff" para="lorem impus golem fus in diogbgnb dsbg g" thou={false}/>
        </div>
        </div>
    </div>
  )
}

export default Features