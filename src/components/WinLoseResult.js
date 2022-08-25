import React, { useEffect, useState } from 'react';
import useFetch from 'hooks/useFetch';
import WinCnt from './WinCnt';

const WinLoseResult = ({id, matchid, x}) =>{
    //console.log("match : "+matchid);
    const fetchRequest = useFetch(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchid}`);

    const matchInfo = fetchRequest.matchInfo;
    
    let a = 0;
    
    const hello = () => {
        a+=1;
        console.log(a);
    }

    useEffect(()=>{
       
    },[]);
    
    return (
        <>
        {matchInfo && matchInfo.filter((item)=>item.accessId === id).map((item, index)=>(
            (item.matchDetail.matchResult === "승" ? hello() : null)
            
        ))}
        
        </>
    );
}

export default WinLoseResult;