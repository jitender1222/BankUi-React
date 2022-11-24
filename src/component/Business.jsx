
import React from 'react'

import Star from "../assest/Star.svg"
import Shield from "../assest/Shield.svg"
import Send from "../assest/Send.svg"

const Business = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-center gap-4 font-bold items-center
    mt-10
    [&>*:nth-child(odd)]:text-xl
    [&>*:nth-child(even)]:text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-300 uppercase'>
        
        <span>3800+</span>
        <p>User Active</p> |
        <span>230+</span>
        <p>Trusted by Company</p> |
        <span>$230M+ </span>
        <p>Transaction</p>
    </div>


    <div className='flex flex-col sm: p-2 md:flex-row justify-around mt-20'>
      <div className='md:w-[30%]'>
      <h2 className='font-bold tracking-wide md:text-4xl'>You do the business, we will handle the money.</h2>
      <p className=' text-gray-400 mt-2'>with the right credit card, you can improve your financial life by building credit, earning rewards and saving money.But with hundreds of credit cards on the market. </p>
      <button className='p-2 rounded-xl text-black bg-gradient-to-r from-cyan-500 to-blue-500 mt-4'>Get Started</button>
      </div>

      {/* right section */}

      <div className='sm: mt-8 md:mt-0 md:w-[30%]'>
      <div className='flex gap-6'>
        <img src={Star} alt="star-img" className='p-2 w-[50px] bg-cyan-900 h-12 rounded-full' />
        <div>
        <h2 className='font-bold'>Rewards</h2>
        <p className='text-gray-400'>The best credit card offer some tantalizing combinations of promotions and prizes</p>
        </div>
      </div>
      <div className='flex gap-6 mt-6'>
        <img src={Shield} alt="star-img" className='p-2 w-[50px] bg-cyan-900 w-[50px] rounded-full h-12' />
        <div>
        <h2 className='font-bold'>100% Secured</h2>
        <p className='text-gray-400' >The best credit card offer some tantalizing combinations of promotions and prizes</p>
        </div>
      </div>
      <div className='flex gap-6 mt-6'>
        <img src={Send} alt="star-img" className='bg-cyan-900 
        p-2 w-[50px] rounded-full h-12' />
        <div>
        <h2 className='font-bold'>Balance Transfer</h2>
        <p className='text-gray-400' >The best credit card offer some tantalizing combinations of promotions and prizes</p>
        </div>
      </div>

      </div>
    </div>
    </>
  )
}

export default Business