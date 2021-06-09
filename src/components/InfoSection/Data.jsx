import adventure from '../../images/adventure.svg';
import exploring from '../../images/exploring.svg';
import biking from '../../images/biking.svg';

export const homeObjOne = {
    id: 'one',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'San Telmo',
    headline: 'Café la poesía',
    description: 'Te invitamos a descubrir la magia de uno de los cafés notables de San Telmo',
    buttonLabel: 'Leer más',
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
    topLine: 'Monserrat',
    headline: 'Misterios de Montserrat',
    description: 'Te contamos algunos datos curiosos sobre este barrio',
    buttonLabel: 'Leer más',
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
    topLine: 'Monserrat',
    headline: 'Misterios de Montserrat',
    description: 'Te contamos algunos datos curiosos sobre este barrio',
    buttonLabel: 'Leer más',
    imgStart: false,
    img: biking,
    alt: 'imagen',
    dark: true,
    primary: false,
    darkText: false
}