import React from 'react';
import { Zoom } from "react-awesome-reveal";

const SingleInstructor = ({data}) => {
    return (
        <div className='col-md-4 mt-5'>
            <Zoom>
            <div className="classImg mb-2">
                <img className='classImg' src={data.photo} alt="" />
            </div>
            <h4>Instructor name: {data.instructorName}</h4>
            <p>Email: {data.email}</p>
            </Zoom>
        </div>
    );
};

export default SingleInstructor;