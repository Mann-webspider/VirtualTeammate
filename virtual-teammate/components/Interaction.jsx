import React from 'react'
import img from "../public/two-smiling-young-businessmen-looking-laptop-screen.jpg"
import Image from 'next/image'
import Link from 'next/link'
function Interaction() {
  return (
    <section className='flex flex-col w-screen h-screen p-0 m-0 mt-8'>
        <div className="left w-96 h-96 rounded-xl ">
            <Image src={img} className='w-full h-full object-cover rounded-2xl shadow-2xl '/>
        </div>

        <div className="right">
            <h2>

            </h2>

            <p>

            </p>

            <Link href={"#"}><button></button></Link>
        </div>
    </section>
  )
}

export default Interaction