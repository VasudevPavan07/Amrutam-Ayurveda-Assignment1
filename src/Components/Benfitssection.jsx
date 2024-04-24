import React from 'react'
import BenfitsCards from './BenfitsCards'
import Circle from '../assets/image 54.png'
import Human from '../assets/image 57.png'
import heart from '../assets/heartbeat.png'
import ribbon from '../assets/ribbon1.png'
import lotus from '../assets/lotus-position 1.png'
import protection from '../assets/protection 1.png'
import ayurveda from '../assets/ayurveda.png'
import strong from '../assets/strong 1.png'
import BenfitsCardsRight from './BenfitsCardsRight'
import Heading from './Heading'

const Benfitssection = () => {
const benfits =[{head:"Personalized Wellness",description:"Get treatments made just for you based on your individual doshas ( body type)",img:heart,backgroundColor:'blue'},
{head:"Focus on prevention",description:"Stop problems even before they start.",img:ribbon ,backgroundColor:'#edf5fa'},
{head:"Mind-Body Connection",description:"Keep your mind and body in sync for a happy life.",img:lotus}
];
const benfitsright =[{head:"Holistic Healing",description:"Fix the root problem for long-lasting health.",img:protection,backgroundColor: '#f0f8ff'},
{head:"Natural Remedies",description:"Using herbs and natural therapies for healing.",img:ayurveda, backgroundColor: '#f0f8ff'},
{head:"Boosting immunity",description:"Stay strong and healthy for life, not just for today.",img:strong ,backgroundColor: '#f0f8ff'}
];

  return (
    <div className='bg-white p-8 pb-14 '>        
        <Heading heading={"Discover Ayurveda's Magic With Us"} />
        <div className='flex align-baseline  items-center justify-center p-10 '>
        <p className='text-slate-500 text-center text-2xl  w-[55vw]'>Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, a totally effective approach for a better life.</p></div>      
      <div className='flex justify-center items-center'>
        <div className='w-[25vw] pb-2'>
          <BenfitsCards className={'cardsleft'} backgroundColor={'#edf5fa'} benfit={benfits[0]} />
          <BenfitsCards marginRight={'55px'} backgroundColor={'#eaf2ea'} benfit={benfits[1]} />
          <BenfitsCards backgroundColor={'#fcf1f1'} benfit={benfits[2]} />
        </div>
        <div className=' relative flex items-center justify-center '>
        <img className='relative' src={Circle} alt="img" />
        <img className='absolute mt-16 ' src={Human} alt="img" />
        </div>
        <div className='w-[25vw] pb-2'>
        <BenfitsCardsRight backgroundColor={'#f5f3fc'} benfit={benfitsright[0]} />
        <BenfitsCardsRight marginLeft={'55px'} backgroundColor={'#fef6ed'} benfit={benfitsright[1]} />
        <BenfitsCardsRight backgroundColor={'#eaf2ea'} benfit={benfitsright[2]} />
        </div>
        </div>
      
    </div>
  )
}

export default Benfitssection
