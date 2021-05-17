import adventure from '../../images/adventure.svg';
import exploring from '../../images/exploring.svg';
import biking from '../../images/biking.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'San Telmo',
    headline: 'Recorrido por uno de los barrios más tradicionales de Buenos Aires',
    description: 'Ingresar a este sector de la ciudad que hoy reconocernos como San Telmo supone un encuentro con el pasado',
    buttonLabel: 'Comencemos',
    imgStart: false,
    img: adventure,
    alt: 'imagen',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'stories',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Recoleta',
    headline: 'Recorrido por uno de los barrios más tradicionales de Buenos Aires',
    description: 'Ingresar a este sector de la ciudad que hoy reconocernos como San Telmo supone un encuentro con el pasado',
    buttonLabel: 'Escucha la historia',
    imgStart: true,
    img: exploring,
    alt: 'imagen',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'guided',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Obelisco',
    headline: 'Recorridos en bici',
    description: 'Ingresar a este sector de la ciudad que hoy reconocernos como San Telmo supone un encuentro con el pasado',
    buttonLabel: 'Contacto',
    imgStart: false,
    img: biking,
    alt: 'imagen',
    dark: true,
    primary: true,
    darkText: false
}