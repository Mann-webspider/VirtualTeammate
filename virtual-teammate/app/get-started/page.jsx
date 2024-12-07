'use client'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { React, useState } from 'react'
import { Checkbox } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { Alert } from "@material-tailwind/react";

import NavbarU from '@/components/NavbarU'
import Footer from '@/components/Footer'
import "../how-it-works/page.css"





export default function Contact() {
  const [value, setValue] = useState("")
  const [succ, setSucc] = useState(false)
  const [err, setErr] = useState(false)

  const onSubmit = (data) => {

    if (isValidPhoneNumber(value) == true) {

      emailjs.send("service_9ofrg86", "template_6t5yzic", {
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        massage: data.massage,
        firstname: data.firstname,
        lastname: data.lastname,
      }, 'r56TE9iXDRrbrciFg').then((res) => {
        setTimeout(() => {

          setSucc(true);
        }, 5000);
        setErr(false);
      }).catch((err) => {


        setErr(true)
      });

    } else {
      setErr(true)
    }
  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm();



  //moment timezone
  const moment = require('moment-timezone');

// Function to convert client's timezone date and time to local timezone
function convertToLocalTime(clientDateTime, clientTimezone) {
  // Parse the client's date and time using the client's timezone
  const clientMoment = moment.tz(clientDateTime, clientTimezone);
  
  // Convert the client's date and time to the local timezone
  const localMoment = clientMoment.clone().tz('Asia/Kolkata'); // Replace 'Your_Local_Timezone' with your desired local timezone
  
  // Format the local date and time
  const localDateTime = localMoment.format('DD-MM-YYYY HH:mm:ss');
  
  return localDateTime;
}

// Example usage
const clientDateTime = '2023-06-01 16:30:00'; // Replace with the client's date and time in their timezone
const clientTimezone = 'America/Denver'; // Replace with the client's timezone

const localDateTime = convertToLocalTime(clientDateTime, clientTimezone);
console.log(clientDateTime, clientTimezone)
console.log('Local Date and Time:', localDateTime);





  return (
    <>
    {/* <NavbarU/> */}
    {/* <header className='h-[35rem] bg-gray-900 flex justify-center items-center'>
    <h1 className='stroke text-transparent text-8xl font-bold text-center'>Let's Begin the Journey with right mindset</h1>
    </header> */}
      <div className='w-screen h-screen relative bg-[#ededed] '  >
        <div className='bg-white h-fit  w-3/4 relative   flex z-10 justify-between items-center rounded-lg'>
        <span className='h-full w-1/3 block bg-gradient-to-tl from-blue-800 to-cyan-500'></span>
          
          <div className="right w-2/3">
            <form action="" className='py-8'>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6   sm:grid-cols-2">
                <div>
                  {/* <label for="first-name" className="block text-sm font-semibold leading-6 text-gray-900 ">First name</label> */}
                  <div className="mt-2.5 ">
                    <input type='text' {...register('firstname', { required: "this is required" })} id='first-name' autoComplete='given-name' placeholder='First name' className=' w-full bg-gray-100 border-b-black border border-t-transparent border-x-transparent outline-none px-3.5 py-4 text-gray-900   placeholder:text-gray-400  sm:text-sm sm:leading-6' />
                  </div>
                </div>
                <div>
                  {/* <label for="last-name" className="block text-sm font-semibold leading-6 text-gray-90  0">Last name</label> */}
                  <div className="mt-2.5">
                    <input type="text" {...register('lastname', { required: true })} id="last-name" autocomplete="family-name" placeholder='Last name' className=" w-full bg-gray-100 border-b-black border border-t-transparent border-x-transparent outline-none px-3.5 py-4 text-gray-900   placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6" />
                  </div>
                </div>
                {/* <div className="sm:col-span-2">
              <label for="Subject" className="block text-sm font-semibold leading-6 text-gray-900">Subject</label>
              <div className="mt-2.5">
                <input type="text" {...register('subject', { required: true })} id="subject" autocomplete="subject" className='block w-full rounded-full  border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6' />
              </div>
            </div> */}
                <div className="sm:col-span-2">
                  {/* <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label> */}
                  <div className="mt-2.5">
                    <input type="email" {...register('email', { required: true, validate: true })} id="email" autocomplete="email" placeholder="Email" className='block w-full bg-gray-100  border-b-black border border-t-transparent border-x-transparent outline-none px-3.5 py-4 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6' />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  {/* <label for="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label> */}
                  <div className="relative mt-2.5">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                    </div>

                    <PhoneInput
                      placeholder="Enter phone number"
                      value={value}
                      international={true}
                      // formatPhoneNumber={value}


                      // onCountryChange={number}
                      {...register('phone', { required: true, validate: true })}

                      onChange={setValue}
                      className=' block w-full   border-b-black border border-t-transparent border-x-transparent outline-none px-3.5 py-4 text-gray-900 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6' />

                  </div>
                </div>
                <div className="sm:col-span-2">
                  {/* <label for="message" className="block text-sm font-semibold leading-6 text-gray-900">Comments / Questions</label> */}
                  <div className="mt-2.5">
                    <textarea {...register('massage', { required: true })} id="message" rows="4" className='block w-full  bg-gray-100 border-b-black border border-t-transparent border-x-transparent outline-none px-3.5 py-4 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6'></textarea>
                  </div>
                </div>

              </div>
              <div className="mt-10">
                <button type="submit" id='home' className="block w-fit rounded-sm bg-[#19E1AF] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#22d0a5] hover:scale-105 duration-300 active:scale-100    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}
