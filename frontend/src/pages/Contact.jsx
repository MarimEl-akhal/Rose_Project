import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-xl text-[#9d2f4f]'>Our Store</p>
          <p className='text-gray-500'>2757 AlDarb AlAhmar <br/> Suite 2 , Cairo , Egpt </p>
          <p className='text-gray-500'>Tel: (+20) 25140314 <br/>Email: admin@Forever.com  </p>
          <p className=' font-semibold text-xl text-[#9d2f4f]'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-[#A888B5] hover:text-white transition-all duration-500'>Explore Jobs</button>
          
        </div>
      </div>
      <NewsLetterBox/>
        
    </div>
  )
}

export default Contact