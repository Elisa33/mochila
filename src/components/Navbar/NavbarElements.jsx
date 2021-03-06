import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'; 

export const Nav = styled.nav`
    background-color: ${({ scrollNav}) => (scrollNav ? '#FD475D ': 'transparent')};
    height:70px;
    margin-top: -70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (min-width: 768px){
    transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 30px;
    margin: 0 auto;
    @media screen and (min-width: 640px){
    max-width: 600px;
    }
    @media screen and (min-width: 768px){
    max-width: 700px;
    }
    @media screen and (min-width: 1024px){
    max-width: 980px;
    }
    @media screen and (min-width: 1280px){
        max-width: 1100px;
    }
`

export const NavLogo = styled(LinkR)`
    color: ${({ scrollNav}) => (scrollNav ? '#fff': '#fff')};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    line-height: 1rem;
    width: 45%;
    font-weight: bold;
    text-decoration: none; 
    img{
        width: 2.8rem;
        margin-right: 0.5rem;
    } 
      
`
/* export const LogoP = styled.div`
   display: ${({ scrollNav}) => (scrollNav ? 'flex': 'none')};
` */
export const LogoW = styled.div`
   display: flex;
   img{
    width: 110px;
   }

`

export const MobileIcon = styled.div`
    font-size: 1.8rem;
        cursor: pointer;
        color:#fff;

    @media screen and (min-width: 768px){
        display: none;
        font-size: 1.8rem;
        cursor: pointer;
        color:#fff;
}
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
        font-weight: bold;
    }
    &:active{
        border-bottom: 3px solid #fff;
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
        font-size: 1rem;
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

