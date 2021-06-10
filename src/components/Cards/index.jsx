import React from 'react';
import { CardsContainer, CardsWrapper } from './CardsElements';
import rosada from '../../images/img-01.jpg';
import boca from '../../images/img-02.jpg';
import avenida from '../../images/img-03.jpg';
import Card from './../CardItem/index';

const Cards = () => {
    return (
        <>  

            
            <CardsContainer id="guided">
                <h1>Historias</h1>
                <CardsWrapper>
                <Card 
                            src={rosada}
                            text='Centro Histórico'
                            label='sites'
                            path='/services'
                        />
                <Card 
                            src={boca}
                            text='La Boca'
                            label='sites'
                            path='/services'
                        />
                <Card 
                            src={avenida}
                            text='Moderna'
                            label='sites'
                            path='/services'
                        />
                   

                </CardsWrapper>
                

            </CardsContainer>
       
            
            
        </>
    )
}

export default Cards
