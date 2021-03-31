import React from 'react';
import preloader from './Preloader.svg';

const Preloader = (props) => {
    return (
        <div className='preloader__box'>
            <img alt='preloader' src={preloader}/>
        </div>
    )
    
}

export default Preloader;