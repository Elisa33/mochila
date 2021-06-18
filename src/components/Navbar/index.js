import React, { useState, useEffect }from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {wlogo} from '../../images/images.jsx'
/* import { plogo} from '../../images/images.jsx' */
/* Esto sirve para cambiar el color de los iconos cuando estan dentro del contenedor correspondiente */
import { IconContext } from 'react-icons/lib';
import { Nav, 
        NavbarContainer, 
        NavLogo, 
        LogoW,
        MobileIcon, 
        NavMenu,
        NavItem, 
        NavLinks,
        NavBtn,
        NavBtnLink
    } from './NavbarElements'

const Navbar = ({toggle}) => {
    const [ scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect( () => {
        window.addEventListener('scroll',changeNav)
    },[])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome} scrollNav={scrollNav}>
                            <LogoW><img src={wlogo} alt="" /></LogoW>
                        </NavLogo>
                            <MobileIcon onClick={toggle}>
                                <FaBars />
                            </MobileIcon>
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to='about' smooth={true} duration={500} spy={true}  offset={-100} activeClass='active'>Sobre la mochila</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='stories' smooth={true} duration={500} spy={true}  offset={-70} activeClass='active'>Historias</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='guided' smooth={true} duration={500} spy={true}  offset={-100} activeClass='active'>Visitas Guiadas</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='contact' smooth={true} duration={500} spy={true}  offset={-100} activeClass='active'>Contacto</NavLinks>
                                </NavItem>
                                <NavBtn to='/experiencies'>
                                    <NavBtnLink scrollNav={scrollNav}>Experiencias</NavBtnLink>
                                </NavBtn>
                            </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
