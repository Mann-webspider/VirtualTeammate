"use client"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
// import { Button } from '@material-tailwind/react'
import {React,useState} from 'react'
import {
  Switch, Input,
  
} from "@material-tailwind/react";
function Consult() {
    const [value, setValue] = useState("")
  const submit = ()=>{
    if(isValidPhoneNumber(value) == true){
      console.log("valid");
    }
    else{
      console.log("not valid");
    }
  }
  return (
    <div><form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label for="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
        <div className="mt-2.5">
          {/* <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"> */}
          <Input type='text' name='First-name' id='first-name' autoComplete='given-name' classNameName='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
        </div>
      </div>
      <div>
        <label for="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
        <div className="mt-2.5">
          <Input type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="company" className="block text-sm font-semibold leading-6 text-gray-900">Service</label>
        <div className="mt-2.5">
          <Input type="text" name="company" id="company" autocomplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <Input type="email" name="email" id="email" autocomplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
        <div className="relative mt-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center">
            </div>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              formatPhoneNumberIntl={value}
              defaultCountry='US'
              
              onChange={setValue}
              className=" w-full rounded-md border-0 px-4  py-2 pl-4 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          {/* <Input type="tel" name="phone-number" id="phone-number" autocomplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> */}
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
      <div className="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
          
          <Switch id="green" color="green"  />
        </div>
        <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
          By selecting this, you agree to our
          <a href="#" className="font-semibold text-green-600">privacy&nbsp;policy</a>.
        </label>
      </div>
    </div>
    <div className="mt-10">
      <button type="button" onClick={submit} id='home' className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 hover:scale-105 duration-300 active:scale-100    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
    </div>
  </form></div>
  )
}

export default Consult