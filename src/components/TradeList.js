import React, { useState, useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import CardSeason from './CardSeason';
import SoccerPlayer from './SoccerPlayer'; 

const TradeList = ({id, tradetype}) => {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);

    //console.log("trade : "+trade);
    const fetchRequest = useFetch(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${id}/markets?tradetype=${tradetype}&offset=0&limit=100`);

    console.log(fetchRequest);

    const handleImgError = (e) =>{
        e.target.src = `https://image5jvqbd.fmkorea.com/files/attach/new/20170630/486616/61245053/697171837/99b983892094b5c6d2fc3736e15da7d1.JPG`;
    }

    useEffect(()=>{
        
    },[]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th>선수명</th>
                        <th>이미지</th>
                        <th>시즌</th>
                        <th>강화</th>
                        <th>BP</th>
                    </tr>
                </thead>
                <tbody>

                    {fetchRequest.slice(start, end).map((item, index)=>(
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td><SoccerPlayer spid={item.spid} /></td>
                            <td><img src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${item.spid}.png`} width="128px" height="128px" onError={handleImgError} alt=""></img></td>
                            <td><CardSeason spid={item.spid}></CardSeason></td>
                            <td>{item.grade}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );


}

export default TradeList;