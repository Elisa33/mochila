import React from 'react';
import { CardsContainer, CardsWrapper } from './CardsElements';
import biking from '../../images/biking.svg';
import Card from './../CardItem/index';

const Cards = () => {
    return (
        <>  

            
            <CardsContainer>
                <h1>Guided Visits</h1>
                <CardsWrapper>
             {/*    <Card 
                            src={biking}
                            text='Historic Sites'
                            label='sites'
                            path='/services'
                        /> */}
                   

                </CardsWrapper>
                

            </CardsContainer>
       
            
            
        </>
    )
}

export default Cards
