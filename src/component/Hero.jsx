import React from 'react'

import robot from "../assest/robot.png"

const Hero = () => {
  return (
    <>
    <div className='sm:flex flex-col md:flex-row mt-12 p-12 justify-between'>
        <div id='home' className='sm: mt-8  w-full md:w-[30%] bg-discount-gradient lg:w-[60%]'>
            <span className='text-[12px] p-2 bg-gradient-to-r from-gray-700 to-gray-700 '>20% discount for 1Month Account</span>

            <h1 className='sm: text-2xl lg:text-6xl font-bold mt-4'>The Next <br /> 

            <span className="sm: text-4xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-200">Generation</span>

            <br />Payment Method.</h1>

            <p className=' lg:w-[50%] mt-4 text-gray-500'>our team of experts uses a methodology to identify the credit cards mostly likely to fit your needs.We examine annual percantage rates,annual tests</p>
        </div>
        <div className="hidden md:block rounded-full border w-[90px] h-[90px] mt-28 mr-18 bg-gradient-to-tr from-sky-400 to-pink-200">
          <span className='font-bold text-gray-900 flex justify-center mt-8'>Start</span>
        </div>
        <div className='sm:w-full md:w-[35%]'>
            <img src={robot} alt="" />
        </div>
    </div>
    </>
  )
}

export default Hero