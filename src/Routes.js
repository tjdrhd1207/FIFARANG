import React, {useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';
import Main from './pages/Main.js'; 
import Detail from './pages/Detail.js';

const Routing = () => {



    return (
        
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/search/:id" element={<Detail/>}></Route>
            </Routes>
        
    );
}

export default Routing;