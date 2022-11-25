import React from 'react'

import Bill from "../assest/bill.png"
import Google from "../assest/google.svg"
import Apple from "../assest/apple.svg"
const Billing = () => {
  return (
    <>
    <div className='flex sm: p-4 flex-col md:p-0 md:flex-row mt-16 justify-center'>
        <div className='md:w-[40%]'>
            <img src={Bill} alt="" />
        </div>
        <div className='md:w-[30%] mt-28'>
            <h2 className=' font-bold md: text-3xl xl:text-5xl'>Easily Control your billing & invoicing.</h2>
            <p className='mt-8 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, cumque. ipsum dolor sit amet, consectetur adipisicing elit. Modi, illum.</p>

            <div className='flex mt-8'>
                <img src={Google} alt="" />
                <img src={Apple} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Billing