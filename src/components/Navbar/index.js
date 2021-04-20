import React from 'react'
import {FaBars} from 'react-icons/fa'
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

const Nabvar = ({toggle}) => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to='/'>
                       <h1>Mochila</h1>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='stories'>Stories</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='guided'>Guided Visits</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contact</NavLinks>
                        </NavItem>
                        <NavBtnLink to='/experiencies'>
                            <NavBtn>Experiencies</NavBtn>
                        </NavBtnLink>
                    </NavMenu>
                   
                
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Nabvar
