import React from 'react'
import InfoSection from './InfoSection'
import prescription from '../assets/prescription.svg'
import shield from '../assets/shield 1.png'
import doctor from '../assets/doctor.png'
import speechbubble from '../assets/speech-bubble.svg'
import react from '../assets/react.svg'



const InfoCard = () => {
    const items=[{ id:1 ,img:prescription ,para:"Convinient Online & In-Clinic Consultations"},{ id :2,img:shield,para:"Safe And Effective Treatment"},{ id:3,img:doctor,para:"Experienced Ayurvedic Practitioners"},{ id:4, img:speechbubble,para:"Personalized Treatment Plans & Guidence"} ]
  return (
    <div className='p-3 '>
    <div className='infocard  justify-center '>
      {items.map((item,index)=>(<InfoSection key={index} info={item} />))}
    </div>
    </div>
  )
}

export default InfoCard
