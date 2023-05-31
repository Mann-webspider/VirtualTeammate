import React from 'react'
import "./About.css"
function About() {
    return (
        <div id='about'   className='flex justify-around  items-center lg:px-12 lg:py-8 snap-center bg-blue-gray-50   h-fit  md:px-8'>
            <div className=' bg-gradient-to-br from-blue-800 to-cyan-500   grid lg:grid-cols-4 lg:grid-row-2 grid-row-2 lg:p-8 rounded-lg gap-8 w-full h-full md:py-8 md:px-8'>
                <div className='why  lg:col-span-1 lg:row-span-2 text-white rounded-2xl lg:px-8 order-2  p-8  col-span-3'>
                    <h2 className='text-2xl lg:text-2xl font-bold md:text-3xl py-4'>WHY VIRTUAL TEAM MATE</h2>
                    
                        <ul className='text-lg md:text-xl md:font-semibold  '>
                            <li>Save overhead expenditure </li>
                            <li>Access to various talent pool and diverse skills</li>
                            <li>Offloading the workload</li>
                            <li>To save Money and Time</li>
                            <li>Flexibility & Reliability </li>
                            <li>Build a customer base</li>
                            <li>Value for money</li>
                            <li>Pay per use</li>
                            <li>Reduced risk in scaling operations</li>
                        </ul>
                    
                </div>
                <div className='about rounded-lg p-8 col-span-3 text-white  row-span-2 lg:text-lg'>
                    <h2 className='text-3xl lg:text-5xl text-gray-200 font-bold '>About us</h2>
                    <p className='text-lg lg:text-2xl mt-16'>We are a team of young and experienced members with versatile backgrounds and expertise. we thrive to build an
                        eco-system of virtual teams for any size of the organization where business growth, expansion, or productivity can
                        be achieved with economical cost and zero maintenance by outsourcing to Virtual Team Mate. </p>
                    <p className='mt-8 lg:text-2xl'>Overloading yourself with every task of the business is not the path to becoming a successful company. Smart
                        decisions and effective management is the core area that thrives growth in your business. Major companies all over
                        the world are turning to outsource as a way of work. it is perfectly suited for start-ups, small businesses, and selfemployed individuals. The services of Virtual Team Mate will not only help the client to save costs but keep them
                        focused on their core expertise.</p>
                </div>
                {/* <div className='about bg-gray-200 rounded-2xl p-8 col-span-3'>kai pan</div> */}

            </div>
        </div>
    )
}

export default About