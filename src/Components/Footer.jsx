import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#dbe3dc] p-20'>
        <div className='flex  items-center'>
        <div className='pr-40 w-[30vw]'>
            <h1 className='text-green-950 font-semibold'>
            Get in touch
            </h1>
            <h3 className='text-black pb-10'>support@amrutam.co.in</h3>
            <p className='text-black  '>Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001 </p>
            <p className='text-black pt-10'>+91 9713171999</p>
        </div>
            
        <div className=' pr-32 w-[30vw]'>
            <h1 className='text-green-900 font-semibold'>Information</h1>
            <h2 className='text-black'>About Us</h2>
            <h2 className='text-black'>Terms and Conditions</h2>
            <h2  className='text-black'>Privacy Policy</h2>
            <h2 className='text-black'>Privacy Policy for Mobile Apps</h2>
            <h2 className='text-black'>Shipping and Returns Policy</h2>
            <h2 className='text-black'>International Delivery For Businesses, Hotels and Resorts</h2>
        </div>
        </div>

<div className=' w-[] p-1'>
    <h1 className='text-black font-semibold text-xl p-3'>News Letter</h1>
    <h1 className='text-green-800 font-semibold p-3'>Subscribe to our Newsletter and join Amrutam Family today!</h1>
   <div className='flex '><input className=' bg-white text-black ' cols="35" rows="1"></input>
   <button className='bg-black rounded-tr-3xl text-white rounded-br-3xl p-4 '>Subscribe</button>
   </div>
</div>

    </div>
  )
}

export default Footer
