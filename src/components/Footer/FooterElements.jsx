import styled from 'styled-components';


export const FooterContainer = styled.footer`
    background-color: #FD475D;
` 
export const FooterWrap = styled.div`
    width: 85%;
    padding: 48px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
` 

export const FooterTitle = styled.h2`
    color: #fff;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center; 
    @media screen and (min-width: 640px){
        text-align: left;
    }
    
` 
export const FooterP = styled.p`
    color: #fff;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.5rem;
    text-align: center;
    @media screen and (min-width: 768px){
        width: 80%;
    }
` 
export const FooterInputWrapper = styled.div`
    width: 100%;
    margin: 2rem 0;
    display:flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    @media screen and (max-width: 420px){
        flex-direction:column;
    }
` 
export const FooterInput = styled.input`
    font-size: 14px;
    padding: 8px 10px;
    border: 1px solid transparent;
    color: #222;
    font-weight: 300;
    &:focus{
        outline: 2px solid #D90074;
    }
` 
export const FooterButton = styled.button`
    color: #fff;
    padding: 8px 10px;
    border: 1px solid transparent;
    background-color: #FBAFAF;
    font-size: 14px;
    &:hover{
        color: coral;
        transition: 0.3s ease-out;
    }
` 

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    margin-top: 3rem;
    width:100%;
    display:flex;
    justify-content: space-between;
    max-width: 1100px;

`

export const WebSiteRights = styled.small`
    color: #fff;
    margin-bottom: 26px;
    align-self: self-start;
`
export const SocialIcons = styled.div`
    display:flex;
    justify-content: center;
    gap:1rem;
    align-items: center;
    width:240px;
`
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`