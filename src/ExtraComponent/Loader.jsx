import React from 'react';
import RiseLoader from 'react-spinners/RiseLoader';

// Define the Loader component
const Loader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'  style={{height:"50vh"}} >
            
            <RiseLoader color="#36d7b7" />
        </div>
    );
};

export default Loader;
