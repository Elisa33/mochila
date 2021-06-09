import React from 'react'
import HeroSection from './../components/HeroSection/index';
import AboutSection from './../components/AboutSection/index';
import InfoSection from './../components/InfoSection/index';
import Services from './../components/Services/index';
import ContactSection from './../components/ContactSection/index';
import Footer from './../components/Footer/index';

import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';




const Home = () => {
   
    return (
        <>
          
          <HeroSection/>
          <AboutSection/>
          <InfoSection { ...homeObjOne } id="visits"/>
          <InfoSection { ...homeObjTwo }/>
          <InfoSection { ...homeObjThree }/>
          <Services/>
          <ContactSection/>
          <Footer />
        </>
    )
}

export default Home
