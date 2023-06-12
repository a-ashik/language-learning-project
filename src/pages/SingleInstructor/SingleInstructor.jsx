import React from 'react';

const SingleInstructor = ({data}) => {
    return (
        <div className='col-md-4 mt-5'>
            <div className="classImg mb-2">
                <img className='classImg' src={data.photo} alt="" />
            </div>
            <h4>Instructor name: {data.instructorName}</h4>
            <p>Email: {data.email}</p>
        </div>
    );
};

export default SingleInstructor;