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
        @media screen and (min-width: 375px){
            width: 6rem;
        }
    }
    p{
        height: auto;
        font-size: 1rem;
        @media screen and (min-width: 375px){
            font-size: 0.7rem;
        }
    }
    @media screen and (min-width: 375px){
       width: 85%;
       height: 90%;
    }
    @media screen and (min-width: 640px){
       width: 70%;
       height: 80%;
       p{

           font-size: 0.8rem;
       }
    }
    @media screen and (min-width: 768px){
       width: 70%;
       height: 70%;
    }
    @media screen and (min-width: 1024px){
       width: 60%;
       height: 70%;
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

