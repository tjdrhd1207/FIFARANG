import React, {useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';
import Main from './pages/Main.js'; 
import Detail from './pages/Detail.js';
import Error from 'pages/Error.js';
import GlobalFonts from './styles/fonts/font.js';

const Routing = () => {



    return (
        <>
            <GlobalFonts/>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/search/:id" element={<Detail id={''} />}></Route>
                <Route element={<Error/>}></Route>
            </Routes>
        </>
    );
}

export default Routing;