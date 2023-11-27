import React, {useEffect} from 'react';
import  useFetch  from 'hooks/useFetch';
import styled from 'styled-components';


const Name = styled.h2`
font-size : 20px;
margin-top: -1px;
`

const SoccerPlayer = ({spid}) =>{
      
    const fetchRequest = useFetch(`https://static.api.nexon.co.kr/fconline/latest/spid.json`);

    const result = fetchRequest.filter((item, index)=>{ return item.id == spid });

    useEffect(()=>{},[]);

    return (
        <>
         {result.map((item, index)=>(
            <Name key={index+1}>{item.name}</Name>
         ))}
        </>
    );
;}

export default SoccerPlayer;