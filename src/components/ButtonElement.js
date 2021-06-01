import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius:50px;
    background: ${({primary}) => (primary ? '#E5097F' : '#3F0022')};
    white-space: nowrap;
    padding: ${({big}) => ( big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => ( dark ? 'black' : 'white')};
    font-size: ${({fontBig}) => ( fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out;
    &:hover{
        color:  ${({primary}) => (primary ? 'black' : '#fff')};
        transition: 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#E5097F')};
    }
`