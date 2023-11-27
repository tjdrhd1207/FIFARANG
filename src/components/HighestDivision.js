import React, {useEffect, useState, useCallback} from 'react';
import {useParams} from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import PropTypes from "prop-types";
import Division from './Division';
import MatchType from './MatchType';
import styled from 'styled-components';
import WinRate from 'components/WinRate';
import ModalWinRate from 'pages/ModalWinRate';
import Modal from 'pages/Modal';

const MatchContainer = styled.div`
    /* position : relative;
    float : left;
    width : 300px;
    top: 40px;
    left: 100px;
    margin-left : 0px;
    text-align : center;
    height : 100px; */

    left: 50%;
    transform: translate(-103%, 0%);
    background-color: aliceblue;
    position: relative;
    float: left;
    width: 46%;
    top: 40px;
    height: 260px;
    flex-direction: column;
    display: flex;
    text-align: center;
    margin: 0px 3px 0px 5px;

    ::after {
        //content : "|";
        //float : right;
    }
`;


const API_KEY = process.env.REACT_APP_API_KEY;

const HighestDivision = ({id}) =>{

    HighestDivision.propTypes = {
        id: PropTypes.string.isRequired
    };

    const resultMaps = useFetch(`https://public.api.nexon.com/openapi/fconline/v1.0/users/${id}/maxdivision`);
    const highDivision = useFetch(`https://static.api.nexon.co.kr/fconline/latest/division.json`);
    

    const [modal, setModal] = useState(false);
    const [matchType, setMatchType] = useState([]);
/*     const openWinModal = (matchType) => {
        setOpenModal(true);
    }

    const closeWinModal = (matchType) => {
        setOpenModal(false);
    } */

    const onClickModal = (matchType) =>{
        setMatchType(matchType);
    }

    useEffect(()=>{
      }, []);

    return (
        <div>
            {resultMaps.map((item, index)=>(
                    
                        <MatchContainer key={item.matchType} onClick={()=>{onClickModal(item.matchType); setModal(!modal)}}>
                        <MatchType id={item.matchType}></MatchType>
                        {/* <WinRate id={id} matchtype={item.matchType} ></WinRate> */}
                        <Division id={item.division}/>
                        </MatchContainer>
                        
                    
            ))}
            {modal && (<Modal id={id} closeModal={()=> setModal(!modal)} matchtype={matchType}></Modal>)}
        </div>
    );

}

HighestDivision.propTypes = {
    id : PropTypes.string.isRequired
};

export default HighestDivision;