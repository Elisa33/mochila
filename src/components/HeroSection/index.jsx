import React ,{ useState }from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Video from '../../videos/video.mp4'; 
import {Button} from '../ButtonElement';


const HeroSection = () => {

    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Enjoy the new experience in Buenos Aires</HeroH1>
                <HeroP>Sigin page </HeroP>
                <HeroBtnWrapper>
                    <Button to='experience' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Get Started{hover ? <ArrowForward/> : <ArrowRight/>}

                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
