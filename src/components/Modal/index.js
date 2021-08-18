import React, {useRef, useEffect, useCallback} from 'react'

import { Container, Background, Close } from './ModalElements'

const Modal = ({showModal, setShowModal}) => {

    const modalRef = useRef();
    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal(false);
        }
    }

    const keyPress = useCallback( e =>{
        if(e.key === 'Escape' && showModal){
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() =>{
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    })
  
    return (
        <>
        {showModal ? <Background ref={modalRef} onClick={closeModal}>
                        <Container>
                            <Close aria-label='close modal' onClick={()=> setShowModal(prev => !prev)}>X</Close>
                            <p>A principios de 2021 creé La Mochila de Paseo, con el objetivo de armar un proyecto turístico para ofrecer tours a pie y en bici, adaptados a la coyuntura actual. También estaré interactuando con vos a través de las redes sociales de La Mochila. Me gusta la buena compañía, aprender, comunicar de forma simple e interesante, viajar, probar sabores nuevos, descubrir lugares únicos y no tradicionales, pasar tiempo en la naturaleza, andar en bici, la historia, el arte, bailar tango ¡y muchas cosas mas! Soy muy curiosa e inquieta, siempre estoy buscando nuevas experiencias.</p>
                        </Container>
        
                    </Background> 
        : null }
            
        </>
    )
}

export default Modal
