
import React from "react";
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import data from "../app/data.json"
import faqImg from "../public/faqs.jpg"
import Image from "next/image";
import "./Faqs.css"
function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}



function Faqs() {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };


    return (
        <section className=" h-fit px-8 bg-[#9eceb1] py-8 lg:px-16 lg:py-16">
        
            <div className="text lg:text-center ">
                <h1 className='text-6xl font-bold mb-16 text-black'>
                    Any Questions? Here is your Faqs
                </h1>
            </div>
             
            <div className="flex flex-col lg:flex-row gap-10">

                <div className="left w-full  lg:w-3/4  ">
                    <Image src={faqImg} alt="faqImg" className="object-contain lg:rounded-[3rem] shadow-xl rounded-3xl" />
                </div>
                <div className="grid  gap-5  h-fit">
                    <Fragment >

                        {data.map(e => {

                            return (<Accordion open={open === e.id} key={e.id} icon={<Icon id={e.id} open={open} />}>
                                <div className="bg-[#f2f2f2] rounded-[2rem] ">

                                    <AccordionHeader onClick={() => handleOpen(e.id)} className="bg-transparent rounded-full lg:px-8 px-4 lg:text-lg text-lg font-medium text-left border-none text-black btn">
                                        {e.title}
                                    </AccordionHeader>
                                    <AccordionBody className=" lg:px-8 px-4 rounded-full bg-transparent text-md font-medium  lg:font-thin">
                                        {e.desc}
                                    </AccordionBody>
                                </div>
                            </Accordion>)
                        })}
                    </Fragment>
                </div>

            </div>
        </section>
    )
}

export default Faqs