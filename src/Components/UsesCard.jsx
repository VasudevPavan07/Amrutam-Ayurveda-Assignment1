import React from 'react'

const UsesCard = ({uses ,width,height,headingSize,className}) => {
  return (
    <div className={className}>
    <div style={{width:width ,height:height }} className={`  bg-white border-t-4 rounded-t-3xl  border-green-950  p-10 `} >
        <h1 style={{fontSize: headingSize }} className={`pl-5  text-[#33643f] font-semibold` } >{uses.head}</h1>
        <p className='text-[#33643f] text-xs text-center pt-4'>{uses.description}</p>
    </div> </div>
  )
}
export default UsesCard
