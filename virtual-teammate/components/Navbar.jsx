"use client";
import Image from 'next/image'
import React, { useState } from 'react';
import logo from "../public/blackLogo.png";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [active,setActive] = useState(true);
  
  
  const OnMenu=() =>{
    if(active){
      return <HiMenu className='w-8 h-8 hover:text-green-500 z-10' onClick={()=> {setActive(false); }} />
    }else{
      return <HiOutlineX className='w-8 h-8 z-10' onClick={()=>setActive(true)}/>
    }
    
  }

  const Menu = () => {
    if(active==false){
      return(<div className="absolute  w-96 h-full right-0 top-0 bg-gray-500 flex justify-between" >
      <div>

      <ul>
        <li>home</li>
        <li>about</li>
      </ul>
      </div>
      
      </div>)
    }else{
      return 
    }
  }
  return (
    <div className='h-20  bg-white flex flex-row w-full justify-between items-center p-8 '>
        <div className="logo flex items-center lg:flex-row ">
            <Image  src={logo} className='w-16 h-16 lg:w-24 lg:h-24' /> <p className='text-xl lg:text-3xl font-bold flex'><span className='text-green-500'>Virtual</span> <span>Teammate</span></p>
        </div>

        <div className="menu flex align-middle justify-center cursor-pointer ">
          <OnMenu/>
            
        </div>
         <Menu/>
        
    </div>
  )
}

export default Navbar