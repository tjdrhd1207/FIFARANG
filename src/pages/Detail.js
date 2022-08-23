import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Division from 'components/Division';
import HighestDivision from 'components/HighestDivision';
import useFetch from 'hooks/useFetch';
import PropTypes from "prop-types";
import Error from "pages/Error";
import TradeList from 'components/TradeList';
import styled from 'styled-components';
import { isCompositeComponent } from 'react-dom/test-utils';

const Btn = styled.button`
        background-color : ${(props)=> props.flag === true ? 'crimson' : 'deepskyblue'};
        display : ${(props)=> props.flag === true  ? 'none' : null};
        /*deepskyblue;*/
        color : white;
        padding : 10px 20px;
        border : 0;
        border-radius : 10px;
        cursor : pointer;
        margin-right : 10px;
    `    


const Detail = () => {

    const [buyFlag, setBuyFlag] = useState(false);
    const [tradeType , setTradeType] = useState("");
    const [startFlag, setStartFlag] = useState(0);
    const { id } = useParams();
    
    const result = useFetch(`https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${id}`);
    
    const accessId = result.accessId;

    console.log("accessId :"+accessId);

    const BuyBtn = () => {
         return <Btn  onClick={onClick} /* className={`divider ${buyFlag ? 'buy' : 'sell'}`} */ flag={buyFlag} start = {startFlag}>구매내역 조회</Btn>
    }

    const SellBtn = () => {
        return  <Btn onClick={onClick} flag={!buyFlag} start = {startFlag} >판매내역 조회</Btn>
    }


    useEffect(()=>{
        console.log("Detail 실행...");

    },[buyFlag]);


    const onClick = () =>{
        //console.log(e);
        setBuyFlag(!buyFlag);
        setStartFlag(startFlag+1);
        buyFlag === true ? setTradeType("sell") : setTradeType("buy");
        console.log("tradeType : "+tradeType);
    }
    return (
        <>
        {result.statusCode === 404 ? (<h1>등록되지 않은 구단주 입니다. 다시 검색해주시길 바랍니다.</h1>)
          : (<div>
                <h1>{id}</h1>님의 최고 티어등급
                {/* <Division propFunction={highComponent}></Division> */}
                <HighestDivision key={accessId} id={accessId}></HighestDivision>
                <h1 >거래목록</h1>
                <BuyBtn></BuyBtn><SellBtn></SellBtn>
                {startFlag >= 1 ? <TradeList id={accessId} tradetype={tradeType}></TradeList> : null}
                
            </div>)
        }
        </>
    );
}

Detail.propTypes = {
    id : PropTypes.string.isRequired
};

export default Detail;  