import React, { useEffect, useState } from 'react';
import SingleClass from '../SingleClass/SingleClass';

const Classes = () => {

     const [classData,setClassData] = useState([])

    useEffect(() => {
        fetch('https://language-server-ten.vercel.app/classes')
        .then((res) => res.json())
        .then((data) =>setClassData(data))
    },[])

    

    return (
        <div className="container my-5">
            <h1 className="text-center">Classes</h1>
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