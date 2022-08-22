import React from 'react';
import useFetch from 'hooks/useFetch';

const MatchType = ({id}) => {

    const matchTypeResponse = useFetch(`https://static.api.nexon.co.kr/fifaonline4/latest/matchtype.json`);

    const result = matchTypeResponse.filter((item)=>{ return item.matchtype === id});

    return (
        <div>
            {result.map((item, index)=>(
               <h2 key={index}>{item.desc}</h2> 
            ))}
        </div>
    )

}

export default MatchType;