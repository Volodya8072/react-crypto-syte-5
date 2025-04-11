import React, { useState,useEffect } from 'react'
import { assets, deposit } from '../assets/assets'
import ModalLoadingDeposit from './ModalLoadingDeposit'


const ValueLocked = () => {

    const [activeTab, setActiveTab] = useState('deposit')
    const [selectedIndex, setSelectedIndex] = useState(0)

    const selected = deposit[selectedIndex]

    const [modalOpen, setModalOpen] = useState(false)
    const [loadingComplete, setLoadingComplete] = useState(false)

        const handleDeposit = () => {
            setModalOpen(true)
            setLoadingComplete(false)

            setTimeout(() => {setLoadingComplete(true)},3000)
        }

        const closeModal = () => {
            setModalOpen(false)
        }

        useEffect(() => {
            if (modalOpen) {
              document.body.style.overflow = 'hidden';
            } else {
              document.body.style.overflow = 'auto';
            }
            return () => {
              document.body.style.overflow = 'auto';
            };
          }, [modalOpen]);
        


  return (
    <div className='text-white'>
        <div className='flex gap-10'>
            <div className='mt-10 ml-10 bg-gradient-to-t from-[#0c0e11] to-[#151825] w-[800px] h-[554px] rounded-lg'>
                    <h1 className='text-3xl font-sans p-6 '>Total Value Locked</h1>
                        <div className='flex justify-end pr-4 pt-8'>
                            <p className='font-extralight text-gray-300 pr-52'>Mon, 31 Oct 2024, 2:26PM</p>
                            <p className='font-extralight text-gray-700'>0.05</p>
                        </div>
                        <div className="w-[766px] ml-4 border-t border-dashed border-gray-700"></div>
                        <div className='mt-28 absolute'>
                            <p className='text-gray-300 flex justify-end'>0.001</p>
                            <div className="w-[766px] ml-4 border-t border-dashed border-gray-700"></div>
                        </div>
                        <div className='absolute w-3 h-3 border border-green-500 rounded-full ml-[507px] mt-[130px]'></div>
                        <div className='relative mt-24 ml-6'>
                            <img src={assets.chart} className='' alt="" />
                            <div className='absolute top-60 right-4'>
                                <p className='font-extralight text-gray-700 flex justify-end'>$0.0001</p>
                                <div className="w-[766px] ml-4 border-t border-dashed border-gray-700"></div>
                            </div>
                        </div>
                        <div className='flex justify-between pr-4 pl-4 font-extralight text-gray-700'>
                            <p>10 Oct 2024</p>
                            <p>11 Oct 2024</p>
                            <p>11 Oct 2024</p>
                            <p>11 Oct 2024</p>
                        </div>
            </div>
            <div className='mt-10 mr-10 w-[500px] h-[550px] bg-[#151825] rounded-lg'>
                <div className='flex justify-around mt-4'>
                    <button
                    onClick={() => setActiveTab('deposit')}
                    className={`p-3 cursor-pointer ${
                    activeTab === 'deposit' ? 'text-white font-bold' : 'text-gray-400'}`}>Deposit</button>
                    <button
                    onClick={() => setActiveTab('withdraw')}
                    className={`p-3 cursor-pointer 
                    ${activeTab === 'withdraw' ? 'text-white font-bold' : 'text-gray-400'}`}>Withdraw</button>
                </div>
                <div className='relative ml-5 h-[4px] w-[410px] mt-2 bg-gray-400 rounded-full overflow-hidden'>
                    <div
                        className='absolute top-0 h-[3px] transition-all duration-300 bg-gradient-to-r from-[#61D084] to-[#3A88CC]'
                        style={{
                        width: '50%',
                        left: activeTab === 'deposit' ? '0' : '50%',
                        }}
                    />
                    </div>

                <div className='p-6'>
                    {activeTab === 'deposit' ? (
                    <div className=''>
                        <div className='flex justify-between items-center w-[400px] h-[70px] p-6 bg-[#0B0E1B] rounded-lg'>
                            <p className='font-light text-gray-300'>Your amount</p>
                            <img src={assets.bpro} className='h-10 w-10' alt="" />
                        </div>
                        <div className='flex gap-3 mt-6'>
                            {deposit.map((value, index) => (
                                <button
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`rounded-lg h-[40px] w-[70px] cursor-pointer transition-all
                                    ${selectedIndex === index 
                                        ? 'bg-gradient-to-r from-[#3A88CC] to-[#61D084]' 
                                        : '#1F222F'}`}>{value.label}</button>
                            ))}
                        </div>
                        <div className='flex justify-between mt-8'>
                            <div className='flex items-center'>
                                <img src={assets.balance} className='h-4 ' alt="" />
                                <p className='pl-2'>Balance</p>
                            </div>
                            <p>{selected.balance}</p>
                        </div>
                        <div className='flex justify-between mt-8'>
                            <div className='flex items-center'>
                                <img src={assets.address} className='h-4 ' alt="" />
                                <p className='pl-2'>Address</p>
                            </div>
                            <p>{selected.address}</p>
                        </div>
                        <div className='flex justify-between mt-8'>
                            <div className='flex items-center'>
                                <img src={assets.arrow} className='h-4 ' alt="" />
                                <p className='pl-2'>My Position</p>
                            </div>
                            <p>{selected.position}</p>
                        </div>
                        <button 
                        onClick={handleDeposit}
                        className='bg-gradient-to-r from-[#61D084] to-[#3A88CC] h-[70px] w-[400px] rounded-lg mt-12 font-semibold text-xl cursor-pointer'>Deposit BPRO</button>
                        {modalOpen && <ModalLoadingDeposit loadingComplete={loadingComplete} onClose={closeModal}/>}
                    </div>
                    ) : (
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <img src={assets.arrow} className='h-4 w-4' alt="" />
                            <p className='font-extralight pl-2 text-[#C3C3C3]'>My Position</p>
                        </div>
                        <h1 className='font-bold'>0.0003 BPRO</h1>
                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>

  )
}

export default ValueLocked
