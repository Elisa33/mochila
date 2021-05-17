import React from 'react'
import { CardItem, CardH2 } from './CardItemElements';


const Card = ({ src, text}) => {
    return (
 
            <CardItem>
                <img src={src} alt="" />
                <h2>{text}</h2>
                <CardH2>H2 con styled</CardH2>
            </CardItem>
            
    
    )
}

export default Card
