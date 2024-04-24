import React from 'react'

const AppointmentApprochCard = ({appointment}) => {
  return (
    <div  className=' w-[20vw] h-[70vh] md:w-[80vw] sm:w-[90vw]'>
     
    <div  className={` bg-[#fff7e2] border-t-4 rounded-3xl  border-green-950 h-[40vh]  w-[280px] p-5  `}>
    <div className='flex justify-center items-center p-3'>    <div className='flex items-center justify-center p-5  rounded-full   w-24 h-24 border-2 border-green-950  bg-[#7d9674] '><h1 className='text-white  font-bold  p-8  text-5xl '>{appointment.number}</h1></div></div>
       <div className=' grid place-items-center pt-4'>
        <h2 className='text-[#33643f] font-bold  '>{appointment.heads}</h2>
        <p className='text-[#33643f] text-center'>{appointment.descriptions}</p>  </div>    
    </div>
    </div>
  )
}

export default AppointmentApprochCard
