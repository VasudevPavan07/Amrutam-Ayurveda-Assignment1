import React from 'react'
import Slider from "react-slick";
import Heading from './Heading'
import CustomerStoriesCard from './CustomerStoriesCard'
import star from '../assets/Vector.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomersStoriesSection = () => {
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


    const customers=[{id:1, bgcolor:'#ece7ff', consulted:'Consulted for Skin',img:'', name:'Sophie Moore',place:'Chennai',date:'17/02/24',stars:star,review:'“One of a kind service”',description:'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.'},
    {id:2,consulted:'Consulted for hair',img:'', name:' Sophie Moore  ',place:' Mumbai',date:'17/02/24',stars:star,review:'“One of a kind service”',description:'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.'},
    {id:3,consulted:'Consulted for hair',img:'', name:'Sophie Moore  ',place:'Chennai',date:'17/02/24',stars:star,review:'“One of a kind service”',description:'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.'}
]
  return (
    <div>
        <Heading heading={"STORIES FROM OUR VALUED CUSTOMERS!"} />
          <div className='slider-container p-14'>
          <Slider {...settings} className='grid ' >
           {customers.map((customer,id)=>( <CustomerStoriesCard key={id} bgcolor={`#ece7ff`}  customer={customer} />))}
           </Slider>
           </div>
      
    </div>
  )
}

export default CustomersStoriesSection
