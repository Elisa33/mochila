import React from 'react';
import Icon1 from '../../images/san-telmo.jpg'
import Icon2 from '../../images/montserrat.jpg'
import Icon3 from '../../images/en-bici.jpg'
//import Animated from '../../images/animated.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesImg, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="guided">
            {/* <object type="image/svg+xml" data={Animated}>svg-animation</object> */}
            <ServicesH1>Visitas guiadas</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesImg src={Icon1} />
                
                        <ServicesH2>San Telmo</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
                        <a href="/">&#43;</a>
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesImg src={Icon2} />
                    <ServicesH2>Monserrat</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
                    <a href="/">&#43;</a>
                </ServicesCard>
                <ServicesCard>
                    <ServicesImg src={Icon3} />
                    <ServicesH2>En bici</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
                    <a href="/">&#43;</a>
                </ServicesCard>

            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
