import styled from 'styled-components';

export const ServicesContainer = styled.div`
    margin: 4rem 0;
    height: 800px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    background: #fff ;

    @media screen and (max-width: 768px){
        height:1100px;
    }
    @media screen and (max-width: 480px){
        height:1300px;
    }
` 

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 2rem;
    padding: 0 50px;
    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
` 

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius:10px;
    max-height :340px;
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
        background: #AED4D5 ;
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
    min-height: 170px;
    width:100%;
    object-fit: cover;
    margin-bottom: 10px;
` 
export const ServicesTexts = styled.div`
    padding: 30px;
`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #FD475D ;
    margin-bottom: 64px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
` 

export const ServicesH2 = styled.h2`
    color: #FD475D ;
    font-size: 2rem;
    margin-bottom:10px;
` 

export const ServicesP = styled.p`
    color: #555 ;
    font-size: 1rem;
    text-align: center;
` 