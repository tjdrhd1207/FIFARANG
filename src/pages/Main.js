import React from 'react';
import background from '../images/background.jpg';
import styled from 'styled-components';
import Background from 'components/Background';
import { createGlobalStyle } from 'styled-components';

import { Link , Navigate } from "react-router-dom";
import InputBtn from 'components/InputBtn';
import { useEffect, useState, useRef, fowardRef } from 'react';

const GlobalStyle = createGlobalStyle`

    body{
        width : 100vw;
        background: url('https://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200212125558962337.jpg') no-repeat center center fixed;
        background-size: cover;

    }

`

const Logo = styled.h2`
        position : absolute;
        font-size : 130px;
        font-style: oblique;
        color : white;
        left : 31%;
        top : 20%;
    `
    const InputUserName = styled.input`
        border: none;
        //background: transparent;
        color: gray5;
        border-bottom: 10px solid white;
        border-radius: 15px;
        width: 700px;
        height: 50px;
        font-size:35px;
        font-family: fantasy;
        font-style: italic;
        text-align: center;
        left : 30%;
        top : 50%;
        position : absolute;
    `


const Main = () =>{

    const [userName, setUserName] = useState('');
    
    const enterRef = useRef({});
    
    useEffect(()=>{
        console.log("Main 실행...");
    },[]);

    
    const change = (e) => {
        setUserName(e.target.value);
        
    }

    const [text, setText] = useState('');

    const onTextChange = (e) => {
        setText(e.target.value);
        //console.log(text);
    }


    return (
            <div>
                <GlobalStyle></GlobalStyle>
                <Logo>FIFARANG</Logo>
                <InputUserName placeholder='구단주명을 입력하세요' onChange={change} ></InputUserName>
                {/* <input type="text" onChange={onTextChange} value={text}></input> */}
                <InputBtn key={userName} id ={userName} >Search</InputBtn>
            </div>
        
    );


}



export default Main;