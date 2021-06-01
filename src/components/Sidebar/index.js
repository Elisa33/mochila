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
                        <SidebarLink to='about' onClick={toggle}>
                            Sobre la mochila
                        </SidebarLink>
                        <SidebarLink to='stories' onClick={toggle}>
                            Historias
                        </SidebarLink>
                        <SidebarLink to='visits' onClick={toggle}>
                            Visitas Guiadas
                        </SidebarLink>
                        <SidebarLink to='footer' onClick={toggle}>
                            Contacto
                        </SidebarLink>
                    </SidebarMenu>
                    <SidebarBtnWrap>
                        <SidebarRoute to='/experiencies'>
                            Experiencias
                        </SidebarRoute>
                    </SidebarBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
            
        </>
    )
}

export default Sidebar;
