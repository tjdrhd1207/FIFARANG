import React, {useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';
import Main from './pages/Main.js'; 
import Detail from './pages/Detail.js';
import Error from 'pages/Error.js';

const Routing = () => {



    return (
        
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/search/:id" element={<Detail/>}></Route>
                <Route element={<Error/>}></Route>
            </Routes>
        
    );
}

export default Routing;