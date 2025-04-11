import React from 'react'
import { assets } from '../assets/assets'

const HowItWorks = () => {
  return (
    <div className='w-full bg-black '>
        <div className='pr-3'>
            <h1 className='italic text-white font-light text-3xl flex items-center justify-center pt-12 '>How it works</h1>
            
            <div className='flex justify-between gap-4 pl-3 pt-8'>
                <img src={assets.group01} alt="" className='w-1/3' />
                <img src={assets.group02} alt="" className='w-1/3' />
                <img src={assets.group03} alt="" className='w-1/3' />
            </div>
            
            <div className='grid grid-cols-3 gap-4 pl-3 pt-8 text-gray-400 font-extralight'>
                <div className='w-[430px] h-[176px] bg-[#151825] p-2 rounded-xl gap-2'>
                   <h1 className='leading-snug'>Choose a vault that aligns with your investment goals. Each vault offers different strategies and
                     potential returns to suit various risk levels and preferences. Review the available options carefully,
                      as each vault is designed to optimize returns based on specific market conditions and asset types.
                       Once selected, you can easily monitor your investment’s performance over time.</h1>
                </div>
                <div className=' leading-snug w-[430px] h-[176px] bg-[#151825] p-2 rounded-xl gap-2'>
                   <h1>Deposit your assets to begin generating returns. Each vault is designed to maximize yield based on its
                     specific strategy. Depositing is quick and easy, just choose the amount you want to invest and start benefiting
                      from automated yield generation</h1>
                </div>
                <div className='leading-snug w-[430px] h-[176px] bg-[#151825] p-2 rounded-xl gap-2'>
                    <h1>Watch your assets grow as the vault generates yields automatically. Each vault is optimized to maximize
                         returns based on market strategies, allowing you to benefit from steady earnings over time.
                          Simply deposit, sit back, and let the vault do the work.</h1>
                </div>
            </div>
        </div>  
        <img src={assets.icons} alt="" className='mt-14'/> 
    </div>
  )
}

export default HowItWorks