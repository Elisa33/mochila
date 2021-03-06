import React, {useState} from 'react'
import { StyledAbout, StyledAboutUs, StyledAboutMe, PlusButton } from './AboutElements';
import me from '../../images/me.png';
import Modal from '../Modal';

const AboutSection = () => {
    const [ showModal, setShowModal] = useState(false);
    const [ person, setPerson] = useState('');

   

        const openModal = () =>{
            setShowModal(prev => !prev)
        }

        const getPerson = (persona) =>{
            setPerson(persona)
            //console.log(persona)
        }
     

    const Mariela = {name: 'Mariela', about:'A principios de 2021 creé La Mochila de Paseo, con el objetivo de armar un proyecto turístico para ofrecer tours a pie y en bici, adaptados a la coyuntura actual. También estaré interactuando con vos a través de las redes sociales de La Mochila. Me gusta la buena compañía, aprender, comunicar de forma simple e interesante, viajar, probar sabores nuevos, descubrir lugares únicos y no tradicionales, pasar tiempo en la naturaleza, andar en bici, la historia, el arte, bailar tango ¡y muchas cosas mas! Soy muy curiosa e inquieta, siempre estoy buscando nuevas experiencias.', img: '../../images/me.png', tel: '112158796' }
    const Liliana = {name: 'Liliana', about:`Acepté la invitación de Mariela de sumarme a su proyecto de La Mochila de Paseo, porque me apasiona investigar, descubrir sitios desconocidos para muchos, escribir artículos de arte y cultura, profundizar en el conocimiento de los lugares y en los chimentos confiables de la historia. Me encanta leer, viajar, ordenar placares (sí! me gusta el orden) y la buena comida. Me gustan los bebés, las plantas y las flores, el té con limón y los encuentros con amigos, entre otras cosas. Además soy egresada de la carrera Letras y trabajo en corrección de textos.`, img: '../../images/me.png', tel: '112158796' } 

    return (
        <StyledAbout id="about">
            <h3>Sobre la mochila</h3>
            <p>
                La mochila de paseo es una invitación a descubrir tu propia ciudad con los ojos curiosos que cualquiera de nosotros tendría al visitar un lugar por primera vez.
                Queremos animarte a <span>descubrir esos sitios únicos e interesantes</span> que despiertan sensaciones de admiración, conexión y creatividad; acompañarte a percibir tu entorno diario de una manera más abierta, integradora y completa, aprehendiendo el pasado y el presente de cada lugar que visitemos juntos. Nuestra misión es que te lleves, además de datos, sobre todo una experiencia.
            </p>
            <StyledAboutUs>
            <StyledAboutMe>
                <img src={me} alt="" />
                <h2>Mariela Oliva</h2>
                <h3>Guía de turismo Nacional</h3>
                <p>Hola mochileros! Soy Mariela, tu guía. Te voy a acompañar en los paseos y te voy a brindar información de interés.</p>
                
               <PlusButton onClick={()=>{openModal(); getPerson(Mariela)}}>&#43;</PlusButton>
               <Modal showModal={showModal} setShowModal={setShowModal} person={person}/>



            </StyledAboutMe>
            <StyledAboutMe>
                <img src={me} alt="" />
                <h2>Liliana</h2>
                <h3>Guía de turismo Nacional</h3>
                <p>Hola, soy Liliana, quien busca y recopila el interesante contenido que te compartimos.</p> 
     
                <PlusButton onClick={()=>{openModal(); getPerson(Liliana)}}>&#43;</PlusButton>

            </StyledAboutMe>


            </StyledAboutUs>

          
            
        </StyledAbout>
    )
}

export default AboutSection
