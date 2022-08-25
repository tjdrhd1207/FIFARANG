import React, { useState, useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import CardSeason from './CardSeason';
import SoccerPlayer from './SoccerPlayer'; 
import styled from 'styled-components';

/* 강화등급 css*/
const Grade = styled.div`
    /* background-color : ${(props)=> props.value === 1 ? `#c5c8c9` : (props)=> props.value < 4 ? `#7e3f27` : `silver`}; */
    
    ${(props)=>props.value === 1 ? 
        `    
        color: #c5c8c9 !important;
        text-align : center;
        font-weight : bolder;
        background: linear-gradient(140deg, #51545a 0%, #51545a 0%, #42464d 100%) !important;
        border: 1.5px solid #393a3c !important;
        border-top-color: #62676d !important;
        border-left-color: #62676d !important;
        border-right-color: #393a3c !important;
        `
        : props.value < 5 ? 
        `
        color: #7e3f27 !important;
        text-align : center;
        font-weight : bolder;
        background: linear-gradient(140deg, #de946b 0%, #de946b 0%, #ad5f42 100%) !important;
        border: 1.5px solid #864229 !important;
        border-top-color: #e4b7a2 !important;
        border-left-color: #e4b7a2 !important;
        border-right-color: #864229 !important;
        `
        : props.value < 8 ?
        `
        color: #4e545e !important;
        text-align : center;
        font-weight : bolder;
        background: linear-gradient(140deg, rgb(2, 0, 36) 0%, rgb(216, 217, 220) 0%, rgb(184, 189, 202) 100%) !important;
        border: 1.5px solid #a5a8ae !important;
        border-top-color: #d8dadc !important;
        border-left-color: #d8dadc !important;
        border-right-color: #a9aaae !important;
        ` 
        :   
        `
        color: #695100 !important;
        text-align : center;
        font-weight : bolder;
        background: linear-gradient(140deg, #f9dd62 0%, #f9dd62 0%, #dca908 100%) !important;
        border: 1.5px solid #cda000 !important;
        border-top-color: #e9d36c !important;
        border-left-color: #e9d36c !important;
        border-right-color: #cda000 !important;
        `
    }

    `

const TradeDiv = styled.div`
        z-index : 30;
        background : #e9f0f4;
        display : grid;
    `

const TBody = styled.tbody`
        display: grid;
        grid-column-gap: 50px;
        grid-row-gap: 30px;
        grid-template-columns: repeat(1,1fr);
    `

const Card = styled.td`
        background-color : white;
        marin-bottom : 10px;
        width: 200px;
        height: 200px;
        margin-left: 30px;
        border-radius: 10px;
        //vertical-align : middle;
        width: 40%;
        margin-right: 10%;
    `

const TD1 = styled.td`
        background-color : white;
        marin-bottom : 10px;
        width: 200px;
        height: 200px;
        margin-left: 30px;
        border-radius: 10px;
        //vertical-align : middle;
        width: 40%;
        margin-right: 10%;
`
const TR = styled.tr`
        display : flex;
`

const CardInfo = styled.td`
        flex-direction: column;
        display: flex;
        width: 40%;
`

const TradeList = ({id, tradetype}) => {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);

    //console.log("trade : "+trade);
    const fetchRequest = useFetch(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${id}/markets?tradetype=${tradetype}&offset=0&limit=100`);

    //console.log(fetchRequest);

    const handleImgError = (e) =>{
        e.target.src = `https://image5jvqbd.fmkorea.com/files/attach/new/20170630/486616/61245053/697171837/99b983892094b5c6d2fc3736e15da7d1.JPG`;
    }

    useEffect(()=>{
        
    },[]);

    return (
        <TradeDiv>
            <table>
{/*                 <thead>
                    <tr>
                        <th> </th>
                        <th>선수명</th>
                        <th>이미지</th>
                        <th>시즌</th>
                        <th>강화</th>
                        <th>BP</th>
                        <th>거래일자</th>
                    </tr>
                </thead> */}
                <TBody>
                    
                    {fetchRequest.slice(start, end).map((item, index)=>(
                    
                        <TR key={index+1}>
                            
                            <Card>
                            <td><img src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${item.spid}.png`} style={{width : "190px", height : "190px"}} onError={handleImgError} alt=""></img></td>
                            </Card>
                            <CardInfo>
                            <td><SoccerPlayer spid={item.spid} /></td>
                            <td><CardSeason spid={item.spid}></CardSeason></td>
                            <td><Grade value={item.grade}>{item.grade}</Grade></td>
                            <td>{item.value}</td>
                            <td>{JSON.stringify(item.tradeDate).substring(1,11)}</td>
                            </CardInfo>
                        </TR>
                    
                    ))}
                </TBody>
            </table>
        </TradeDiv>
    );


}

export default TradeList;