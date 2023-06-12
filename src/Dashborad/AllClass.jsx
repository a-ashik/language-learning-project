import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllClass = () => {

    const [classData,setClassData] = useState([])
    const [disable,setDisable] = useState(false)
    const [disableDeny,setDisableDeny] = useState(false)
    const [approveText, setApproveText] = useState('Approve');
    const [denyText, setDenyText] = useState('Deny');
    const [itemDisabled, setItemDisabled] = useState({});

    useEffect(() => {
        fetch('https://language-server-ten.vercel.app/classes')
        .then((res) => res.json())
        .then((data) =>setClassData(data))
    },[])


    const handleItemToggle = (itemId) => {
        setItemDisabled((prevState) => ({
          ...prevState,
          [itemId]: !prevState[itemId],
        }));
      };

    console.log(classData);

    return (
        <div className='my-5'>
            <h1 className='text-center'>All Classes</h1>
            <div>
            <Table className='mt-4' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name of class</th>
                        <th>Instractor Name</th>
                        <th>Seats</th>
                        <th>Price</th>
                        <th>Approve</th>
                        <th>Deny </th>
                        <th>Feedback</th>
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
                                <td>{data.instructorName}</td>
                                <td>{data.seats}</td>
                                <td>{data.price}</td>
                                <td>
                                    <button
                                        class="btn btn-dark"  disabled={itemDisabled[data._id]}
                                        onClick={()=>{setApproveText('Approved'),
                                        handleItemToggle(data._id)}}>
                                        {approveText}
                                    </button>
                                </td>
                                <td>
                                    <button
                                          class="btn btn-dark"disabled={itemDisabled[data._id]}
                                          onClick={()=>{setDenyText('Denied'),
                                          handleItemToggle(data._id)}}                                 
                                    >{denyText}
                                    </button>
                                </td>
                                <td>
                                    <button  class="btn btn-dark">Feedback</button>
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