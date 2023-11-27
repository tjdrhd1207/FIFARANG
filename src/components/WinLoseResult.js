import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import useFetch from 'hooks/useFetch';
import WinCnt from './WinCnt';




const WinLoseResult = ({id, matchid, chartResult}) =>{

    const fetchRequest = useFetch(`https://public.api.nexon.com/openapi/fconline/v1.0/matches/${matchid}`);
    const matchInfo = fetchRequest.matchInfo;
    //const [index, setIndex] = useState('');
    
    const sendDataToParent = (params) => {
            console.log("인덱스 : "+params);
            chartResult(params);
     }

    useEffect(()=>{
        
    },[]);
   
    return (
        <>

        {matchInfo && 
            matchInfo
                .filter((item)=>item.accessId === id)
                .map((item, index)=>{
                    sendDataToParent(item.matchDetail.matchResult);
                    return item.matchDetail.matchResult;
                })
        }
        
        {/* <WinCnt result={item.matchDetail.matchResult}/> */}
        </>
    );
}

export default WinLoseResult;