'use client'
import React from 'react'


function page() {
  
  setTimeout(() => {
    window.location.replace(window.location.origin)
  }, 4000);
  
  return (
    <div className=' h-screen bg-[#ffffff] flex justify-center items-center'>
        <div className="box w-fit h-fit hover:cursor-not-allowed flex justify-center items-center lg:flex-row flex-col ">
        {/* <iframe src="https://embed.lottiefiles.com/animation/79952"></iframe> */}
        <iframe src="https://embed.lottiefiles.com/animation/97240"></iframe>
        <h1 className='text-5xl font-semibold text-center'>Payment Was Successful</h1>
        </div>
    </div> 
  )
}

export default page