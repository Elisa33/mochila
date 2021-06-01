import styled from 'styled-components'

export const StyledContact = styled.div`

    
`

export const StyledContactWrap = styled.div`
    width: 85%;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr;
    }
    img{
        width: 100%;
    }
`


export const StyledContactP = styled.p`
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: lighter;
    h2{
        font-size: 1.8rem;
        margin: 2rem auto;
        line-height: 2rem;
        color: #E5097F;
    }
    p{
        font-size: 0.8rem;
    }
`

export const ButtonWrap = styled.div`
     margin: 2rem auto;
`