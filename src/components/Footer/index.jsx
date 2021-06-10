import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { FooterContainer, FooterWrap, FooterTitle, FooterP, FooterInputWrapper, FooterInput, FooterButton, SocialMediaWrap, SocialIcons, WebSiteRights, SocialIconLink } from './FooterElements';

const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer id='footer'>
            <FooterWrap>
                <FooterTitle to='/' onClick={toggleHome}>La mochila de paseo</FooterTitle>
                <FooterP>
            ¿Te da fiaca salir de tu casa? inscribite a nuestro newsletter para recibir historias, notas de interes y datos de color en tu email al alcance de un solo click.</FooterP>
                <FooterInputWrapper>
                    <FooterInput placeholder='Ingresa tu mail'></FooterInput>
                    <FooterButton to='home'>
                        Subscribe
                    </FooterButton>
                </FooterInputWrapper>
                <SocialMediaWrap>  
                <WebSiteRights>La mochila &copy; {new Date().getFullYear()} All Rights reserved</WebSiteRights>                 
                    <SocialIcons>
                        <SocialIconLink href='https://www.instagram.com/lamochiladepaseo/?hl=es-la' target='_blank' arial-label='Instagram'><FaInstagram/></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' arial-label='Twiiter'><FaTwitter/></SocialIconLink>
                        <SocialIconLink href='https://www.facebook.com/profile.php?id=100069048351200' target='_blank' arial-label='Facebook'><FaFacebook/></SocialIconLink>
                    </SocialIcons>
                    
                </SocialMediaWrap>
               
            </FooterWrap>
            
            
        </FooterContainer>
    )
}

export default Footer
