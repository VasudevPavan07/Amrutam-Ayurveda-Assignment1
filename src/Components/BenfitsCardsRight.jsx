import React from 'react'

const BenfitsCardsRight = ({benfit,backgroundColor,marginLeft}) => {
  return (
    <div style={{marginLeft:marginLeft}} className='gap-4 '>
        <div className='flex items-center p-10 cardleft'>
        <img className='p-2 h-16 w-16 rounded-full' style={{backgroundColor:backgroundColor}} src={benfit.img} alt={benfit.head} />
        <div className=''> 
        <h1 className='text-slate-600 font-bold'>{benfit.head}</h1>
        <p className='text-slate-600 font-light text-sm'>{benfit.description}</p>
        </div>
    </div>
      
    </div>
  )
}

export default BenfitsCardsRight
