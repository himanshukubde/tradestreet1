import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

// Define the Loader component
const Loader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' >
            <ScaleLoader color="#36d7b7" />
        </div>
    );
};

export default Loader;
