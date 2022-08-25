import React, {useState, useEffect, useRef} from 'react';


let cnt = 0;

const WinCnt = ({yn, setCnt}) =>{

    //const [winCnt, setWinCnt] = useState([]);
    
    const winFun = () =>{
        if(yn==="승"){
            cnt +=1;
            console.log(cnt);
        }
    }

    const reset = () => {
        cnt = 0;
    }

    useEffect(()=>{
        winFun();
    },[]);

    return (
        <>
        <div>{cnt}</div>
        
        </>
        
    );
    
}

export default WinCnt;