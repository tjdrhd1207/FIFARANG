import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Division from 'components/Division';
import HighestDivision from 'components/HighestDivision';
import useFetch from 'hooks/useFetch';
import PropTypes from "prop-types";
import Error from "pages/Error";
import TradeList from 'components/TradeList';
import styled, {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`

    body{
        /*height : 100vh;*/
        width : 100vw;
        background-color : aliceblue;

    }
`


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
        font-family : 'DoHyeonRegular';
        left : 38%;
        position : relative;
        margin-bottom : 10px;
        font-size : 18px;
    `    
const NavBar = styled.div`
        background-color: palegoldenrod;
        height : 70px;
        position : relative;
        margin-top: -10px;
        margin-left: -10px;
        box-shadow : rgb(0 0 0 / 20%) 0px -1px 0px 0px inset;

        & > .logo{
            color: white;
            font-weight: bold;
            font-size: 40px;
            left: 10px;
            position: relative;
            top: 10px;
        }
        
    `

const HR = styled.div`
        display : flex;
        flex-basis : 100%;
        align-items : center;
        color : rgba(0, 0, 0, 0.35);
        font-size : 12px;
        margin : 8px 0px;

        ::before, ::after{
            content : "";
            flex-grow : 1;
            background : rgba(0, 0, 0, 0.35);
            height : 1px;
            font-size : 0px;
            line-height : 0px;
            margin : 0px 16px;
        }
    `

const TearDiv = styled.div`
        position : relative;
        //background: aliceblue;
        //margin-left: -10px;
        //margin-top: 0px;
        //height : 400px;
        background: #e9f0f4;
        height: 95%;
        width : 35%;
        margin-top: 10px;
        cursor : pointer;

        & > .userId{
            color: black;
            letter-spacing: 20px;
            font-size: 70px;
            position: relative;
            top: 20px;
            left: 33%;
            font-weight: bold;
            font-family : 'DoHyeonRegular';

        }

        & > .highest{
            top: 50px;
            left: 18px;
            position: relative;
            font-size: 20px;
            filter: opacity(80);
            opacity: 0.6;
            font-family : 'Noto Sans Kr Bold';
        }
    `

const ContainerDiv = styled.div`
        display : flex;
        height : 430px;
        //margin-left: -10px;
        background: aliceblue;
        flex-wrap: wrap; //줄넘김 설정
        margin-top: 0px;
        justify-content : 10px;
        justify-content : center;
    ` 
const TradeDiv = styled.div`
        /* position : relative;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column; */
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        overflow-y: hidden;
        height: 100%;
        font-family : 'DoHyeonRegular';
`


const ContainerTrade = styled.div`
        position : relative;
        background : #e9f0f4;
        height : 95%;
        width : 35%;
        margin-top : 10px;

        & > h1{
            left: 37%;
            font-size: 38px;
            position: relative;
            letter-spacing: 8px;
            color: black;
        }
        

    `    



const Detail = () => {

    Detail.propTypes = {};

    const [buyFlag, setBuyFlag] = useState(false);
    const [tradeType , setTradeType] = useState("");
    const [startFlag, setStartFlag] = useState(0);
    const { id } = useParams();
    
  
    const result = useFetch(`https://public.api.nexon.com/openapi/fconline/v1.0/users?nickname=${id}`);
    
    const accessId = result.accessId;

    //console.log("accessId :"+accessId);

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
        //console.log("tradeType : "+tradeType);
    }
    return (
        <>
        <GlobalStyle></GlobalStyle>
        {result.statusCode === 404 ? (<h1>등록되지 않은 구단주 입니다. 다시 검색해주시길 바랍니다.</h1>)
          : (<div>
                {/* <ModalWinRate visible={true}/> */}
                
                <NavBar><span className="logo">FIFARANG</span></NavBar>
                <ContainerDiv>
                <TearDiv>
                <span className="userId">{id}</span><span className="highest">최고 티어등급</span>
                {/* <HR>최고 등급</HR> */}
                {/* <Division propFunction={highComponent}></Division> */}
                <HighestDivision key={accessId} id={accessId}></HighestDivision>
                </TearDiv>
                </ContainerDiv>
                <TradeDiv>
                <ContainerTrade>
                <h1 >거래목록</h1>
                <BuyBtn></BuyBtn><SellBtn></SellBtn>
                {startFlag >= 1 ? <TradeList id={accessId} tradetype={tradeType}></TradeList> : null}
                </ContainerTrade>
                </TradeDiv>
                
            </div>)
        }
        </>
    );
}

Detail.propTypes = {
    id : PropTypes.string.isRequired
};

export default Detail;  