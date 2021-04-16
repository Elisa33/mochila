import React from 'react'
import { Nav, NavbarContainer, NavLogo} from './NavbarElements'

const Nabvar = () => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to='/'>
                       <h1>Mochila</h1>
                   </NavLogo>
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Nabvar
