import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../componentsMyPortfolio/Header'
import TransactionHistory from '../componentsMyPortfolio/TransactionHistory'
import Footer from '../components/Footer'

const MyPortfolio = () => {
  return (
    <div className='w-full min-h-screen relative'>
      <div 
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}head3.png)` }}>
      </div>
      <div className='absolute inset-0 bg-[#05010f] opacity-80'></div>
        <div className='relative z-10'>
          <Navbar />
          <Header />
          <TransactionHistory />
          <Footer />
        </div>
    </div>
  )
}

export default MyPortfolio