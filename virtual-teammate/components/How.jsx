import React from 'react'
// import {
//     Tabs,
//     TabsHeader,
//     TabsBody,
//     Tab,
//     TabPanel,
// } from "@material-tailwind/react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function How() {
    const Compo = (props) => {

        return (
            <>
                <div className='    max-w-xl lg:max-w-3xl  p-6 min-h-24 rounded-md mt-4 hover:shadow-lg hover:shadow-[#00000050]  mx-4 duration-500' >
                    <p className='bg-primary  w-fit px-2 h-6 text-white  font-bold text-center rounded-sm'>{props.num}</p>
                    <p className='my-4 lg:font-semibold text-black font-body text-lg xl:text-md w-80'>{props.desc}</p>
                </div>
            </>
        );
    }

   
    return (
        <div className=' h-fit md:py-16 px-8 md:px-16 py-16 lg:px-16 xl:px-24  relative lg:pt-16'>
            <div className='max-w-2xl mx-auto md:max-w-4xl '>
                <h3 className='text-6xl lg:font-bold lg:text-center py-8 font-semibold font-body bg-cyan-500 rounded-lg text-white'>Are you not Sure ,What to do?</h3>
            </div>
            <h3 className='mb-4 lg:text-center text-left text-3xl font-semibold'> Are you Confused between your work allotment ? <br/> Let us help you to easy your decision</h3>
            <div className='z-10 pt-8'>
            <Tabs id="custom-animation" value="html" className="w-full h-full  duration-300 mx-auto " >
                <TabList className='max-w-fit mx-auto py-1  text-xl  mt-4 rounded-lg flex bg-accent text-gray-200 px-2' >
                    
                    {/* <Tab className="border-none rounded-md px-4 py-2 transition duration-300" >
                        <p className='  font-body  text-md tracking-wider uppercase  '>Free Trial</p>
                    </Tab> */}
                    {/* <Tab className="border-none rounded-md px-4 py-2 transition duration-300">
                        <p className=' font-body  text-md tracking-wider uppercase'>Free consultation</p>
                    </Tab>
                    <Tab className="border-none rounded-md px-4 py-2 transition duration-300">
                        <p className=' font-body  text-md tracking-wider uppercase'>Start project</p>
                    </Tab> */}
                </TabList>
                
                    <TabPanel key={"trail"} value={"trail"}>
                        <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto md:grid-cols-2'>

                            <Compo num="step 1" desc="Are you not sure that what  service is best for you ,then you can try our free Consultation to guide you" />
                            <Compo num="step 2" desc="Is your work ready But you are concern about your work that how it will be implemented , Then Try our Free trial service " />
                            <Compo num="step 3" desc="You clarify Our work and services , You like our service and also want to give more work , then Join our Membership " />
                            <Compo num="step 4" desc="choose our service or Customize your service" />
                            <Compo num="step 5" desc="We will contact you As per your given time and date on selected platform" />
                            
                        </div>
                    </TabPanel>
                    {/* <TabPanel key={"consult"} value={"consult"}>
                        <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto md:grid-cols-2 '>

                            <Compo num="1" desc="Contact us by clicking join now button " />
                            <Compo num="2" desc="Fill up the required details " />
                            <Compo num="3" desc="choose option of free Consult" />
                            <Compo num="4" desc="choose our service or Customize your service" />
                            <Compo num="5" desc="We will contact you As per your given time and date on selected platform" />
                            <Compo num="6" desc="Start our session" />
                           
                        </div>
                    </TabPanel> */}
                    {/* <TabPanel key={"consult"} value={"consult"}>
                        <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto md:grid-cols-2'>

                            <Compo num="1" desc="Contact us by clicking join now button " />
                            <Compo num="2" desc="Fill up the required details " />
                            <Compo num="3" desc="choose option of start project" />
                            <Compo num="4" desc="choose our service or Customize your service" />
                            <Compo num="5" desc="We will contact you As per your given time and date on selected platform" />
                            <Compo num="6" desc="Start our session" />
                            
                        </div>
                    </TabPanel> */}
                

            </Tabs>
            
            </div>
            
        </div>
    )
}

export default How