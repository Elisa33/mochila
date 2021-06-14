import styled from 'styled-components';

export const InfoContainer = styled.div`
   color: #fff;
   background: ${({lightBg}) => (lightBg ? 'white':'#ffded5')}; 
   @media screen and (max-width:768px){
    padding: 2.5rem 0;
   }
`
export const InfoWrapper = styled.div`
    display: grid;
    width: 100%;
    margin: 1rem auto;
    padding: 0 30px;
    justify-content: center;
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
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width:768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;

    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom:15px;

    grid-area: col2;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding: 1rem 0; 
   /*  padding-bottom: 60px; */
`
export const TopLine = styled.div`
    color: #FD475D;
    font-size: 1rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#FD475D':'#9ad5d6 ')}; 
    @media screen and (max-width:480px){
     font-size: 2rem;
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1rem;
    font-weight: lighter;
    line-height: 1.5rem;
    color: ${({darkText}) => darkText ? '#555 ' :'#FD475D'};
`
export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width:75%;
    margin: 2rem 0;
    padding-right: 0;
    @media screen and (min-width: 640px){
       width:60%;    }
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr;
       width:70%;    }
    @media screen and (min-width: 1024px){
       width:75%;
    }
` 