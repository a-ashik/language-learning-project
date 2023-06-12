import React from 'react';
import Img from '../../assets/error1.jpg'

const ErrorPage = () => {
    return (
        <div style={{height:'100vh'}}>
            <img className="w-100 h-100" src={Img} alt="" />
        </div>
    );
};

export default ErrorPage;