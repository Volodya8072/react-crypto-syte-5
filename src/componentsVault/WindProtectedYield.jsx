import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import Header from '../componentsWindProtected/Header'
import ValueLocked from '../componentsWindProtected/ValueLocked'
import VaultStrategy from '../componentsWindProtected/VaultStrategy'

const WindProtectedYield = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#05010f] text-white">
      <div className="z-10 relative">
        <Header />
        <ValueLocked />
        <VaultStrategy />

        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="items-center px-20 py-6 rounded-lg bg-[#151825] -mb-20 mt-10 cursor-pointer"
          >
            &larr; Back to product
          </button>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default WindProtectedYield
