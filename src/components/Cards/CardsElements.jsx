import styled from 'styled-components';

export const CardsContainer = styled.div`
    max-width: 1120px;
    width: 90%;
    margin: 2rem auto;
    h1{
        text-align: center;
        color: #E5097F;
        padding-bottom: 2rem;
    }
`

export const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
}
`

