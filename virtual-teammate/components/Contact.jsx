import 'react-phone-number-input/style.css'
import PhoneInputWithCountry from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
// import { Button } from '@material-tailwind/react'
import {React,useState} from 'react'
import {
  Switch,Checkbox, Input,
  
} from "@material-tailwind/react";
// import { useCountries } from "use-react-countries";
import {  useForm } from "react-hook-form";

import emailjs from '@emailjs/browser';
import { Alert } from "@material-tailwind/react";



export default function Contact() {
  const [value, setValue] = useState("")
  const [al , setAl] = useState(false)
  const onSubmit = (data)=>{


    emailjs.send("service_9ofrg86","template_6t5yzic",{
      phone: data.phone,
      email: data.email,
      subject: data.subject,
      massage: data.massage,
      firstname: data.firstname,
      lastname: data.lastname,
      },'r56TE9iXDRrbrciFg').then((res)=>{
        // <Alert color="green">A success alert for showing message.</Alert>
        
        console.log(res);
        setAl(true);
      });
    console.log(data);
  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  
  
  

  return (

    <div className=" bg-white px-6 py-24 sm:py-32 lg:px-8 " id='contact'>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" ></div>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Get connect with us to solve your problems</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
            <div className="mt-2.5 ">
              
              <input type='text' {...register('firstname',{required:"this is required"})} id='first-name' autoComplete='given-name' className='block w-full rounded-full  border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6' />
            </div>
          </div>
          <div>
            <label for="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
            <div className="mt-2.5">
              <input type="text" {...register('lastname',{required:true})} id="last-name" autocomplete="family-name" className="block w-full rounded-full border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label for="company" className="block text-sm font-semibold leading-6 text-gray-900">Subject</label>
            <div className="mt-2.5">
              <input type="text" {...register('subject',{required:true})} id="company" autocomplete="organization" className='block w-full rounded-full  border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6' />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
            <div className="mt-2.5">
              <input type="email" {...register('email',{required:true})} id="email" autocomplete="email" className='block w-full rounded-full  border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6' />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label for="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                </div>
                
                <PhoneInputWithCountry
                  placeholder="Enter phone number"
                  value={value}
                  international={true}
                  // formatPhoneNumber={value}
                  
                  
                  // onCountryChange={number}
                  {...register('phone',{required:true})}
                  
                  onChange={setValue}
                  className=' w-full rounded-full  border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6' />
              {/* <Input type="tel" name="phone-number" id="phone-number" autocomplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> */}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block text-sm font-semibold leading-6 text-gray-900">Comments / Questions</label>
            <div className="mt-2.5">
              <textarea {...register('massage',{required:true})} id="message" rows="4" className='block w-full rounded-xl  border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6'></textarea>
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
          <button type="submit"  id='home' className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 hover:scale-105 duration-300 active:scale-100    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
        </div>
      </form>
        {al?<Alert color="green" className='w-fit sticky'>The form is submitted successfully</Alert>:<></>}
    </div>

  )
}
