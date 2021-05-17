import React from 'react'
import { StyledCard } from './CardItemElements';


const Card = ({ src, text}) => {
    return (
 
            <StyledCard>
                <img src={src} alt="" />
                <h2>{text}</h2>
            </StyledCard>
            
    
    )
}

export default Card
