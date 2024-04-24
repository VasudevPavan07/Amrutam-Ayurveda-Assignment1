import React from 'react'
const Navbar = () => {
const items =["Home","Find Doctors","About Us"]

  return (
    <div style={{justifyContent:'space-evenly'}} className=' flex flex-wrap items-center   p-5 justify-center'>
      <h1 className='text-[#33643f] font-semibold text-4xl p-5 '>A M R U T A M</h1>
      <div>{items.map((items,index)=>(<a key={index} className={`text-[#33643f] p-5 ${index===1 && 'font-bold'}`}>{items}</a>))} </div>
      <div className='text-[#33643f] flex gap-2 font-bold'>{['Login' ,'Sign-up'].map((buttons,index)=>(<button key={index} className={`p-2 px-4 border-green-800  rounded-lg border-2  ${index=== 1 && 'bg-green-900 text-rose-50'}`}  >{buttons} </button>))}</div>
      
     
    </div>
  )
}

export default Navbar
