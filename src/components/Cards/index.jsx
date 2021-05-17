import React from 'react';
import { CardsContainer, CardsWrapper } from './CardsElements';
import { CardItem } from './../CardItem/CardItemElements';
import biking from '../../images/biking.svg';

const Cards = () => {
    return (
        <>  

            
            <CardsContainer>
                <h1>Guided Visits</h1>
                <CardsWrapper>
                <CardItem 
                            src={biking}
                            text='Historic Sites'
                            label='sites'
                            path='/services'
                        />
                    <CardItem />
                    <CardItem />

                </CardsWrapper>
                

            </CardsContainer>
       
            
            
        </>
    )
}

export default Cards
