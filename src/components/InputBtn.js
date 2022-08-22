import React, { forwardRef } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    position : absolute;
    left : 65%;
    top : 50.5%;
    width : 100px;
    height : 47px;
    background-color : white;
    border : none;
    color : cornflowerblue;
    cursor : pointer;
    font-size : 1.5em;
    text-decoration : none;
    justify-content : center;
    align-items : center;
    display : flex;
    `

const InputBtn = forwardRef(({id}, ref1) => {
    
    const onClick = (ref1) => {
        console.log("버튼클릭 : "+id);
    }
    return (
        <StyledLink to={`/search/${id}`} onClick={onClick}>Search</StyledLink>
    );
})

export default InputBtn;