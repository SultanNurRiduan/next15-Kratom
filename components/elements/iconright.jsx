import React from 'react'
import { FaHome } from "react-icons/fa";
import { GiShamblingZombie } from "react-icons/gi";

const IconRight = () => {
  return (
    <section className='w-20 h-100 bg-white/30 backdrop-blur-md shadow  z-1 fixed right-0 top-1/2 -translate-y-1/2 rounded-l-xl'>
        <div className='flex flex-col items-center gap-4 pt-4'>
            <FaHome className="text-4xl text-black" />
            <GiShamblingZombie className="text-4xl text-black" />
        </div>
    </section>
  )
}

export default IconRight