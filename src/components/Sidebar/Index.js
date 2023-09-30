import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SidebarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onclick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                    <SideBarLink to="discover" onClick={toggle}>Discover</SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>Services</SideBarLink>
                    <SideBarLink to="signup" onClick={toggle}>Sign up</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="Signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar;
