import React from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className=''>
        <div className='bg-[#0B0E1B] rounded-e-md w-full h-[400px] p-4 overflow-hidden relative inset-0'>
        <div className='absolute -bottom-16 left-1/2 -translate-x-1/2 w-180 h-32 blur-3xl rounded-full z-0 bg-[#935a14]'></div>
          <Navbar />
          <div className="flex justify-between items-center w-full">
              <div className="flex gap-5 mt-52">
                <button className="items-center px-2 py-2 rounded-sm bg-[#3A88CC] mt-4 text-md"> Weekly</button>
                <button className="items-center px-2 py-2 rounded-sm bg-[#3A88CC] mt-4 text-md"> Boosted</button>
              </div>
              <div className="flex flex-col gap-8 mt-5 pr-36 justify-center items-center mx-auto">
                <img src={assets.bpro} className="h-24 w-24" alt="" />
                <h1 className="text-5xl italic tracking-wide">BTC Protected Yield</h1>
                <p className="tracking-wide text-2xl font-extralight">Rootstock Main</p>
              </div>
            </div>
        </div>
        <div className='flex items-center justify-center gap-7 pt-10'>
          <div className='px-4 py-3 bg-[#151825] rounded-2xl'>
              <div className='flex justify-between'>
                <h1 className='italic font-medium text-[#56C35B] text-2xl'>2.5</h1>
                <p className='font-light text-[##FFFFFF] pl-44'>APY</p>
              </div>
              <p>Total Value Locked</p>
          </div>
          <div className='flex flex-col gap-1 justify-center items-center bg-[#151825] rounded-2xl h-[82px] w-[260px]'>
            <h1 className='text-2xl italic'>3</h1>
            <p>Unique depositors</p>
          </div>
          <div className='flex flex-col gap-1 justify-center items-center bg-[#151825] rounded-2xl h-[82px] w-[260px]'>
            <h1 className='text-2xl italic'>0,0011 BPRO</h1>
            <p>Total Value Locked</p>
          </div>
        </div>
    </div>
  )
}

export default Header