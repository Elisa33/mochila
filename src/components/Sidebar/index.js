import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <> 
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about' offset={-100}onClick={toggle}>
                            Sobre la mochila
                        </SidebarLink>
                        <SidebarLink to='stories' offset={-100} onClick={toggle}>
                            Historias
                        </SidebarLink>
                        <SidebarLink to='visits' offset={-70} onClick={toggle}>
                            Visitas Guiadas
                        </SidebarLink>
                        <SidebarLink to='contact' offset={-100} onClick={toggle}>
                            Contacto
                        </SidebarLink>

                        <SidebarBtnWrap>
                            <SidebarRoute to='/experiencies'>
                                Experiencias
                            </SidebarRoute>
                        </SidebarBtnWrap>
                    </SidebarMenu>
                   
                </SidebarWrapper>
            </SidebarContainer>
            
        </>
    )
}

export default Sidebar;
