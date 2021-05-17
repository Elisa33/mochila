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
                            About me
                        </SidebarLink>
                        <SidebarLink to='stories' onClick={toggle}>
                            Stories
                        </SidebarLink>
                        <SidebarLink to='visits' onClick={toggle}>
                            Guided Visits
                        </SidebarLink>
                        <SidebarLink to='footer' onClick={toggle}>
                            Contact
                        </SidebarLink>
                    </SidebarMenu>
                    <SidebarBtnWrap>
                        <SidebarRoute to='/experiencies'>
                            Experiencies
                        </SidebarRoute>
                    </SidebarBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
            
        </>
    )
}

export default Sidebar;
