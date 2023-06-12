import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleInstructor from '../SingleInstructor/SingleInstructor';

const Instructors = () => {

    const [instructorData,setInstructorData] = useState([])

    useEffect(() => {
        fetch('https://language-server-ten.vercel.app/instructor')
        .then((res) => res.json())
        .then((data) =>setInstructorData(data))
    },[])

    return (
        <div className="container mx-auto my-5">
            <h1 className="text-center">Instructors</h1>
            <div className="row mt-3">
            {
                        instructorData.map((data) =>
                        <SingleInstructor
                        key={data._id}
                        data={data}
                        ></SingleInstructor>
                        )
                 
                }
            </div>
        </div>
    );
};

export default Instructors;