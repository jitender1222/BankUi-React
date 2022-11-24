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
        <h2 className='md:w-[20%] text-3xl text-center'>What People are saying about us</h2>
        <p className='text-gray-400 w-[30%]'>Everything you need to know about card payments and grow your business anywhere ont the planet</p>
    </div>

    <div className='flex justify-center gap-8 mt-12 
    '>
        <div className=' w-[20%] p-8 bg-gradient-to-tr from-gray-600 rounded-sm'>
            <p>Money is only a tool. It will take you whereever you wish but it will not replace you as the driver.</p>

            <div className='flex mt-6'>
                <img src={P1} alt="" />
                <div className='p-2'>
                <span>Herman Jenson</span>
                <p className="text-gray-400" >Founder & Leader</p>
                </div>
            </div>
        </div>

        <div className=' w-[20%] p-8'>
            <p>Money is only a tool. It will take you whereever you wish but it will not replace you as the driver.</p>

            <div className='flex mt-6'>
                <img src={P2} alt="" />
                <div className='p-2'>
                <span>Steve Mark</span>
                <p className="text-gray-400" >Founder & Leader</p>
                </div>
            </div>
        </div>

        <div className=' w-[20%] p-8'>
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

    <div className='flex justify-center mt-20 md:gap-20'>
        <img src={airbnb} alt=""  className='w-[10%]' />
        <img src={binance} alt=""
        className='w-[10%]'
         />
        <img src={coinbase} alt="" className='w-[10%]'  />
        <img src={dropbox} alt="" className='w-[10%]' />

    </div>
    </>
  )
}

export default People