
import React from 'react'
import { assets } from '../assets/assets'
import Navbar from '../components/Navbar'
import HowItWorks from '../componentsVault/HowItWorks'
import OurProducts from '../componentsVault/OurProducts'
import Footer from '../components/Footer'

const Vaults = () => {
  return (
    <div className='bg-black'>
        <div  className="h-[633px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/head.png)' }}>
            <Navbar/>
            <div className='flex justify-evenly gap-52 mr-24 '>
                <img src={assets.btc} alt="" className='transform translate-y-12 h-20'/>
                <img src={assets.sol} alt="" className='transform translate-y-6 h-20'/>
            </div>
            <div className='flex flex-col items-center gap-12'>
                <h1 className='text-white text-7xl mt-12'> EMDX <span className='italic'> Vaults </span> </h1>
                <h1 className='text-white text-base'>Automated and secure vaults for optimized yield</h1>
            </div>
            <div className='flex justify-around'>
                <img src={assets.eth} alt="" className='transform h-20'/>
                <img src={assets.trx} alt="" className='transform translate-y-34 h-20'/>
                <img src={assets.bnb} alt="" className='transform translate-y-20 h-20 mr-32'/>
            </div>
        </div>
        <HowItWorks/>
        <OurProducts/>
        <Footer />
    </div>
    
  )
}

export default Vaults