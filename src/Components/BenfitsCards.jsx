import React from 'react'

const BenfitsCards = ({benfit,backgroundColor,marginRight,}) => {
  return (
    <div style={{marginRight:marginRight}} className={`flex items-center p-10 cardleft `}>
        <div className=''> 
        <h1 className='text-slate-600 font-bold'>{benfit.head}</h1>
        <p className='text-slate-600 font-light text-sm'>{benfit.description}</p>
        </div>
     <img style={{backgroundColor:backgroundColor}} className='p-2  rounded-full h-16 w-16 ' src={benfit.img} alt={benfit.head} /> 
       </div>
  )
}

export default BenfitsCards
