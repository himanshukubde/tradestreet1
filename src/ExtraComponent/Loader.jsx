import React from 'react';
import RiseLoader from 'react-spinners/RiseLoader';

// Define the Loader component
const Loader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' >
            <RiseLoader color="#36d7b7" />
        </div>
    );
};

export default Loader;
