import styled from 'styled-components';

export const ServicesContainer = styled.div`
    margin: 5rem 0;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    background: #fff ;

    
` 

export const ServicesWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 2rem;
    padding: 0 30px;
   
    @media screen and (min-width: 640px){
        max-width: 600px;
    }
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr;
        max-width: 700px;
    }
    @media screen and (min-width: 1024px){
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 980px;
    }
    @media screen and (min-width: 1280px){
        max-width: 1100px;
    }
` 

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius:10px;
    overflow: hidden; 
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    a{
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem auto;
        align-self: center;
        font-size: 1.5rem;
        color: #fff;
        background: #9ad5d6;
        border-radius: 50%;
        padding: 20px;
        text-decoration: none;
        &:hover{
            font-size:2.5rem ;
            transition: all 0.2s ease-in-out;
        }
    }
` 

export const ServicesImg = styled.img`
    height: 14rem;
    width:100%;
    object-fit: cover;
    margin-bottom: 10px;
` 
export const ServicesInfo = styled.div`
    
    padding: 0.5rem 1rem;
`
export const ServicesH1 = styled.h1`
    font-size: 2rem;
    
    color: #FD475D ;
    margin-bottom: 64px;
    @media screen and (min-width: 640px){
        font-size: 2.5rem;
    }
` 

export const ServicesH2 = styled.h2`
    color: #FD475D ;
    font-size: 1.3rem;
    height: 3rem;
    margin-bottom:10px;
    span{
        display: block;
    }
    @media screen and (min-width: 768px){
        height: 5rem;
    }
    @media screen and (min-width: 1024px){
        height: 5rem;
    }
` 

export const ServicesP = styled.p`
    color: #555 ;
    font-size: 0.9rem;
    text-align: left;
    font-weight: lighter;
    margin-bottom: 2rem;
    @media screen and (min-width: 768px){
        height: 8rem;
    }
    @media screen and (min-width: 1024px){
        height: 10rem;
    }
    @media screen and (min-width: 1280px){
        height: 7rem;
    }

` 