import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius:50px;
    background: ${({primary}) => (primary ? '#9ad5d6' : '#FD475D')};
    white-space: nowrap;
    padding: ${({big}) => ( big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => ( dark ? '#fff' : 'white')};
    font-size: ${({fontBig}) => ( fontBig ? '1.5rem' : '1rem')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out;
    &:hover{
        color:  ${({primary}) => (primary ? '#444' : '#fff')};
        transition: 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#ffde5e')};
    }
`