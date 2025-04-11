import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
        <div>
           <div className='relative flex flex-col items-center text-white pt-12'>
               <div className='flex flex-col items-center mt-20 text-white'>
                   <h1 className='text-8xl'>Transactions History</h1>
                   <p className='pt-6 text-2xl'>Monitor and analyze your transaction patterns</p>
               </div>
               <div className='absolute flex items-center justify-center top-8 pl-[910px]'>
                   <img src={assets.btc1} className='h-56' alt="" />
               </div>
           </div>
       </div>
  )
}

export default Header