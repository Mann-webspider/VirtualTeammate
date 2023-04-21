import React from 'react'
import img from "../public/service2.png"
import Image from 'next/image'
import ser1 from "../public/social.png"
import ser2 from "../public/analysis.png"
import ser3 from "../public/content.png"
import ser4 from "../public/it.png"
import Link from 'next/link'
import { HiArrowSmRight } from "react-icons/hi";
function Service() {
    const Box = (props) => {
        return (
            <div className=' h-fit py-2 px-4 lg:p-8 bg-[#f2f2f2] rounded-3xl shadow-lg  my-6 max-w-[40rem] active:scale-100  hover:bg-[#b5efcd] hover:scale-105 transition duration-300'>
                <div className=" flex flex-col lg:flex-row justify-evenly w-full h-full relative">
                    
                    <div className="text  top-0 z-10 py-2">
                        <h1 className='text-3xl font-extrabold lg:font-bold lg:text-2xl md:font-regular'>{props.title}</h1>
                        <h3 className='text-gray-500 pr-4 text-sm py-4'>{props.desc}</h3>

                    </div>
                    <div className="img  top-[70%] ">
                        <Image src={props.img} className='w-fit h-fit' />
                    </div>
                    <div className=' w-fit h-fit  '>
                        {/* <Link href={'#'}><button className=' bg-[#aacfb9] py-1 rounded-full font-medium md:font-bold flex items-center  lg:font-bold pl-6  lg:pl-8 mt-8 text-lg '>Read More <span className='ml-2 mr-2'><HiArrowSmRight className='h-12 w-12 bg-black text-[#aacfb9] rounded-full p-2 ' /></span>
                            </button></Link> */}
                        <Link href={'#'}><span className='ml-2 mr-2'><HiArrowSmRight className='h-12 w-12 bg-black text-[#ffffff] rounded-full p-2 ' /></span>
                        </Link>
                    </div>
                </div>


            </div>
        )
    }
    return (
        <section className=' container-center  w-screen h-fit lg:px-20 p-8 py-16 bg-[#f2f2f2] lg:bg-white '>
            <div className="text lg:text-center">
                <h1 className='text-5xl font-bold mb-16'>
                    Our Professional Virtual Assistant Services
                </h1>

                {/* <h4 className='text-gray-500 py-8 font-regular text-xl lg:px-80 md:pr-64'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </h4> */}
            </div>
            <div className="service grid sm:grid-cols-1 lg:grid-cols-2  lg:gap-8 md:grid-cols-2 md:gap-8">
                <Box title={"Content Writing Services"} img={ser1} desc={"Don't waste your time to write your own content , because we provide Web content, Blog , Newsletter , Travel , Press release Online content Writing services "}/>

                <Box title={"IT Services"} img={ser4} desc={"Web Design, Branding and Logo design , Web development , Ecommerce Development, Software development , Which will give a Professional look for your business"}/>
                <Box title={"Digital Marketing Services"} img={ser2} desc={"SEO, PPC, Social media optimization ,Content marketing ,Email/SMS services , Logo and graphics"}/>
                <Box title={"Data Management Services"} img={ser3} desc={"Data entry ,Data processing, Data conversion, Copy paste services. These services while saves your precious time to grow your business "}/>
                <Box title={"Virtual Receptionist Services"} img={ser1} desc={"Receptionist Services provide you Lead management, Taking messages , Transfer/route calls Scheduling appointments"}/>
                <Box title={"Virtual Personal Assistant"} img={ser2} desc={"We provide you a personal assistant for Data entry, Content writing, Relationship builders with customer, Managing your email  etc."}/>
                <Box title={"Virtual Assistant Services"} img={ser4} desc={"There are various types of assistant roles, including research assistant, medical assistant, administrative assistant, eCommerce assistant, real estate assistant, and social media assistant."}/>
            </div>
        </section>
    )
}

export default Service