import React,{ useEffect } from 'react';
import styled from 'styled-components';
import  WinRate  from 'components/WinRate';

/**모달창 외부화면*/
const ModalContainer = styled.div`
    position : fixed;
    top : 0;
    left : 0;
    width : 100%;
    height: 100%;
    background-color : rgba(0, 0, 0, 0.4);
    display : flex;
    justify-content : center;
    align-items : center;
    cursor : default;
    z-index : 100;
`

/* 모달창*/
const ModalBody = styled.div`
    position : absolute;
    width : 300px;
    height : 300px;
    padding : 40px;
    text-align : center;
    background-color : rgb(255, 255, 255);
    border-radius : 10px;
    box-shadow : 10px 10px 3px 0 rgba(34, 36, 38 , 0.15);
`

/** 모달 닫기 버튼 */
const ModalCloseBtn = styled.div`
    position : absolute;
    top : 15px;
    right : 15px;
    border : none;
    color : rgba(0, 0, 0, 0.7);
    background-color : transparent;
    font-size : 20px;

    :hover{
        cursor : pointer;
    }
`
const H2 = styled.h2`
    font-family : 'DoHyeonRegular';
`

const Modal = (props) =>{
    
    console.log(props);
    const closeModal = () => {
        
        props.closeModal();
    }

    useEffect(()=>{
        document.body.style.cssText = `
            position : fixed;
            top : -${window.scrollY}px;
            overflow-y : scroll;
            width : 100%;
           
            `;

        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10)* -1);
        };
    },[]);

    return (
        <ModalContainer className="Modal" onClick={closeModal}>
            <ModalBody className="modalBody" onClick={(e) => e.stopPropagation()}>
                <ModalCloseBtn id="modalCloseBtn" onClick={closeModal}>
                    X
                </ModalCloseBtn>
                {props.children}
                <H2>최근 10경기 승률</H2>
                <WinRate id={props.id} matchtype={props.matchtype}></WinRate>
            </ModalBody>
        </ModalContainer>

    );

}

export default Modal;