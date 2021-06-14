import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { StyledContact, StyledContactWrap, StyledContactP, ButtonWrap, ButtonWhatsapp } from './ContactElements';
import contactimg from '../../images/exploring.svg'

const Contact = () => {
    return (
        <StyledContact id='contact'>
            <StyledContactWrap>
                <StyledContactP>
                <p>Sumate a nuestros recorridos peatonales o en bici y acompañanos a llevar tu mochila de paseo por la city.</p>

                <p>En nuestra mochila guardamos mapas, planos, datos, experiencias y muchas cosas más que esperan ser develadas.</p> 
                <h2>¿Te animas a descubrirlas?</h2>
                 <ButtonWrap>
                    <ButtonWhatsapp href="https://walink.co/be785e" target="_blank">Contáctanos<FaWhatsapp/></ButtonWhatsapp>
                 </ButtonWrap>
                 
                
                </StyledContactP>
                <img src={contactimg} alt="" />
               
            </StyledContactWrap>
            
        </StyledContact>
    )
}

export default Contact
