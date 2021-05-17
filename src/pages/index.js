import React from 'react'
import HeroSection from './../components/HeroSection/index';
import InfoSection from './../components/InfoSection/index';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from './../components/Services/index';
import Footer from './../components/Footer/index';


const Home = () => {
   
    return (
        <>
          
          <HeroSection/>
          <InfoSection { ...homeObjOne }/>
          <InfoSection { ...homeObjTwo }/>
          <Services/>
          <InfoSection { ...homeObjThree }/>
          <Footer />
        </>
    )
}

export default Home
