import React, {useEffect, useState, useCallback} from 'react';
import {useParams} from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import PropTypes from "prop-types";
import Division from './Division';
import MatchType from './MatchType';

const API_KEY = process.env.REACT_APP_API_KEY;

const HighestDivision = ({id}) =>{

    const resultMaps = useFetch(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${id}/maxdivision`);
    
    const highDivision = useFetch(`https://static.api.nexon.co.kr/fifaonline4/latest/division.json`);

    

    useEffect(()=>{
      }, []);



    return (
        
        <ul>
            {resultMaps.map((item, index)=>(
                <div key={item.matchType}>
                    <li>
                    <MatchType id={item.matchType}></MatchType>
                    <Division id={item.division}/> 
                    </li>
                </div>
            ))}
            
        </ul>
    );

}

HighestDivision.propTypes = {
    id : PropTypes.string.isRequired
};

export default HighestDivision;