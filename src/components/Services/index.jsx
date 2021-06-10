import React from 'react';
import Icon1 from '../../images/adventure-map.svg'
import Icon2 from '../../images/around.svg'
import Icon3 from '../../images/mobile.svg'
import Animated from '../../images/animated.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="stories">
            {/* <object type="image/svg+xml" data={Animated}>svg-animation</object> */}
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>San Telmo</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
                    <a href="/">&#43;</a>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Monserrat</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
                    <a href="/">&#43;</a>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>En bici</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
                    <a href="/">&#43;</a>
                </ServicesCard>

            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
