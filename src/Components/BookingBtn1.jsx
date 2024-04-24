import React from 'react'

const BookingBTN = ({booking}) => {
  return (
    <div className='p-5'>
      <button className='bg-[#3a643b] p-4 w-[35vh] rounded-2xl text-white font-light'>{booking}</button>
    </div>
  )
}
export default BookingBTN
