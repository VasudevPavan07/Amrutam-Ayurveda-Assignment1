import React from 'react'
import medicinebg from '../assets/medicinebg.png'
import medicinebglayer from '../assets/medicinebglayer.png'
import BookingBtn  from './BookingBtn1'
const ConsultationBookSection = () => {
  return (
    <div className='relative '>
        <div  className='absolute flex flex-col pt-28 justify-center items-center'>
          <h1 className='text-[#fff7e2]  z-10 text-center  text-6xl ' >Ready to restore harmony in your mind, body and spirit?</h1>
        
         <div className=' z-10 bottom-20  '> <BookingBtn booking={'Book a consultation'} /></div>
        </div>
       
        <div className="absolute inset-0 bg-black opacity-50 h-[70vh] w-full"></div> 
        
         <img  className='  w-full  h-[70vh]' src={medicinebg} alt="" />        
         
    </div>
  )
}

export default ConsultationBookSection
