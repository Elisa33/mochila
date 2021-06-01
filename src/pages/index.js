import React from 'react'
import HeroSection from './../components/HeroSection/index';
import AboutSection from './../components/AboutSection/index';
import InfoSection from './../components/InfoSection/index';
import Services from './../components/Services/index';
import Cards from './../components/Cards/index';
import ContactSection from './../components/ContactSection/index';
import Footer from './../components/Footer/index';

import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';




const Home = () => {
   
    return (
        <>
          
          <HeroSection/>
          <AboutSection/>
          <InfoSection { ...homeObjOne }/>
          <Cards/>
          <Services/>
          <InfoSection { ...homeObjTwo }/>

          <InfoSection { ...homeObjThree }/>
          <ContactSection/>
          <Footer />
        </>
    )
}

export default Home
