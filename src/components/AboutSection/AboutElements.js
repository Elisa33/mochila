import styled from 'styled-components'

export const StyledAbout = styled.div`
    /* max-width: 1100px; */
    padding: 0 30px;
    margin: 5rem auto;
    font-weight: lighter;
    font-size: 1rem;
    line-height: 26px;
    h3{
        font-size: 1.5rem;
        margin-bottom: 20px;
        color: #FD475D;
        text-transform: uppercase;
    }
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
    p{
        font-size: 0.9rem;
        color:#444;
        
    }
    span{
            font-weight: bold;
            color:#FD475D;
        }
`
export const StyledAboutUs = styled.div`
    margin:50px 0;
    display: grid;
    gap: 50px;
    grid-template-columns: 1fr;
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr;
    }
`
export const StyledAboutMe = styled.div`
    display: flex ;
    flex-direction: column;
    font-size: 1rem;
    line-height: 24px;

    img{
        width: 40%;
        border-radius: 50%;
        align-self: center;
    }
    h2{
        margin-top: 1rem;
        color: #FD475D;
        align-self: center;
    }
    h3{
        align-self: center;
        font-size: 0.8rem;
        margin: 0.5rem 0;
        font-weight: normal;
        color:#444 ;
    }
    p{
        align-self: center;
        font-size: 1rem;
        margin-bottom: 1rem;
        font-weight: lighter;
        height: 5rem;
        color:#444;
        @media screen and (min-width: 640px){
            height: 2.5rem;
        }
        @media screen and (min-width: 768px){
            height: 5rem;
        }
        @media screen and (min-width: 1024px){
            height: 3rem;
        }
    }
    a{
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem auto;
        align-self: center;
        font-size: 2rem;
        color: #fff;
        background: #F9CC87;
        border-radius: 50%;
        padding: 20px;
        text-decoration: none;
        &:hover{
            font-size:2.5rem ;
            transition: all 0.2s ease-in-out;
        }
    }

`