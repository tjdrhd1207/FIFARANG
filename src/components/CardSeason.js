import React, { useEffect } from 'react';
import useFetch from 'hooks/useFetch';

const CardSeason = ({spid}) =>{

    const seasonId = JSON.stringify(spid).substring(0,3);
    //console.log(typeof(seaonId));
    
    const fetchRequest = useFetch(`https://static.api.nexon.co.kr/fconline/latest/seasonid.json`);
    //console.log(typeof(fetchRequest.seaonId));

    const result = fetchRequest.filter((item, index)=>{return item.seasonId == seasonId});

    useEffect(()=>{},[]);
    return (
        <>
        {
            result.map((item, index)=>(
                <img key={index+1} src={item.seasonImg} alt=""></img>
            ))
        }
        </>
    );

}

export default CardSeason;