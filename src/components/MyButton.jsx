import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyButton = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [formData, setFormData] = useState({
      phone: '',
      email: '',
      password: '',
    })

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      const newErrors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!emailRegex.test(formData.email)) newErrors.email = 'Email is not valid';
      if (!formData.password.trim()) newErrors.password = 'Password is required';
  
      return newErrors;
    }
  
    const handleChange = (e) => {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        setErrors({});
        setSubmitted(true);

        setFormData({
          phone: '',
          email: '',
          password: '',
        });
  
        setTimeout(() => setSubmitted(false), 4000);
      }
    };

  return (
    <div className='z-60 text-white'>
      <div>
        <button
          onClick={() => setIsModalOpen(true)}
         className='flex items-center text-white p-5 px-10
         bg-gradient-to-l from-[#61D084] to-[#3A88CC] cursor-pointer rounded-full gap-2'><img src={assets.Wallet} alt="" />ConnectWallet</button>
      </div>  
        {isModalOpen && (
          <div className='fixed inset-0 bg-black/70 flex justify-center items-center'>
              <div className='bg-[#151825] rounded-lg w-[600px] h-[600px] flex flex-col items-center'>
                <div className='flex gap-[350px] mt-8'>
                  <h5>Connect Wallet</h5>
                  <img src={assets.cross} 
                  className='cursor-pointer' 
                  onClick={() => setIsModalOpen(false)} alt="" />
                </div>
                    <form onSubmit={handleSubmit}>
                      <div className='flex flex-col gap-1 mt-20'>
                          <input
                            type='text'
                            name='phone'
                            placeholder='Your phone...'
                            value={formData.phone}
                            onChange={handleChange}
                            className='bg-gradient-to-r from-[#0B0E1B] to-[#151825] w-[350px] h-[60px] rounded-lg px-5 mt-5 text-white font-medium placeholder-gray-500 focus:outline-none'/>
                          {errors.phone && <span className="text-red-900 text-sm">{errors.phone}</span>}

                          <input
                            type='email'
                            name='email'
                            placeholder='Your email...'
                            value={formData.email}
                            onChange={handleChange}
                            className='bg-gradient-to-r from-[#0B0E1B] to-[#151825] w-[350px] h-[60px] rounded-lg px-5 mt-5 text-white font-medium placeholder-gray-500 focus:outline-none'/>
                          {errors.email && <span className="text-red-900 text-sm">{errors.email}</span>}

                          <input
                            type='password'
                            name='password'
                            placeholder='Password...'
                            value={formData.password}
                            onChange={handleChange}
                            className='bg-gradient-to-r from-[#0B0E1B] to-[#151825] w-[350px] h-[60px] rounded-lg px-5 mt-5 text-white font-medium placeholder-gray-500 focus:outline-none'/>
                          {errors.password && <span className="text-red-900 text-sm">{errors.password}</span>}

                            <button 
                            className='flex items-center justify-center text-white w-[350px] h-[70px]
                            bg-gradient-to-l from-[#61D084] to-[#3A88CC] cursor-pointer rounded-lg gap-3 mt-5'>
                              {submitted ? 'Thank you for access :)' : (
                                <div className='flex gap-3'>
                                  <img src={assets.Wallet} alt="" className='w-5 h-5' />Submit
                                </div>
                              )}
                            </button>
                      </div>
                  </form>
              </div>
          </div>
        )}
    </div>
  )
}

export default MyButton