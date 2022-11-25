import React from 'react'

import Bill from "../assest/bill.png"
const Deal = () => {
  return (
    <>
    <div className='flex sm: p-4 flex-col md:p-0 md:flex-row justify-center gap-20 md:mt-16'>

        <div className='md:w-[30%] mt-28'>
            <h2 className=' font-bold md: text-3xl xl:text-4xl'>Find a Better Card Deal in few easy steps.</h2>
            <p className='mt-8 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, cumque. ipsum dolor sit amet, consectetur adipisicing elit. Modi, illum.</p>
            <button className='p-2 rounded-xl text-black bg-gradient-to-r from-cyan-400 to-cyan-800 mt-4'>Get Started</button>
        </div>

        <div className='md:w-[30%]'>
            <img src={Bill} alt="" />
        </div>
    </div>
    </>
  )
}

export default Deal