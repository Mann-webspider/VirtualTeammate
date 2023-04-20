import React from 'react'

function Features() {
    const Testi = (props) => {
        return(
            <div className='p-16'>
                <h3 className='font-extrabold text-4xl'>{props.num} {props.thou?"K":""}<sup className='text-[#9ecfb2]'>+</sup></h3>
                <h4 className='font-bold text-2xl'>{props.head}</h4>
                {/* <p className='text-[#9b9c9d]'>{props.para}</p>  */}
                <hr className='h-[2px] w-full bg-gray-200'></hr>
            </div>
        );
    }
  return (
    <div className='w-screen h-fit    flex justify-center items-center text-center pb-20'>
        <div className='w-full h-full flex flex-col justify-center items-center  '>

        <h2 className='text-4xl font-bold lg:text-5xl w-22 px-8 mt-20'>Features And Benefits</h2>
        <p className='my-8  text-[#8a8a8b] font-medium w-2.5/3 lg:w-2/3 lg:text-xl px-8'>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut placeat in facilis corrupti, et amet?</p>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:justify-evenly lg:flex leading-10 w-full h-full'>

        <Testi num="15" head="project done" para="lorem impus golem fus in lobdf db db dfvd " thou={true}/>
        <Testi num="7" head="Happy clients" para="lorem impus golem fus in idbdgb b fgbf b bfb" thou={true}/>
        <Testi num="78" head="Expert staff" para="lorem impus golem fus in diogbgnb dsbg g" thou={false}/>
        </div>
        </div>
    </div>
  )
}

export default Features