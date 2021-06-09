import styled from 'styled-components'

export const StyledAbout = styled.div`
    max-width: 1100px;
    padding: 0 30px;
    margin: 60px auto;
    font-weight: lighter;
    font-size: 18px;
    line-height: 26px;
    h3{
        font-size: 26px;
        margin-bottom: 20px;
        color: #FD475D;
        text-transform: uppercase;
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
    font-size: 16px;
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
    p{
        align-self: center;
        font-size: 14px;
        margin-bottom: 1rem;
        font-weight: normal;
    }

`