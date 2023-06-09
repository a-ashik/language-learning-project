import React from 'react';
import './SingleClass.css'

const SingleClass = ({data}) => {
    return (
        <div className='col-md-4'>
            <div className="classImg mb-2">
                <img className='classImg' src={data.image} alt="" />
            </div>
            <h4>Name: {data.name}</h4>
            <h5>Instructor name: {data.instructorName}</h5>
            <p>Available seats: {data.seats}</p>
            <p>Price: {data.price}</p>
            <button className="btn btn-dark">Select class</button>
        </div>
    );
};

export default SingleClass;