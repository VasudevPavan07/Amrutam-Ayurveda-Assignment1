import React from 'react'
import Slider from "react-slick";
import Heading from './Heading'
import AppointmentApprochCard from './AppointmentApprochCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ApproachAppointment = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

const appointment =[{number:1,heads:'Make Appointment',descriptions:'You must make an appointment in advance, to choose the service and date.'},
{number:2,heads:'Consultations',descriptions:'The next stage involves a thorough consultation with an Ayurveda practitioner.'},
{number:3,heads:'Treatment Planning ',descriptions:'The Ayurvedic practitioner creates a personalized treatment plan for you'},
{number:4,heads:'Maintenance',descriptions:'These visits allow for assessment of progress, adjustments to the treatment.'},
]

  return (
    <div className='bg-white
    '>
     <Heading heading={"Our ayurvedic approach"} /> 
     
     <p className='text-center p-9 text-stone-600'>At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.</p>
    
    
     <div className="slider-container p-12">
      <Slider {...settings} className='grid ' >
     {appointment.map((appointment,index)=>(<AppointmentApprochCard key={index}
       appointment={appointment} />))}

</Slider>
</div>
    </div>
  )
}

export default ApproachAppointment
