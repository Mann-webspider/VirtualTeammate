import React from 'react'
import desk from "../public/working-desk.jpg"
import Image from 'next/image';


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
    <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4 hover:shadow-xl px-8 py-4 duration-300">
        <dt class="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4 hover:shadow-xl px-8 py-4 duration-300">
        <dt class="text-base leading-7 text-gray-600">Assets under holding</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4 hover:shadow-xl px-8 py-4 duration-300">
        <dt class="text-base leading-7 text-gray-600">New users annually</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
      </div>
    </dl>
  </div>
</div>
  )
}

export default Features