import React, {useState, useEffect} from 'react';
import useFetch from 'hooks/useFetch';


const Division = ({id}) => {

    const fetchResult = useFetch(`https://static.api.nexon.co.kr/fifaonline4/latest/division.json`);
    
    const result = fetchResult.filter((item)=> { return item.divisionId === id });

    return (
        <div>
              {result.map((item, index)=>(
                       <h2 key={index}>{item.divisionName}</h2>
              ))}

        </div>
    );
    
}

export default Division;