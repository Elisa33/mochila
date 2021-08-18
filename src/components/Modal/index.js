import React, {useRef, useEffect, useCallback} from 'react'

import { Container, Background, Close } from './ModalElements'
import me from '../../images/me.png';

const Modal = (props) => {
    
    const {showModal, setShowModal, person} = props

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
    
    console.log(person.img)
    return (
        <>
        {showModal ? <Background ref={modalRef} onClick={closeModal}>
                        <Container>
                            <Close aria-label='close modal' onClick={()=> setShowModal(prev => !prev)}>X</Close>
                            <img src={me} alt={`fotografía ${person.name}`} />
                            <p>{person.about}</p>
                            <h5>Telefono: {person.tel}</h5>
                        </Container>
        
                    </Background> 
        : null }
            
        </>
    )
}

export default Modal
