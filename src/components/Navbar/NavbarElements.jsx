import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'; 

export const Nav = styled.nav`
    background-color: ${({ scrollNav}) => (scrollNav ? '#FD475D ': 'transparent')};
    /* background-color: #ffccbf; */
    height:70px;
    margin-top: -70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
    transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 30px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: ${({ scrollNav}) => (scrollNav ? '#fff': '#FD475D')};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    /* margin-left: 24px; */
    font-weight: bold;
    text-decoration: none;    
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color:#fff;
        /* outline: none;
        background: transparent;*/
}
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    /* margin-right:-22px; */
    @media screen and (max-width: 768px){
    display:none;
    }
` 

export const NavItem = styled.li`
    height:70px;
`

export const NavLinks = styled(LinkS)`
    color:white;    
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.4rem;
    height: 100%;
    cursor: pointer;
    &:hover{
        color: #FD475D;
    }
    &:active{
        border-bottom: 3px solid #FD475D;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width:768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    	border-radius: 50px;
        background: ${({ scrollNav}) => (scrollNav ? '#fff': '#FD475D')};
        white-space: nowrap;
        padding: 10px 22px;
        color: ${({ scrollNav}) => (scrollNav ? '#FD475D': '#fff')};
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        &:hover{
            transition: all 0.2s ease-in-out;
            background: ${({ scrollNav}) => (scrollNav ? '#F9CC87  ': '#fff')};
            color: ${({ scrollNav}) => (scrollNav ? '#fff': '#FD475D')}
        }
`

