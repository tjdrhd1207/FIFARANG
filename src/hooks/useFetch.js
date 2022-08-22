/**커스텀 훅을 사용하기 위한 js */
import {useEffect, useState} from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const useFetch = (url) => {
    
    const [data, setData] = useState([]);
    
    /* useEffect(()=>{
        const getFetchInfo = async() => {
        
            let jsonRequest = await fetch(
                url,{
                    headers : {
                        "Authorization" : API_KEY
                    }
                }
            );
            let fetchResult = await jsonRequest.json();
            setData(fetchResult);
        }
        getFetchInfo();
    },[url]); */

    useEffect(()=>{
        fetch(url, {
            headers : {
                "Authorization" : API_KEY,
                'Content-Type': 'application/json'
            }    
        })
          .then(res => {
            return res.json();
          })
          .then(data => {
            setData(data);
            
          });
    },[url]);
    //console.log("data : "+JSON.stringify(data));

    return data;
    
    
}

export default useFetch;