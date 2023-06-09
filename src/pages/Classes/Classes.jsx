import React, { useEffect, useState } from 'react';
import SingleClass from '../SingleClass/SingleClass';

const Classes = () => {

     const [classData,setClassData] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then((res) => res.json())
        .then((data) =>setClassData(data))
    },[])

    console.log(classData);

    return (
        <div className="container my-5">
        <div className=" row">
            {
                classData.map((data) =>
                <SingleClass
                 key={data._id}
                 data={data}
                ></SingleClass>
                )
            }
        </div>
        </div>
    );
};

export default Classes;