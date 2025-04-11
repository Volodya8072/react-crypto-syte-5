import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../componentsLeaderboards/Header'
import ActivityVaults from '../componentsLeaderboards/ActivityVaults'
import Footer from '../components/Footer'

const Leaderboards = () => {
  return (
    <div className='w-full min-h-screen relative'>
      <div 
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: 'url(/head2.png)' }}>
      </div>
      <div className='absolute inset-0 bg-black opacity-90'></div>
      <div className='relative z-10'>
        <Navbar />
        <Header />
        <ActivityVaults />
        <Footer />
      </div>
    </div>
  )
}

export default Leaderboards
