import React from 'react';
import useClasses from '../hooks/useClasses';
import { Table } from 'react-bootstrap';

const EnrolledClasses = () => {
    const [cart, refetch] = useClasses()
    return (
        <div>
            <h1 className='text-center'>Enrolled classes</h1>
            <Table className='mt-5' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name of class</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((data, index) =>
                            <tr className="my-auto" key={data._id}>
                                <td>{index+1}</td>
                                <td style={{width: '100px', height: '60px'}}>
                                    <img className="w-100 h-100" src={data.image} alt="" />
                                </td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                            </tr>
                        )
                    }
                </tbody>
                </Table>
            </div>
       
    );
};

export default EnrolledClasses;