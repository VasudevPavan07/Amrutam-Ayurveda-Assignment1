import React from 'react'
import Slider from "react-slick";
import Heading from './Heading'
import doctorimg from '../assets/doctorimg.png'
import DoctorProfileCard from './DoctorProfileCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurDoctorsSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


    const doctors =[{id:'1',img:doctorimg ,rating:5,name:'Dr. Vaishali sharma',education:'Ayurveda Practitioner (BAMS, MD)', experience:'25 years of experience',specialized:'Skin Specialist'},
    {id:'2',img:doctorimg ,rating:4.5,name:'Dr. Vaishali sharma',education:'Ayurveda Practitioner (BAMS, MD)', experience:'25 years of experience',specialized:'Skin Specialist'},
    {id:'3',img:doctorimg ,rating:4,name:'Dr. Vaishali sharma',education:'Ayurveda Practitioner (BAMS, MD)', experience:'25 years of experience',specialized:'Skin Specialist'}]
  return (
    <div className='bg-white'>
      <div className='flex justify-center items-center p-5'> <Heading heading={'Meet our Ayurveda experts'} /></div> 

<div className='flex gap-5 p-5 justify-center items-center'>
<Slider {...settings} className='grid ' >
  {doctors.map((doctor,id)=>(<DoctorProfileCard key={id} doctor={doctor} />))}
  </Slider> </div>
<div className='flex justify-center items-center p-5 '>
 <button className=' bg-[#f1f5f2] p-5 text-[#3a643b] px-10 font-semibold border-2 border-green-900 rounded-xl'>Find more Experts</button>
 </div>
    </div>
  )
}

export default OurDoctorsSection
