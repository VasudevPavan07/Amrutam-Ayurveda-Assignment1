import React from 'react'

const InfoSection = ({info}) => {
  return (
    <div className='flex border-[1px] border-[#F5F5DC] p-8 '>
      <img className=' p-2 h-20 w-20 bg-white rounded-full border-2  ' src={info.img} alt={info.img} />
      <p className='text-[#33643f] font-semibold p-2'>{info.para}</p>
    </div>
  )
}

export default InfoSection
