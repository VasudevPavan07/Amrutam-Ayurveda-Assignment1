import React from 'react'

const Heading = ({heading}) => {
  return (
    <div>
        <div className=' flex items-center justify-center pt-16 '><h1 className='text-[#33643f] underline  text-5xl font-bold'>{heading}</h1></div> 
    </div>
  )
}

export default Heading
