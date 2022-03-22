import Styled from 'styled-components';

export const Button = Styled.button`

    background-color : ${ ({ bg, color }) => bg ?? 'blue' };
    color : ${ ({ bg, color }) => color ?? 'pink' };
    width : 100px;
    height : 50px;
    display : inline-block;
    border : 1px solid ${ ({ bg, color }) => bg };
    border-radius : 5px;
    text-weight : bold;
    transition : .5s;
    cursor : pointer;


    &:hover {
        background-color : green;
        color : orange;
    }

`



