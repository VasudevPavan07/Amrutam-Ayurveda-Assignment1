import React from 'react'
import PlayStoreBtn from '../assets/PlayStorebtn.png'
import AppStoreBtn from '../assets/AppStoreBtn.png'
import iphone from '../assets/iPhone 13.png'
import BgCircle from '../assets/BgCircle.png'
const AboutAppSection = () => {
  return (
    <div className='flex p-28'>
        <div className='w-1/2 grid place-content-start-start'> 
        <div className='p-5' ><h1 className='text-[#33643f] text-5xl font-bold -ml-5'> Amrutam home App</h1> 
        <p className='text-stone-600 text-wrap p-3 -ml-8'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p></div>
        <div><h1 className='text-4xl font-semibold text-black -mt-16'>Get a diet & lifestyle consultation with ayurvedic experts across the globe</h1></div>

        <div className=''><h1 className='font-bold text-4xl text-black p-6 -ml-5'>Get the App now</h1>
        <div className='flex gap-5'><button><img src={PlayStoreBtn} alt="" /></button> <button><img src={AppStoreBtn} alt="" /></button></div> </div>
        </div>
        <div className='relative  '>
            <img className='absolute top-8 left-28 -z-50' src={BgCircle} alt="" />
            <div className=''>
            <img   className=' h-[80vh] z-50' src={iphone} alt="" /></div>
            <img className='absolute top-80 right-20 -z-50' src={BgCircle} alt="" />
        </div>
      
    </div>
  )
}

export default AboutAppSection
