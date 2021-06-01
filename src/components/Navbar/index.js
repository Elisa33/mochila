import React, { useState, useEffect }from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

/* Esto sirve para cambiar el color de los iconos cuando estan dentro del contenedor correspondiente */
import { IconContext } from 'react-icons/lib';
import { Nav, 
        NavbarContainer, 
        NavLogo, 
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
                   <NavLogo to='/' onClick={toggleHome}>
                       <h1>Mochila</h1>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true}  offset={0} activeClass='active'>Sobre la mochila</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='stories' smooth={true} duration={500} spy={true}  offset={0} activeClass='active'>Historias</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='guided' smooth={true} duration={500} spy={true}  offset={0} activeClass='active'>Visitas Guiadas</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='footer' smooth={true} duration={500} spy={true}  offset={0} activeClass='active'>Contacto</NavLinks>
                        </NavItem>
                        <NavBtn to='/experiencies'>
                            <NavBtnLink>Experiencias</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
               </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
