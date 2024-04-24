import React from 'react'
import Navbar from './Components/Navbar'
import AppointmentSection from './Components/AppointmentSection'
import InfoCard from './Components/InfoCard'
import Benfitssection from './Components/Benfitssection'
import Uses from './Components/Uses'
import ConsultationBookSection from './Components/ConsultationBookSection'
import ApproachAppointment from './Components/ApproachAppointment'
import CustomersStoriesSection from './Components/CustomersStoriesSection'
import OurDoctorsSection from './Components/OurDoctorsSection'
import AboutAppSection from './Components/AboutAppSection'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
   <Navbar />
  <AppointmentSection />
  <InfoCard />
  <Benfitssection />
  <Uses />
  <ConsultationBookSection />
  <ApproachAppointment />
  <CustomersStoriesSection />
  <OurDoctorsSection />
  <AboutAppSection />
  <Footer />
    </div>
  )
}

export default App
