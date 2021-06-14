import React from 'react';
import Icon1 from '../../images/san-telmo.jpg'
import Icon2 from '../../images/montserrat.jpg'
import Icon3 from '../../images/en-bici.jpg'
//import Animated from '../../images/animated.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesImg, ServicesInfo, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="guided">
            {/* <object type="image/svg+xml" data={Animated}>svg-animation</object> */}
            <ServicesH1>Visitas guiadas</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesImg src={Icon1} />
                    <ServicesInfo>
                        <ServicesH2>San Telmo, <span>una tradición porteña.</span></ServicesH2>
                        <ServicesP>Al ingresar a este sector de la ciudad nos encontraremos con el pasado porque San Telmo no es un recién llegado al escenario de la historia de Buenos Aires. Así que, calzate el peinetón y el miriñaque, la casaca y el chaleco, y vení a descubrir la Buenos Aires de ayer y hoy!</ServicesP>
                        <a href="/">&#43;</a>
                    </ServicesInfo>
                </ServicesCard>
                <ServicesCard>
                    <ServicesImg src={Icon2} />
                    <ServicesInfo>
                        <ServicesH2>Montserrat, <span>corazón de Buenos Aires.</span></ServicesH2>
                        <ServicesP>Epicentro del casco histórico, éste barrio nació en el mismo instante que la ciudad. Su historia es la propia historia de Buenos Aires. Recorrerlo es descubrir cuatro siglos de historia en 1 km. ¿Te lo vas a perder?</ServicesP>
                        <a href="/">&#43;</a>
                    </ServicesInfo>
                </ServicesCard>
                <ServicesCard>
                    <ServicesImg src={Icon3} />
                    <ServicesInfo>
                        <ServicesH2>Tour en bici, <span>a pedalear BA</span></ServicesH2>
                        <ServicesP>Nos subimos a la bici para ver la otra cara de Buenos Aires. Desde la bici tenemos un panorama mas amplio. Acompañanos en estos recorridos rotativos en los que iremos descubriendo los lugares mas interesantes de la mejor manera, pedaleando!</ServicesP>
                        <a href="/">&#43;</a>
                    </ServicesInfo>
                </ServicesCard>

            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
