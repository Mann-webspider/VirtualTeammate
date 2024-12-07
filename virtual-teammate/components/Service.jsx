import React from 'react'
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
            <div   className=' h-fit p-6 lg:p-8  hover:text-gray-50 rounded-lg hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-800 hover:to-cyan-500 my-6 max-w-[40rem] hover:scale-110   transition duration-500 '>
                <div className=" flex flex-col lg:flex-col justify-evenly w-full h-full relative">
                    
                    <div className="text  top-0  py-2">
                        <h1 className='text-3xl font-extrabold lg:font-bold lg:text-4xl md:font-regular w-full'>{props.title}</h1>
                        <h3 className='pr-4 text-lg py-4 select-none'>{props.desc}</h3>

                    </div>
                    <div className="img  top-[70%] ">
                        <Image src={props.img} className='w-fit h-fit hue-rotate-90 saturate-150 contrast-100   ' alt={props.img} />
                    </div>
                    
                </div>


            </div>
        )
    }
    return (
        <section className=' container-center  h-fit lg:px-20 p-8 py-16 md:px-16  lg:bg-blue-50 ' id='service'>
            <div  className="text lg:text-center">
        
                <h1 className='text-5xl font-bold mb-16 rounded-lg px-0 text-white py-8 bg-gradient-to-br from-blue-800 to-cyan-500'>
                    Our Professional Virtual Teammate Services
                </h1>
            </div>
            <div className="service grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-8">
                <Box title={"Content Writing Task"} img={ser1} desc={"Don't waste your time to write your own content , because we provide Web content, Blog , Newsletter , Travel , Press release Online content Writing services "}/>
                <Box title={"IT Task"} img={ser4} desc={"Web Design, Branding and Logo design , Web development , Ecommerce Development, Software development , Which will give a Professional look for your business"}/>
                <Box title={"Digital Marketing Task"} img={ser2} desc={"SEO, PPC, Social media optimization ,Content marketing ,Email/SMS services , Logo and graphics"}/>
                <Box title={"Data Management Task"} img={ser3} desc={"Data entry ,Data processing, Data conversion, Copy paste services. These services while saves your precious time to grow your business "}/>
                <Box title={"Receptionist Task"} img={ser1} desc={"Receptionist Services provide you Lead management, Taking messages , Transfer/route calls Scheduling appointments"}/>
                <Box title={"Personal Task"} img={ser2} desc={"We provide you a personal assistant for Data entry, Content writing, Relationship builders with customer, Managing your email  etc."}/>
                <Box title={" Assistant Task"} img={ser4} desc={"There are various types of assistant roles, including research assistant, medical assistant, administrative assistant, eCommerce assistant, real estate assistant, and social media assistant."} long={true}/>
            </div>
        </section>
    )
}

export default Service