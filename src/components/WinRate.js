import React, {useState, useRef, useEffect, useCallback} from 'react';
import useFetch from 'hooks/useFetch';
import WinLoseResult from './WinLoseResult';


const WinRate = ({id, matchtype, onDataChange}) =>{
    const [fetchCompleted, setFetchCompleted] = useState(false);
    const [resultArray, setResultArray] = useState([]);

    const fetchRequest = useFetch(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${id}/matches?matchtype=${matchtype}&offset=0&limit=10`);

    const [cnt, setCnt] = useState([{id : '', value : ''}]);

    const handleDataChange = (newData) => {
        console.log("받아온 결과 : "+newData);
        setResultArray([...newData]);
    };

    useEffect(()=>{
        console.log(fetchRequest);
        if(fetchRequest && fetchRequest.length > 0){
            setFetchCompleted(true);
            //const newData = '헬로';
            onDataChange(true);
        }
    },[fetchRequest, onDataChange]);

    return (
        <>
        {fetchRequest.map((item, index)=>(
           /*  (<WinLoseResult id={id} key={index+1} matchid={item} getCnt={getCnt}/> === 1 ? "예" : "아니오") */
           <WinLoseResult id={id} key={index+1} matchid={item} chartResult={handleDataChange}/>
        ))}
        {/* <button onClick={sendDataToParent}>클릭</button> */}
        {/* <WinLoseResult id={id} key={index+1} matchid={item} getCnt={getCnt} /> */}
        </>
    );
    
}

export default WinRate;