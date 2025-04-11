import React from 'react'
import { assets } from '../assets/assets'
import Spin from '../components/Spin'

const ModalLoadingDeposit = ({ loadingComplete, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="bg-[#151825] rounded-lg w-[400px] h-[262px] flex flex-col items-center">
        {!loadingComplete ? (
          <div className='flex flex-col mt-6 justify-center'>
            <h1 className='font-medium'>Deposit in Progress</h1>
            <div className='mt-10'>
                <Spin />
            </div>
            <p className="font-extralight text-sm max-w-[225px] mt-8">Your deposit is being processed.
            This may take a few moments.</p>
          </div>
        ) : (
          <div className='flex flex-col items-center'>
            <div className='flex justify-between items-center gap-52 mt-4'>
                <p className="text-lg font-medium">Withdraw Initiated</p>
                <img onClick={onClose} src={assets.cross} className='cursor-pointer h-6' alt="" />
            </div>
            <img src={assets.loadingCompleted} alt="Deposit Success" className=" mt-10" />
            <div className='max-w-[296px] mt-6 font-extralight text-sm'>If you withdraw your funds within 30 days of making a deposit, an early withdrawal fee will be applied.</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ModalLoadingDeposit
