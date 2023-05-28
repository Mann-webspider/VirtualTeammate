import React from 'react'
import "./Process.css"
import timeline from "../app/timeline.json"
function Process() {
	return (
		<div className='triangle'>
			<section className="timeline-section bg-[#1b1b1b] text-[#fff] pal px-16 md:px-16">
				
				<h3 className='text-5xl lg:font-bold lg:text-center pb-16 font-semibold'>Our Process</h3>
				<div className="timeline-items bg-transparant">

					{
						timeline.map((data) => {
							return(
								<div className="timeline-item  ">
								<div className="timeline-dot bg-accent "></div>
								<div className="timeline-date text-white ">{data.id}</div>
								<div className="timeline-content bg-[#363636] ">
									<h3 className='text-2xl text-white'>{data.title}</h3>
									{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
								</div>
							</div>)
							
						})
					}
					
				</div>
			</section>
		</div>
	)
}

export default Process