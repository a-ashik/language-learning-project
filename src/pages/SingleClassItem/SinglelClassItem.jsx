import React from 'react';

const SinglelClassItem = ({data}) => {
    return (
        <div className='col-md-4 mt-5'>
            <div className="classImg mb-2">
                <img className='classImg' src={data.image} alt="" />
            </div>
            <h4>Name: {data.name}</h4>
            <h5>Instructor name: {data.instructorName}</h5>
            <p>Available seats: {data.seats}</p>
            <p>Price: {data.price}</p>
        </div>
    );
};

export default SinglelClassItem;