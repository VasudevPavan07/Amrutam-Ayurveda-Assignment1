import React from 'react'


const CustomerStoriesCard = ({customer ,bgcolor}) => {
  return (
    <div className='bg-white  rounded-3xl  w-[280px] sm:w-96 '>
        <h1 style={{backgroundColor:bgcolor}} className='text-black font-semibold rounded-t-3xl p-5'>{customer.consulted}</h1>
     <div style={{justifyContent:'space-around'}} className='flex p-8 gap-3 pt-8'>
      <div className='flex gap-3'>  <img className='h-15 w-15 rounded-full bg-black p-8' src={customer.img} alt="" />
       <div> <h1 className='text-black'>{customer.name}</h1>
        <h1 className='text-gray-700'>{customer.place}</h1></div></div>
        <h1 className='text-gray-700'>{customer.date}</h1>
     </div>
     <div className='flex p-3 pl-8'><img src={customer.stars} alt="" /></div>
     <div className='p-5'>
<h1 className='text-black font-bold p-3 text-2xl'>{customer.review}</h1>
<p className='text-black p-3'>{customer.description}</p></div>

    </div>
  )
}

export default CustomerStoriesCard
