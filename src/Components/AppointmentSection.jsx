import React , { useState, useEffect } from 'react'
import Rectangle from '../assets/Rectangle.png'
import BookingBtn from '../Components/BookingBtn1'
import img3 from '../assets/AppointmentSecimg.png'
import phoneimg from '../assets/AppointmentsexMobileIamge.png'

const AppointmentSection = () => {
  const [imageSrc, setImageSrc] = useState('');
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {

        setImageSrc(phoneimg);
      } else {
      
        setImageSrc(img3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className=' relative bg-red-800  items-center  border-2 -gap-1 '>

<div className=' absolute z-20 p-28 top-0 left-0 right-0 bottom-0 flex justify-center items-center  md:-left-96  sm:-right-32' > 
<div ><h1 className='text-2xl font-thin'>Namaste, Welcome to Amrutam</h1>
<p className='font-semibold text-3xl pt-6'>Step into Holistic Healing with Ayurveda </p>
<p className='font-semibold text-3xl pt-6 '>Book Consultation with certified Experts.</p>
<div className='h-24 overflow-hidden'>
<p className='pt-6 pb-6 w-[42vw]'>Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p></div>
<BookingBtn  booking={'BOOK AN APPOINTMENT'} />
</div>
</div>

      <img className='absolute  w-[100vw] h-[90vh]' src={Rectangle} alt="" />
        <img className='h-[90vh] w-[100vw] p-0' src={imageSrc} />
    
    </div>




  )
}

export default AppointmentSection
