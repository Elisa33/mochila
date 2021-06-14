import styled from 'styled-components'

export const StyledContact = styled.div`
    margin: 5rem auto;
`

export const StyledContactWrap = styled.div`
    margin: 3rem auto;
    padding:0 30px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
    @media screen and (min-width: 640px){
        max-width: 600px;
    }
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr;
        max-width: 700px;
    }
    @media screen and (min-width: 1024px){
        max-width: 980px;
    }
    @media screen and (min-width: 1280px){
        max-width: 1100px;
    }
    img{
        width: 100%;
    }

`


export const StyledContactP = styled.p`
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: lighter;
    color:#555;
    h2{
        font-size: 1.5rem;
        margin: 2rem auto;
        line-height: 2rem;
        color: #FD475D;
    }
    p{
        font-size: 1rem;
    }
`

export const ButtonWrap = styled.div`
    width: 65%;
     /* margin: 2rem auto; */
`