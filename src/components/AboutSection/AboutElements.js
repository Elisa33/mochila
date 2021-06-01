import styled from 'styled-components'

export const StyledAbout = styled.div`
    width: 85%;
    margin: 60px auto;
    font-weight: lighter;
    font-size: 18px;
    line-height: 26px;
    h3{
        font-size: 20px;
        margin-bottom: 20px;
        color: #E5097F;
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
        width: 50%;
        border-radius: 50%;
        align-self: center;
    }
    h2{
        margin: 20px 0;
        color: #E5097F;
    }

`