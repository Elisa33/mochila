import React from 'react'
import HeroSection from './../components/HeroSection/index';
import InfoSection from './../components/InfoSection/index';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from './../components/Services/index';
import Footer from './../components/Footer/index';
import Cards from './../components/Cards/index';
import AboutSection from './../components/AboutSection/index';



const Home = () => {
   
    return (
        <>
          
          <HeroSection/>
          <AboutSection/>
          <InfoSection { ...homeObjOne }/>
          <Cards/>
          <InfoSection { ...homeObjTwo }/>
          <Services/>
          <InfoSection { ...homeObjThree }/>
          <Footer />
        </>
    )
}

export default Home