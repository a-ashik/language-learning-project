import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllClass = () => {

    const [classData,setClassData] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then((res) => res.json())
        .then((data) =>setClassData(data))
    },[])

    console.log(classData);

    return (
        <div>
            <h1>i am all classes</h1>
            <div>
            <Table className='' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name of class</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classData.map((data, index) =>
                            <tr className="my-auto" key={data._id}>
                                <td>{index+1}</td>
                                <td style={{width: '100px', height: '60px'}}>
                                    <img className="w-100 h-100" src={data.image} alt="" />
                                </td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>
                                    <button onClick={()=> handleDelete(data)} >Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AllClass;