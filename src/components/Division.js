import React, {useState, useEffect} from 'react';
import useFetch from 'hooks/useFetch';
import styled from 'styled-components';

const H2 = styled.h2`
    font-family : "DoHyeonRegular";
    text-align : center;
`;

const DivisionDiv = styled.div`
    margin-top : -10px;
`

const Division = ({id}) => {

    const fetchResult = useFetch(`https://static.api.nexon.co.kr/fifaonline4/latest/division.json`);

    const divisionNum = id/100;

    const divisionIcon = (divisionNum) =>{
        const url = (divisionNum > 13 ?  `https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank${divisionNum-14}.png` : `https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank${divisionNum-8}.png`);
                
        return url;
    }


    const result = fetchResult.filter((item)=> { return item.divisionId === id });

    return (
        <DivisionDiv>
              {result.map((item, index)=>(
                       <H2 key={index}>{item.divisionName}</H2>
              ))}
            <img src={divisionIcon(divisionNum)} alt=""></img>
        </DivisionDiv>
    );
    
}

export default Division;