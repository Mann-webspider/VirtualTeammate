import React from 'react'
import "./page.css"
import NavbarU from '@/components/NavbarU'
import { HiArrowSmRight } from "react-icons/hi";
import Link from 'next/link'
import consultation from "../../public/How-it-works/consultation.jpg"
import trail from "../../public/How-it-works/freetrail.jpg"
import book from "../../public/How-it-works/book.jpg"
import Image from 'next/image';

function page() {
	const Button = (props) => {
		return (<Link href={props.to} className='no-underline'><button className=' bg-gradient-to-r from-blue-800 to-cyan-500 py-2 hover:translate-x-4 duration-300 active:scale-90 rounded-full font-bold flex items-center justify-between lg:font-bold lg:text-xl pl-8 text-white'>{props.text} <span className='ml-4 mr-2'><HiArrowSmRight className='h-12 w-12 bg-black text-white rounded-full p-2 ' /></span>
		</button></Link>)
	}
	return (

		<div>
			
			<NavbarU />
			<header className='flex justify-center items-center h-full py-24 bg-gray-900 overflow-hidden md:pattern lg:pattern relative mt-20 pattern '>
				<div className='pattern2 z-[-2] w-full hidden lg:block'></div>
				<h1 className='lg:text-[10rem] md:text-[7rem] text-[4rem] font-bold stroke text-transparent '>How it<span className='text-[cyan]'> Works </span></h1>
			</header>
			<section className='bg-blue-gray-50 overflow-hidden'>
				<div className='step1 h-fit w-screen'>
					<div className="title flex h-fit px-16 py-16 ">
						<h1 className='text-5xl font-semibold uppercase'>
							step
						</h1>
						<p className='bg-gradient-to-r from-blue-800 to-cyan-500 text-white ml-4  flex items-center justify-center w-14 h-14 rounded-full text-3xl font-bold'>1</p>
					</div>
					<div className='description px-16 py-4 md:flex-col lg:flex-row xl:flex-row '>
						<div className='lg:w-2/4'>
							<h2 className='text-3xl font-semibold pb-8'> Discover the Power of Virtual Teammates with a Free Consultation</h2>
							<h3 className=' text-xl'>Welcome to our virtual Teammate services! We understand the importance of finding the perfect virtual teammate who can support your business and help you achieve your goals.<br /><br /> That's why we offer a free consultation to introduce you to our services and discuss how we can assist you as your work Productive effective.</h3>

							<div className='py-8'>
								<Button text={"Free Consultation"} to="/freeConsult"/>
							</div>
						</div>
						<div className="image lg:w-1/3">
							<Image src={consultation} className="w-fit object-cover"/>
						</div>

					</div>
				</div>
				<div className='step1 h-fit'>
					<div className="title flex h-fit px-16 py-16 ">
						<h1 className='text-5xl font-semibold uppercase text-right'>
							step
						</h1>
						<p className='bg-gradient-to-r from-blue-800 to-cyan-500 text-white ml-4  flex items-center justify-center w-14 h-14 rounded-full text-3xl font-bold'>2</p>
					</div>
					<div className='description px-16 py-4  md:flex-col lg:flex-row xl:flex-row'>
						<div className="image lg:w-1/3">
							<Image src={trail} className="w-fit object-cover"/>

						</div>
						<div className='lg:w-2/4 lg:pl-8 py-8'>
							<h2 className='text-3xl font-semibold pb-8'> Experience the Difference with a Free Trial of Our Virtual Teammate Services</h2>
							<h3 className=' text-xl'>Ready to experience the capabilities of a virtual teammate firsthand?<br/><br/> Take advantage of our free trial offer and discover the value they can bring to your business. <br/><br/>Get a taste of the benefits and flexibility that our Virtual Teammate services provide..</h3>

							<div className='py-8'>
								<Button text={"Free Trail"}to="/#" />
							</div>
						</div>

					</div>
				</div>
				<div className='step1 h-fit'>
					<div className="title flex h-fit px-16 py-8 ">
						<h1 className='text-5xl font-semibold uppercase'>
							step
						</h1>
						<p className='bg-gradient-to-r from-blue-800 to-cyan-500 text-white ml-4  flex items-center justify-center w-14 h-14 rounded-full text-3xl font-bold'>3</p>
					</div>
					<div className='description px-16 py-4 md:flex-col lg:flex-row xl:flex-row'>
						<div className='lg:w-2/4'>
							<h2 className='text-3xl font-semibold pb-8'> Elevate Your Business with a Dedicated Virtual Teammate - Book Now!</h2>
							<h3 className=' text-xl'>Ready to take your business to the next level?<br/> <br/> Our virtual teammate services offer a seamless and efficient way to expand your capabilities and enhance productivity.<br/><br/> Book a dedicated virtual teammate today and unlock the full potential of your business.</h3>

							<div className='py-8'>
								<Button text={"Book a Teammate"} to="/#" />
							</div>
						</div>
						<div className="image lg:w-1/3">

							<Image src={book} className="w-full object-cover"/>
						</div>

					</div>
				</div>
			</section>

		</div>
	)
}

export default page