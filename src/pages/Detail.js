import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Division from 'components/Division';
import HighestDivision from 'components/HighestDivision';
import useFetch from 'hooks/useFetch';
import PropTypes from "prop-types";

const Detail = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const result = useFetch(`https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${id}`);
    const accessId = result.accessId;

    const highComponent = (text) => {
            //console.log("하위 컴포넌트");
            //console.log(text);
    }
    console.log("accessId :"+accessId);


    useEffect(()=>{
        console.log("Detail 실행...");

    },[]);


    return (
        <div>
            <h1>{id}</h1>님의 최고 티어등급
            {/* <Division propFunction={highComponent}></Division> */}
            <HighestDivision key={accessId} id={accessId}></HighestDivision>
            
        </div>
    );
}

Detail.propTypes = {
    id : PropTypes.string.isRequired
};

export default Detail;  