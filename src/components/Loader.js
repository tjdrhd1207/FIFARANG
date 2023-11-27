import React from 'react';
import 'css/loader.css';

const Loader = () => {
    return(
    <div className='lds-dual-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    );
};

export default Loader;