import React from 'react'
import { Button } from '../ButtonElement';
import { StyledContact, StyledContactWrap, StyledContactP, ButtonWrap } from './ContactElements';
import contactimg from '../../images/exploring.svg'

const Contact = () => {
    return (
        <StyledContact>
            <StyledContactWrap>
                <StyledContactP>
                En nuestra mochila guardamos mapas, planos, datos, experiencias y muchas cosas más que esperan ser develadas. 
                <h2>¿Te animas a descubrirlas?</h2>
               
                 <ButtonWrap>
                 <Button to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={true ? 1 : 0}
                    dark={true ? 1 : 0}
                    dark2={false ? 1 : 0}
                    >
                        Contacto
                </Button>


                 </ButtonWrap>
                 <p>Sumate a nuestros recorridos peatonales o en bici y acompañanos a llevar tu mochila de paseo por la city.</p>
                
                </StyledContactP>
                <img src={contactimg} alt="" />
               
            </StyledContactWrap>
            
        </StyledContact>
    )
}

export default Contact
