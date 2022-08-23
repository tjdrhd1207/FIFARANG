/**커스텀 훅을 사용하기 위한 js */
import {useEffect, useState} from 'react';
import Error from 'pages/Error.js';

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
            if(!res.ok){
                throw new Error('400 or 500 에러 발생');
            }

            return res.json();
          })
          .then(data => {
            setData(data);
            
          })
          //에러처리
          .catch(()=>{
            console.log('조회 실패');
            setData({statusCode : 404});
            
          });
    },[url]);
    //console.log("data : "+JSON.stringify(data));

    return data;
    
    
}

export default useFetch;