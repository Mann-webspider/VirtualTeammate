import React from 'react'
import { Typography } from "@material-tailwind/react";

function Footer() {
    return (


        <footer className="flex w-full flex-row flex-wrap items-center overflow-hidden bg-black text-white justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between lg:px-16">
            <Typography color="blue-gray-50" className="font-normal">
                &copy; 2023 Virtual Teammate
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray-50"
                        className="font-normal transition-colors"
                    >
                        About Us
                    </Typography>
                </li>
                {/* <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        License
                    </Typography>
                </li> */}
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray-50"
                        className="font-normal transition-colors "
                    >
                        How it works
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#contact"
                        color="blue-gray-50"
                        className="font-normal transition-colors"
                    >
                        Contact Us
                    </Typography>
                </li>
            </ul>
        </footer>
    );
}


export default Footer