import React from 'react'
import { assets } from '../assets/assets'

const VaultStrategy = () => {
  return (
    <div className='text-white flex items-center gap-8'>
        <div className='ml-8'>
            <div className='flex justify-center'>
                <h1 className='text-3xl font-medium mt-16 ml-[430px] '>Vault Strategy</h1>
            </div>
            <div className='flex gap-2 mt-8'>
                <div className='flex gap-8'>
                    <div className='bg-[#151825] w-[400px] h-[500px] rounded-lg p-6'>
                        <div className='flex flex-col gap-2 w-full h-full'>
                            <img src={assets.strategyIm} alt="" className='w-full object-contain' />
                            <h1 className='font-semibold text-2xl text-white'>Strategy</h1>
                                <div className='flex flex-col gap-9'>
                                    <h4 className='text-sm text-gray-400 font-extralight'>The BTC Protected Yield vault employs a structured product designed to provide users with steady returns while ensuring complete capital protection.</h4>
                                    <h4 className='text-sm text-gray-400 font-extralight'>Depositors invest BPRO, and the vault guarantees a 2.5% APY, with 100% of the principal safeguarded.</h4>
                                    <h4 className='text-sm text-gray-400 font-extralight'>The vault leverages this strategy on a weekly cycle, resetting every Monday.</h4>
                                </div>
                        </div>
                    </div>

                    <div className='bg-[#151825] w-[400px] h-[500px] rounded-lg p-6'>
                        <div className='flex flex-col gap-2 w-full h-full '>
                            <img src={assets.conditionIm} alt="" className='w-full object-contain' />
                            <h1 className='font-semibold text-2xl text-white'>Key Condition</h1>
                                <div className='flex flex-col gap-4'>
                                    <h4 className='text-sm text-gray-400 font-extralight'>The structured product uses derivatives to generate additional yield. These product is carefully managed to ensure that any market fluctuations do not impact the depositor’s principal.</h4>
                                    <h4 className='text-sm text-gray-400 font-extralight'>The vault offers a fixed APY of 2.5%, regardless of market conditions.</h4>
                                    <h4 className='text-sm text-gray-400 font-extralight'>The principal protection ensures that even in unfavorable market scenarios, users will not lose their initial deposit.</h4>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-10 bg-[#56C35B] w-[832px] h-[100px] rounded-lg mt-8'>
                <div className='flex items-center gap-2 w-full h-full'>
                    <img src={assets.doll} alt="" className='h-20' />
                    <p className='text-black font-extralight'>The vault provides a low-risk opportunity for users looking for stable yields in the volatile crypto market, thanks to its embedded protection and automated strategies.</p>
                </div>
            </div>
        </div>
        <div className=' bg-[#151825] w-[420px] h-[632px] rounded-lg mt-[131px] p-6'>
            <div className='flex flex-col w-full h-full gap-2'>
                <img src={assets.specificationIm} alt="" />
                <h1 className='font-semibold text-2xl text-white'>Vault Specifications</h1>
                    <div className='flex justify-between'>
                        <p className='font-extralight text-sm text-gray-400'>Option Tenor</p>
                        <h1 className='font-medium'>30 DAYS</h1>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-extralight text-sm text-gray-400'>Vault Start</p>
                        <h1 className='font-medium'>Monday, 08:00 AM UTC</h1>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-extralight text-sm text-gray-400'>Vault End</p>
                        <h1 className='font-medium'>Following Monday,
                        07:59 AM UTC</h1>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-extralight text-sm text-gray-400'>APY</p>
                        <h1 className='font-medium'>2.5% (guaranteed)</h1>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-extralight text-sm text-gray-400'>Capital Protection</p>
                        <h1 className='font-medium'>100%</h1>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-extralight text-sm text-gray-400'>Strategy</p>
                        <h1 className='font-medium'>Derivative's Structured Product</h1>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-extralight text-sm text-gray-400'>Principal Guarantee</p>
                        <h1 className='font-medium ml-28'>Yes (principal is safeguarded regardless of market outcome)</h1>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-extralight text-sm text-gray-400'>TVL</p>
                        <h1 className='font-medium'>Real-time (varies based on deposits)</h1>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default VaultStrategy