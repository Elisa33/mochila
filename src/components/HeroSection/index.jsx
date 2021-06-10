import React ,{ useState }from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1, HeroP, HeroBtnWrapper, ArrowRight } from './HeroElements';
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
                <HeroH1>¿Vamos a pasear?</HeroH1>
                <HeroP>Acompañanos a llevar tu mochila de paseo por la ciudad, y descubramos lugares únicos. </HeroP>
                <HeroBtnWrapper>
                    <Button to='visits' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Quiero saber más!<ArrowRight/>

                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
