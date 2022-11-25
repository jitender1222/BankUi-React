import React from 'react'

const Service = () => {
  return (
    <>
    <div className='md: m-6 flex p-2 m-auto justify-around mt-20 bg-gradient-to-r from-cyan-200 to-gray-200 drop-shadow-6xl rounded-xl lg:w-[70%] lg:m-auto lg:mt-20'>
        <div className=''>
            <h2 className='sm: text-sm font-serif text-black md:text-5xl'>Let's Try Our Service Now !</h2>
            <p className='mt-4 text-gray-500 sm: text-[12px]'>Everything you need to accept card payments and <br/> grow your business on the planet.</p>
        </div>
        <button className='sm: h-[50px] p-0 w-[100px] text-[14px] text-black bg-gradient-to-r from-cyan-500 to-cyan-200 mt-10 md: p-2 rounded-xl h-[40px]'>Get Started</button>
    </div>
    </>
  )
}

export default Service