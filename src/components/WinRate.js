import React, {useState} from 'react';
import useFetch from 'hooks/useFetch';
import WinLoseResult from './WinLoseResult';


var x = 0;

const WinRate = ({id, matchtype}) =>{

    const fetchRequest = useFetch(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${id}/matches?matchtype=${matchtype}&offset=0&limit=10`);



    console.log(x);
    return (
        <>
        {fetchRequest.map((item, index)=>(
            <WinLoseResult id={id} key={index+1} matchid={item} setCnt={0} x={x}></WinLoseResult>
        ))}
        
        </>
    );
    
}

export default WinRate;