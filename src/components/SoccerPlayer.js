import React, {useEffect} from 'react';
import  useFetch  from 'hooks/useFetch';

const SoccerPlayer = ({spid}) =>{
    
    //const pid = JSON.stringify(spid).substring(3,10);

    const fetchRequest = useFetch(`https://static.api.nexon.co.kr/fifaonline4/latest/spid.json`);

    const result = fetchRequest.filter((item, index)=>{ return item.id == spid });

    //console.log("pid : "+pid+", spid : "+spid);
    useEffect(()=>{},[]);

    return (
        <>
         {result.map((item, index)=>(
            <h2 key={index+1}>{item.name}</h2>
         ))}
        </>
    );
;}

export default SoccerPlayer;