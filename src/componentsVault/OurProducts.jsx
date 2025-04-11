import React, { useState } from 'react';
import { assets, valueData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const OurProducts = () => {

    const navigate = useNavigate()

    const myPosition = '-'

    const buttonClass = myPosition === '-'
    ? "bg-gray-500 cursor-not-allowed" 
    : "bg-gradient-to-r from-[#61D084] to-[#3A88CC] cursor-pointer";

  return (
    <div className=' bg-black text-white'>
      <h1 className='italic font-light text-3xl flex items-center justify-center pt-6'>
        Our products
      </h1>
            <div className='flex justify-center gap-9 pt-10'>
                <div className=' bg-[#151825] p-2 rounded-xl w-[620px] h-[600px] overflow-hidden relative'>
                    <div className='flex justify-end'>
                        <div className=" relative inline-block group">
                            <img 
                                src={assets.exam} 
                                alt="exam" 
                                className="pt-2 pr-2 hover:cursor-pointer" 
                            />
                            <div className="absolute top-full right-0 mt-2 w-48 p-2 bg-gray-800  text-sm rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                Привіт
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <img src={assets.bpro} alt="" className='' />
                            <div className='z-30 w-full h-full bg-[#151825] mt-32 absolute'>
                                <div className='container pl-6 pt-10 gap-6 pr-6 '>
                                    <div className='flex justify-between '>
                                        <div className='mt-2'>
                                            <h1 className='text-2xl font-medium'>BTC Protected Yield</h1>
                                            <div className='flex gap-4'>
                                                <button className='items-center px-2 py-2 rounded-sm bg-[#3A88CC] mt-4 font-light text-medium'>Weekly</button>
                                                <button className='items-center px-2 py-2 rounded-sm bg-[#3A88CC] mt-4 font-light text-medium'>Boosted</button>
                                            </div>
                                        </div>
                                        <div className='py-4 px-12 rounded-3xl border-1 border-[#7D84A2] mt-1'>
                                            <h1 className='italic font-medium text-2xl'>-  BPRO</h1>
                                            <p className='font-light'>My position</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between mt-6'>
                                        <div className='py-4 px-5 min-w-44 rounded-3xl bg-[#0B0E1B] flex justify-center flex-col gap-1'>
                                            <div className='flex justify-between items-center'>
                                                <h1 className='italic font-medium text-[#56C35B] text-2xl'>2.5%</h1>
                                                <span className='font-light text-2xl text-[#C3C3C3]'>APY</span>
                                            </div>
                                            <p className='font-light '>Total Value Locked</p>
                                        </div>
                                        <div className='py-4 px-5 min-w-44 rounded-3xl bg-[#0B0E1B] flex justify-center flex-col gap-1'>
                                            <h1 className='flex justify-center italic font-medium text-2xl'>3</h1>  
                                            <p className='font-light '>Unique depositors</p>
                                        </div>
                                        <div className='py-4 px-5 min-w-44 rounded-3xl bg-[#0B0E1B] flex justify-center flex-col gap-1'>
                                            <h1 className='flex justify-center italic font-medium text-2xl'>0,0011 BPRO</h1>
                                            <p className='font-light '>Total Value Locked</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center py-2 px-2 bg-[#0B0E1B] rounded-lg text-[#C3C3C3] text-sm font-extralight mt-6'>
                                        <p>Rootstock Main <span> | </span> Maturity - 23 Now 2024</p>
                                    </div>
                                    <button
                                        onClick={() => navigate('/windProtectedYield') }
                                        className='py-6 w-full font-medium rounded-lg bg-gradient-to-r from-[#61D084] to-[#3A88CC] mt-6 cursor-pointer'>Open
                                     </button>
                                     

                                </div>
                            </div>
                                <div className='absolute inset-32 bg-gradient-to-b from-[#FF9415] via-transparent to-[#151825] blur-[70px]'></div>
                    </div>
                </div>

        
                <div className=' bg-[#151825] p-2 rounded-xl w-[620px] h-[600px] overflow-hidden relative'>
                <div className='flex justify-end'>
                        <div className=" relative inline-block group">
                            <img 
                                src={assets.exam} 
                                alt="exam" 
                                className="pt-2 pr-2 hover:cursor-pointer" 
                            />
                            <div className="absolute top-full right-0 mt-2 w-48 p-2 bg-gray-800  text-sm rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                Привіт
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <img src={assets.bpro} alt="" className='' />
                            <div className='z-30 w-full h-full bg-[#151825] mt-32 absolute'>
                                <div className='container pl-6 pt-10 gap-6 pr-6 '>
                                    <div className='flex justify-between '>
                                        <div className='mt-2'>
                                            <h1 className='text-2xl font-medium'>BTC Protected Yield</h1>
                                            <div className='flex gap-4'>
                                                <button className={`items-center px-2 py-2 rounded-sm mt-4 font-light text-medium ${buttonClass}`}>Weekly</button>
                                                <button className={`items-center px-2 py-2 rounded-sm mt-4 font-light text-medium ${buttonClass}`}>Boosted</button>
                                            </div>
                                        </div>
                                        <div className='py-4 px-12 rounded-3xl border-1 border-[#7D84A2] mt-1'>
                                            <h1 className='italic font-medium text-2xl'>-</h1>
                                            <p className='font-light'>My position</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between mt-6'>
                                        <div className='py-4 px-5 min-w-44 rounded-3xl bg-[#0B0E1B] flex justify-center flex-col gap-1'>
                                            <div className='flex justify-between items-center'>
                                                <h1 className='italic font-medium text-[#56C35B] text-2xl'>6%</h1>
                                                <span className='font-light text-2xl text-[#C3C3C3]'>APY</span>
                                            </div>
                                            <p className='font-light '>Total Value Locked</p>
                                        </div>
                                        <div className='py-4 px-5 min-w-44 rounded-3xl bg-[#0B0E1B] flex justify-center flex-col gap-1'>
                                            <h1 className='flex justify-center italic font-medium text-2xl'>-</h1>  
                                            <p className='font-light '>Unique depositors</p>
                                        </div>
                                        <div className='py-4 px-5 min-w-44 rounded-3xl bg-[#0B0E1B] flex justify-center flex-col gap-1'>
                                            <h1 className='flex justify-center italic font-medium text-2xl'>-</h1>
                                            <p className='font-light '>Total Value Locked</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center py-2 px-2 bg-[#0B0E1B] rounded-lg text-[#C3C3C3] text-sm font-extralight mt-6'>
                                        <p>Coming soon <span> | </span> Maturity - 23 Now 2024</p>
                                    </div>
                                    <button className={`py-6 w-full font-medium rounded-lg mt-6 ${buttonClass}`}>
                                        {myPosition === "-" ? "Coming Soon" : "Open"}
                                    </button>
                                </div>
                            </div>
                                <div className='absolute inset-32 bg-gradient-to-b from-[#FF9415] via-transparent to-[#151825] blur-[70px]'></div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default OurProducts