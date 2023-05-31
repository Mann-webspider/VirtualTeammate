"use client";
import Image from 'next/image'
import React from 'react';
import logo from "../public/blackLogo.png";
import "./Navbar.css"
import Link from 'next/link';

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  
} from "@material-tailwind/react";
function NavbarU() {
  const [openNav, setOpenNav] = React.useState(false);
 
  // React.useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false)
  //   );
  // }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center xl:gap-6 lg:gap-3">
      <Typography
        as="li"
        variant="regular"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="regular"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="regular"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/how-it-works" className="flex items-center">
          How it works
        </a>
      </Typography>
      <Typography
        as="li"
        variant="regular"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#service" className="flex items-center">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="regular"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <>
      <Navbar className="fixed inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-6 xl:px-24 lg:py-2 bg-white " blurred={false}>
        <div className="flex items-center justify-between text-blue-gray-900 bg-white">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <div className="logo flex items-center lg:flex-row ">
            <Image  src={logo} className='w-16 h-16 lg:w-16 lg:h-16' alt='logo'/> <p className='text-xl lg:text-2xl font-bold flex'><span className='text-primary'>Virtual</span> <span className='relative '>Teammate<b className='text-yellow-700   text-2xl  '>&#x2022;</b></span></p>
        </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Link href="/cancel">

            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block  text-md xl:text-md"
              color='blue'
              
              >
              <span>free Consult</span>
            </Button>
            
              </Link>
              <Link href={"/success"}>
              <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block ml-4 text-md"
              color='blue'
              
              >
              <span>Free trial</span>
            </Button>
              </Link>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Link href='/success'>

          <Button variant="gradient" color='blue' size="md"  className="m-2">
            <span>free Consult</span>
          </Button>
          </Link>
          <Link href='/cancel'>

          <Button variant="gradient" color='blue' size="md"  className="m-2">
            <span>free trial</span>
          </Button>
          </Link>
        </MobileNav>
      </Navbar>
      
    </>
  );
}

export default NavbarU