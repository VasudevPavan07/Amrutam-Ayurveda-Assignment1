import React from 'react'
import Heading from './Heading'
import UsesCard from './UsesCard'
import uses1 from '../assets/uses1.png'
import uses2 from '../assets/uses2.png'
import uses3 from '../assets/uses3.png'

const Uses = () => {
    const use =[ { head:"स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।" ,description:"[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]"},{head:"Precise diagnosis",description:"Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment."},{head:"Zero side-effects",description:"Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs "},{head:"Individual Treatment",description:"all Treatments are personalized based on a person's unique constitution and health concerns."} ];
  return (
    <div className=' '>
        <Heading heading={"What sets Ayurvedic consultations apart?"} />
        
        <div className='usesection flex pt-16 p-3 justify-center  items-center flex-wrap'>
          <UsesCard className="usecard1"  height={280} uses={use[0]} />
        <img className='h-[295px] p-2' src={uses1} alt="" />
        <UsesCard className="usecard" headingSize={`25px`} height={`260px`} width={300} uses={use[1]} /></div> 
        <div className='flex  justify-center items-center flex-wrap'><UsesCard  className="usecard" height={`250px`} width={280} uses={use[2]} />
        <img src={uses2} alt="" />
        <UsesCard className="usecard" height={`250px`} width={280} uses={use[3]} />
        <img  src={uses3} alt="" />
        </div> 


        

      
    </div>
  )
}

export default Uses
