import Image from 'next/image'
// import React, { useEffect } from 'react'
import heroImg from "../public/businessman-working-laptop.jpg"
import heroImg2 from "../public/hero-banner2.jpg"
import "./Hero.css"
import Link from 'next/link'
import { HiArrowSmRight } from "react-icons/hi";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



const Button = (props) => {
    return (<Link href={'#'} className='no-underline'><button className=' bg-gradient-to-r from-blue-800 to-cyan-500 py-2 hover:translate-x-4 duration-300 active:scale-90 rounded-full font-bold flex items-center justify-between lg:font-bold lg:text-xl pl-8 text-white'>{props.text} <span className='ml-4 mr-2'><HiArrowSmRight className='h-12 w-12 bg-black text-white rounded-full p-2 ' /></span>
    </button></Link>)
}

function Hero() {

    return (
        <div className='scroll-smooth  h-screen relative md:h-fit  lg:h-screen bg-transparent flex   lg:items-start md:items-center  lg:flex-row lg:px-0 '>
            <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
        interval={6000}
        isPlaying={true}
        infinite={true}
        
        className='w-full object-cover h-screen'
      >
        <Slider className='h-screen'>
          <Slide index={0} className='w-full h-screen'>
          <Image src={heroImg} className='absolute brightness-[0.60] z-[-1] object-[69%] object-cover shadow-2xl h-screen w-full' alt='heroImg' loading='lazy' />
            <div className="left  md:text-white lg:text-white  lg:w-3/4 py-32 flex md:bg-transparant  lg:h-screen  lg:px-32 flex-col  lg:justify-center justify-start  md:flex md:justify-start  px-4 text-white   md:items-start ">
                <h2 className='text-5xl lg:text-7xl py-8 font-bold lg:my-4 md:py-4 md:text-6xl'>We always believe that <span className='text-yellow-600 xl:text-8xl'>Time</span> is <span class='text-cyan-200 xl:text-8xl'> Money</span> and value to .it is a virtue.</h2>
                <p className=' text-xl my-4 lg:text-xl py-8 lg:font-medium'>“There is no such thing as a self-made man. You will reach your goals only with the help of others.”</p>
                <div>

                    <Button text={"Try a Consultation"} />
                </div>
            </div>
          </Slide>
          <Slide index={1}>
          <Image src={heroImg2} className='absolute brightness-[0.60] z-[-1] object-cover shadow-2xl h-screen  w-full' alt='heroImg' loading='lazy' />
            <div className="left  md:text-white lg:text-white  lg:w-3/4 py-32 flex md:bg-transparant  lg:h-screen  lg:px-32 flex-col  lg:justify-center justify-start  md:flex md:justify-start  px-4 text-white   md:items-start ">
                <h2 className='text-5xl lg:text-7xl py-8 font-bold lg:my-4 md:py-4 md:text-6xl'>Unlock Your  <span className='text-yellow-600 xl:text-8xl'>Potential</span> <span class='text-cyan-200 xl:text-8xl'></span> with Your Virtual Teammate</h2>
                {/* <p cla  ssName=' text-xl my-4 lg:text-xl py-8 lg:font-medium'>“There is no such thing as a self-made man. You will reach your goals only with the help of others.”</p> */}
                <div>

                    <Button text={"Free trail"} />
                </div>
            </div>
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
            

        </div>
    )
}

export default Hero