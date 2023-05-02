import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { React, useState } from 'react'
import { Checkbox } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { Alert } from "@material-tailwind/react";

import "./Contact.css"
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';



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





  return (
    <div className='flex flex-col justify-between items-center lg:flex-row gap-8 object-contain w-screen px-6 py-24 sm:py-32 lg:px-24'  id='contact'>
      
      <div className='text-start bg-green-500  rounded-2xl p-8 h-fit w-fit text-white shadow-2xl'>

        <div className="mx-auto max-w-2xl ">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">Contact Us</h2>
          <p className="mt-2 text-lg leading-8 text-gray-200">Get connect with us to solve your problems</p>
          <p className='w-60 mt-12'><b>Office Address:</b><br />
            626, Gala Empire,
            Drive-in road,
            Ahmedabad, India-380052
          </p>
          <p className='mt-12'><b>Phone-</b><br/> +91- 7486969267 | +91- 7359598111
          </p>
          <p className='mt-4'><b>Mail-</b><br/> 
          <a href='https://googlemail.com/virtualteammate1@gmail.com' >virtualteammate1@gmail.com</a>
          </p>

          <h3 className='text-2xl font-bold mt-12'>Follow us</h3>
          <div className='flex gap-4 mt-6'>

          <BsInstagram className='w-6 h-6 cursor-pointer'/>
          <FiTwitter className='w-6 h-6 cursor-pointer'/>
          <FaFacebookF className='w-6 h-6 cursor-pointer'/>
          <FaLinkedinIn className='w-6 h-6 cursor-pointer'/>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-2xl  z-1    rounded-xl  w-fit h-fit  px-8 py-4" >
        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="mx-auto  max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6   sm:grid-cols-2">
            <div>
              <label for="first-name" className="block text-sm font-semibold leading-6 text-gray-900 ">First name</label>
              <div className="mt-2.5 ">

                <input type='text' {...register('firstname', { required: "this is required" })} id='first-name' autoComplete='given-name' className='block w-full rounded-full  border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6' />
              </div>
            </div>
            <div>
              <label for="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
              <div className="mt-2.5">
                <input type="text" {...register('lastname', { required: true })} id="last-name" autocomplete="family-name" className="block w-full rounded-full border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6" />
              </div>
            </div>
            {/* <div className="sm:col-span-2">
              <label for="Subject" className="block text-sm font-semibold leading-6 text-gray-900">Subject</label>
              <div className="mt-2.5">
                <input type="text" {...register('subject', { required: true })} id="subject" autocomplete="subject" className='block w-full rounded-full  border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6' />
              </div>
            </div> */}
            <div className="sm:col-span-2">
              <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div className="mt-2.5">
                <input type="email" {...register('email', { required: true, validate: true })} id="email" autocomplete="email" className='block w-full rounded-full  border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6' />
              </div>
            </div>
            {/* <div className="sm:col-span-2">
              <label for="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
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
                  className=' w-full rounded-full  border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6' />

              </div>
            </div> */}
            <div className="sm:col-span-2">
              <label for="message" className="block text-sm font-semibold leading-6 text-gray-900">Comments / Questions</label>
              <div className="mt-2.5">
                <textarea {...register('massage', { required: true })} id="message" rows="4" className='block w-full rounded-xl  border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6'></textarea>
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">

                {/* <Switch id="green" color="green"  /> */}
                <Checkbox color="green" />
              </div>
              <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                By selecting this, you agree to our
                <a href="#" className="font-semibold text-green-600">privacy&nbsp;policy</a>.
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button type="submit" id='home' className="block w-full rounded-full bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 hover:scale-105 duration-300 active:scale-100    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
          </div>
        </form>
        {succ ? <Alert color="green" className='w-fit sticky mt-8'>The form is submitted successfully</Alert> : <></>}
        {err ? <Alert color="red" className='w-fit sticky mt-8'>Try check your form,</Alert> : <></>}
      </div>

    </div>
  )
}
