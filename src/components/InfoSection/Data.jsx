import adventure from '../../images/adventure.svg';
import exploring from '../../images/exploring.svg';
import biking from '../../images/biking.svg';

export const homeObjOne = {
    id: 'one',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'San Telmo',
    headline: 'Bar Notable La Poesía',
    description: '¿Conocés éste Bar Notable? Te invitamos a descubrir la magia de uno de los cafés notables de San Telmo. Tal como reza la placa de mármol en su puerta " Bar literario, café de arte y esquina de encuentro", en esta nota encontrarás su historia, tips para visitarlo y mucho mas!',
    buttonLabel: 'Seguir leyendo',
    imgStart: false,
    img: adventure,
    alt: 'imagen',
    dark: true,
    primary: true,
    darkText: true
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
    primary: false,
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
    primary: true,
    darkText: true
}