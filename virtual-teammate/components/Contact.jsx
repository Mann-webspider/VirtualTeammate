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

    if (true) {

      emailjs.send("service_9ofrg86", "template_6t5yzic", {
        // phone: data.phone,
        email: data.email,
        // subject: data.subject,
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
    <div className='flex flex-col bg-white justify-between items-center lg:flex-row gap-8 object-contain  px-6 py-24 sm:py-32 lg:px-24'  id='contact'>
      
      <div className='text-start bg-gradient-to-br from-blue-800 to-cyan-400  rounded-xl p-8 h-fit w-fit text-white shadow-2xl shadow-cyan-500'>

        <div className="mx-auto max-w-2xl ">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">Contact Us</h2>
          <p className="mt-2 text-lg leading-8 ">Get connect with us to solve your problems</p>
          <p className='w-60 mt-12'><b>Office Address:</b><br />
            626, Gala Empire,
            Drive-in road,
            Ahmedabad, India-380052
          </p>
          <p className='mt-12'><b>Phone-</b><br/> +91- 7486969267 | +91- 7359598111
          </p>
          <p className='mt-4'><b>Mail-</b><br/> 
          <a href='https://googlemail.com/virtualteammate1@gmail.com' className='underline text-blue-50' >virtualteammate1@gmail.com</a>
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
     <div>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.353736802533!2d72.5225283104582!3d23.04748951531174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85003775c6cf%3A0xd0b3afce2dd6a905!2sKaizen%20Market%20Research%20and%20Consultancy!5e0!3m2!1sen!2sin!4v1685513585532!5m2!1sen!2sin" width="800" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='border-none'></iframe>
     {/* <iframe src="https://calendar.google.com/calendar/embed?src=manndalsaniya.25%40gmail.com&ctz=Asia%2FKolkata"  width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
     </div>

    </div>
  )
}
