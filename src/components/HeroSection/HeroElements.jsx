import styled from 'styled-components';
import {  HiChevronRight } from 'react-icons/hi'

export const HeroContainer = styled.div`
    background: #3F0022;
    display:flex;
    justify-content: center;
    align-items:center;
    padding: 0 30px;
    height: 800px;
    position:relative;
    z-index:1;

    :before{
        content: '';
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        background: linear-gradient( #FD475D  -15%, transparent 100%);
        z-index:2;
        /* mix-blend-mode: multiply; */
    }
`

export const HeroBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width:100%;
    height:100%;
    -o-object-fit: cover;
    object-fit: cover;
    /* background: #444; */
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    font-family: 'Pacifico', cursive;
    color: #fff;
    line-height: 3.5rem;
    font-size: 3.5rem;
    text-align: center;
    @media screen and (min-width: 640px){
        font-size: 3.5rem;
    }
    @media screen and (min-width: 768px){
        font-size: 3.8rem;
        line-height: 5.8rem;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 1rem;
    text-align: center;
    max-width: 600px;
    font-weight: lighter;
    @media screen and (min-width: 640px){
        font-size: 1.2rem;
    }
    @media screen and (min-width: 768px){
        font-size: 1.3rem;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowRight = styled(HiChevronRight)`
    margin-left: 8px;
    font-size: 1.5rem;
`