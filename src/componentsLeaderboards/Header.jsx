import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
  return (
    <div>
        <div className='relative flex flex-col items-center text-white pt-12'>
            <div className='absolute flex top-8 items-center justify-center pr-20'>
                <img src={assets.molecule1} className='h-36' alt="" />
            </div>
            <div className='flex flex-col items-center mt-20 text-white'>
                <h1 className='text-8xl'>Vault Activity</h1>
                <p className='pt-6 text-2xl'>Lorem ipsum dolor sit amet consectetur. Sed hendrerit metus facilisis congue mattis scelerisque</p>
            </div>
        </div>
    </div>
  )
}

export default Header