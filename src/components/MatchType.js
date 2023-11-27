import React from 'react';
import useFetch from 'hooks/useFetch';
import styled from 'styled-components';

const H2 = styled.h2`
    font-size : 40px;
    text-align : center;
    color : cadetblue;
    font-family : "DoHyeonRegular";
`;


const MatchType = ({id}) => {

    const matchTypeResponse = useFetch(`https://static.api.nexon.co.kr/fconline/latest/matchtype.json`);

    const result = matchTypeResponse.filter((item)=>{ return item.matchtype === id});

    return (
        <div>
            {result.map((item, index)=>(
               <H2 key={index}>{item.desc}</H2> 
            ))}
        </div>
    )

}

export default MatchType;