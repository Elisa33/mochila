import styled from 'styled-components'

export const Background = styled.div`
    background-color: rgba(0,0,0,0.8);
    height: 100%;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    left: 0;
    z-index:20;
`
export const Container = styled.div`
    width: 80%;
    height: 80%;
    background-color: pink;
    color: white;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    padding: 1rem 2rem;
    img{
        width: 9rem;
    }
    p{
        height: auto;
    }
`

export const Close = styled.button`
    align-self: flex-end;
    color: grey;
    font-size: medium;
    background-color: transparent;
    border: none;
    padding: 0.5rem;
`

