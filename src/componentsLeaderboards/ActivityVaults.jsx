import React from 'react'
import { vaultActivity } from '../assets/assets'


const ActivityVaults = () => {
  return (
    <div className='flex flex-col gap-8 text-white mt-16'>
        {vaultActivity.map((vaultActive, index) => (
        <div key={index} className='flex gap-5 items-center justify-center'>
            <h1 className='text-lg'>{vaultActive.lineNum}</h1>
            <div className='flex items-center gap-6 bg-[#0B0E1B] rounded-[10px] w-5xl p-4 overflow-hidden relative'>
            <div className={`absolute -bottom-24 left-1/2 -translate-x-1/2 w-110 h-24 blur-2xl rounded-full z-0 ${vaultActive.Bg}`}></div>
                <img className='max-h-14 pl-4 ' src={vaultActive.Image} alt="" />
                <div className='flex flex-col pl-3'>
                    <h1 className='font-medium text-2xl'>BTC Protected Yield</h1>
                    <div className='flex gap-2'>
                        <img className='h-6' src={vaultActive.RootstockIm} alt="" />
                        <h3 className='font-light'>{vaultActive.Rootstock}</h3>
                    </div>
                </div>
                <div className='flex items-center gap-5 pl-8'>
                    <div className={` z-10 flex justify-center min-w-[190px] min-h-[84px] rounded-[20px] border-1 
                        ${vaultActive.BgBorder}`}
                        style={{ backgroundColor: 'rgba(11, 14, 27, 0.3)' }}>
                        <div className='py-3 max-w-[148px]'>
                            <div className='flex justify-between'>
                                <h1 className='italic font-medium text-[#56C35B] text-2xl'>{vaultActive.Apy}</h1>
                                <p className='font-light text-lg text-[#C3C3C3]'>APY</p>
                            </div>
                            <p className='font-light'>{vaultActive.TotalVal}</p>
                        </div>
                    </div>
                    <div className={`z-10 flex justify-center min-w-[190px] min-h-[84px] rounded-[20px] border-1 
                        ${vaultActive.BgBorder}`}
                        style={{ backgroundColor: 'rgba(11, 14, 27, 0.3)' }}>
                        <div className='py-3 max-w-[148px]'>
                            <h1 className='flex justify-center italic font-medium text-2xl'>{vaultActive.Bpro}</h1>
                            <p className='font-light'>Total Value Locked</p>
                        </div>
                    </div>
                    <div className={`z-10 flex justify-center min-w-[190px] min-h-[84px] rounded-[20px] border-1 
                        ${vaultActive.BgBorder}`}
                        style={{ backgroundColor: 'rgba(11, 14, 27, 0.3)' }}>
                        <div className='py-3 max-w-[148px]'>
                            <h1 className='flex justify-center italic font-medium text-2xl'>{vaultActive.UniqueDepositors}</h1>
                            <p className='font-light'>Unique depositors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default ActivityVaults