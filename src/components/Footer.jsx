import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex justify-between items-center py-4 w-full bg-[#151825] mt-32 pl-6 pr-6 text-gray-100'>
            <img src={assets.logo} alt="" />
            <p className=' font-light'>All rights reserved © 2024</p>
            <div className='flex justify-between gap-12'>
                <img src={assets.telegram} alt="" />
                <img src={assets.x} alt="" />
                <img src={assets.discord} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer