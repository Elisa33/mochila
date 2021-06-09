import adventure from '../../images/adventure.svg';
import exploring from '../../images/exploring.svg';
import biking from '../../images/biking.svg';

export const homeObjOne = {
    id: 'one',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'San Telmo',
    headline: 'Recorrido por uno de los barrios más tradicionales de Buenos Aires',
    description: 'Ingresar a este sector de la ciudad que hoy reconocernos como San Telmo supone un encuentro con el pasado',
    buttonLabel: 'Detalles del tour',
    imgStart: false,
    img: adventure,
    alt: 'imagen',
    dark: true,
    primary: false,
    darkText: false
}

export const homeObjTwo = {
    id: 'two',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Montserrat',
    headline: 'Recorrido por uno de los barrios más tradicionales de Buenos Aires',
    description: 'Ingresar a este sector de la ciudad que hoy reconocernos como San Telmo supone un encuentro con el pasado',
    buttonLabel: 'Detalles',
    imgStart: true,
    img: exploring,
    alt: 'imagen',
    dark: false,
    primary: true,
    darkText: true
}

export const homeObjThree = {
    id: 'three',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Tour en Bici',
    headline: 'Recorridos en bici',
    description: 'Ingresar a este sector de la ciudad que hoy reconocernos como San Telmo supone un encuentro con el pasado',
    buttonLabel: 'Detalles del tour',
    imgStart: false,
    img: biking,
    alt: 'imagen',
    dark: true,
    primary: false,
    darkText: false
}