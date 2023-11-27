import React, {useState, useEffect, useRef} from 'react';



const WinCnt = ({result}) =>{

    const renderCnt = useRef(0);
    
   /*  const winFun = () =>{
        if(yn==="승"){
            console.log("승체크");
            renderCnt.current = renderCnt.current+1;
            console.log(renderCnt);
        }
    } */

    localStorage.setItem('결과', result);

    useEffect(()=>{
        //winFun();
    },[]);

    return (
        <>
        <div>{result}</div>
        
        </>
        
    );
    
}

export default WinCnt;