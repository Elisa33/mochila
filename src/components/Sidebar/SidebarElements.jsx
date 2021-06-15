import styled from 'styled-components';
import { FaTimes }  from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #ffded5;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => isOpen ? '100%': '0' };
    top: ${({ isOpen }) => isOpen ? '0': '-100%' };
`

export const CloseIcon = styled(FaTimes)`
    color:#fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;

`

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows: repeat(6,70px);
    text-align: center;
    @media screen and (max-width: 480px){
        grid-template-rows:repeat(6, 60px)
    }
` 

export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #FD475D;
    cursor: pointer;
    &:hover{
        color:#fff;
        background-color: #FD475D;
        padding: 0.5rem;
        transition: 0.2s ease-in-out;
    }
`
export const SidebarBtnWrap = styled.div`
    display:flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background: #9ad5d6;
    white-space: nowrap;
    text-decoration:none;
    padding: 0.5rem 50px;
    color: #fff;
    font-size:1.5rem;
    outline:none;
    border:none;
    cursor: pointer;
    transition:0.2s ease-in-out;
    &:hover{
        background:#fff;
        color:#444;
        transition:0.2s ease-in-out;

    }
    

`
