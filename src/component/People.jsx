import React from 'react'
import P1 from "../assest/people01.png"
import P2 from "../assest/people02.png"
import P3 from "../assest/people03.png"
import airbnb from "../assest/airbnb.png"
import binance from "../assest/binance.png"
import dropbox from "../assest/dropbox.png"
import coinbase from "../assest/coinbase.png"

const People = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row gap-20 justify-evenly mt-20'>
        <h2 className='sm: mb-[-50px] text-xl md:mb-[0] md:w-[30%] text-2xl text-center lg:text-4xl'>What People are saying about us</h2>
        <p className='m-2 text-gray-400 md:w-[40%] md:m-0 lg:w-[20%]'>Everything you need to know about card payments 
        and grow your business anywhere ont the planet</p>
    </div>

    <div className='flex flex-col md:flex-row justify-center gap-8 mt-12 '>
        <div className='m-2 p-4 md:w-[30%] bg-gradient-to-tr from-gray-600 rounded-sm'>
            <p>Money is only a tool. It will take you whereever you wish but it will not replace you as the driver.</p>

            <div className='flex mt-6'>
                <img src={P1} alt="" />
                <div className='p-2'>
                <span>Herman Jenson</span>
                <p className="text-gray-400" >Founder & Leader</p>
                </div>
            </div>
        </div>

        <div className=' md:w-[30%] p-4'>
            <p>Money is only a tool. It will take you whereever you wish but it will not replace you as the driver.</p>

            <div className='flex mt-6'>
                <img src={P2} alt="" />
                <div className='p-2'>
                <span>Steve Mark</span>
                <p className="text-gray-400" >Founder & Leader</p>
                </div>
            </div>
        </div>

        <div className=' md:w-[30%] p-4'>
            <p>Money is only a tool. It will take you whereever you wish but it will not replace you as the driver.</p>

            <div className='flex mt-6'>
                <img src={P3} alt="" />
                <div className='p-2'>
                <span>Kenn Gallagher</span>
                <p className="text-gray-400" >Founder & Leader</p>
                </div>
            </div>
        </div>
    </div>

    {/* images  */}

    <div className='sm: gap-4 flex justify-center mt-20 md:gap-20'>
        <img src={airbnb} alt=""  className='sm: w-[60px] md:w-[10%]' />
        <img src={binance} alt=""
        className='sm: w-[60px] md:w-[10%]'
         />
        <img src={coinbase} alt="" className='sm: w-[60px] md:w-[10%]'  />
        <img src={dropbox} alt="" className='sm: w-[60px] md:w-[10%]' />

    </div>
    </>
  )
}

export default People