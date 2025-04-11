import React, { useState } from 'react'
import { assets, transactionHistory } from '../assets/assets'

const TransactionHistory = () => {

    const [modal, setModal] = useState(false)

  return (
    <div className='flex flex-col gap-8 text-white mt-16'>
        {transactionHistory.map((history, index) => (
            <div className='flex gap-5 items-center justify-center'>
                <h1 className='text-lg'>{history.Num}</h1>
                    <div className='flex items-center gap-6 bg-[#0B0E1B] rounded-[10px] w-5xl p-5 overflow-hidden relative'>
                        <div className='absolute -bottom-24 left-1/2 -translate-x-1/2 w-110 h-24 blur-2xl rounded-full z-0 bg-[#FF9415]'></div>
                        <img src={history.Image} className='max-h-14 pl-3' alt="" />
                        <div className='flex flex-col pl-3 min-w-[230px]'>
                            <h1 className='font-medium text-2xl'>BTC Protected Yield</h1>
                            <div className='flex gap-2'>
                                <img src={history.RootstockIm} className='h-6' alt="" />
                                <h3 className='font-light'>{history.Rootstock}</h3>
                            </div>
                        </div>
                        
                        <div className='z-10 flex flex-col items-center px-4 py-2 rounded-[20px] border-1 border-[#8c532a]' style={{ backgroundColor: 'rgba(11, 14, 27, 0.3)' }}>
                            <h1 className='italic font-semibold text-[#56C35B] text-[22px]'>{history.Type}</h1>
                            <p className='font-light text-md text-[#c7c5c5]'>Type</p>
                        </div>
                        <div className='z-10 flex flex-col items-center px-4 py-2 rounded-[20px] border-1 border-[#8c532a]' style={{ backgroundColor: 'rgba(11, 14, 27, 0.3)' }}>
                            <div className='flex items-center gap-2'>
                                <h1 className='italic font-medium tracking-tighter text-2xl'>{history.TransactionHush}</h1>
                                {index === 0 && (
                                    <img 
                                    onClick={() => setModal(true)}
                                    src={assets.Vector3} className='h-4 cursor-pointer' alt="" />
                                )}
                                {modal && (
                                    <div className='fixed inset-0 bg-black/40 flex justify-center items-center'>
                                        <div className='bg-[#151825] rounded-lg w-[300px] h-[300px] flex flex-col items-center'>
                                                <img 
                                                onClick={() => setModal(false)}
                                                className='cursor-pointer mt-6 ml-[230px]'
                                                src={assets.cross} alt="" />
                                            <div className='flex items-center justify-center mt-12'>
                                                <h1 className='font-bold text-3xl text-gray-400'>History</h1>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className='font-light text-md text-[#c7c5c5] tracking-wider'>Transaction Hash</p>
                        </div>
                       <div className='z-10 flex flex-col items-center px-4 py-2 rounded-[20px] border-1 border-[#8c532a]' style={{ backgroundColor: 'rgba(11, 14, 27, 0.3)' }}>
                            <h1 className='italic font-medium  text-2xl'>{history.TokenAmount}</h1>
                            <p className='font-light text-md text-[#c7c5c5]'>Token Amount</p>
                        </div>
                        <div className='z-10 flex flex-col items-center px-4 py-2 rounded-[20px] border-1 border-[#8c532a]' style={{ backgroundColor: 'rgba(11, 14, 27, 0.3)' }}>
                            <h1 className='italic font-medium  text-2xl'>{history.TokenShares}</h1>
                            <p className='font-light text-md text-[#c7c5c5]'>Token Shares</p>
                        </div>
                    </div>
            </div>
    ))}
    </div>
  )
}

export default TransactionHistory