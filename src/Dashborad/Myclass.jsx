import React from 'react';
import useClasses from '../hooks/useClasses';
import { NavLink, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAddClass from '../hooks/useAddClass';
import { Link } from 'react-router-dom';

const MySelectClass = () => {

    const [classes, refetch] = useAddClass()
    // console.log(classes);
    return (
        <div className='container mx-auto'>
            <div className="d-flex justify-content-between ms-5 mt-3 w-100">
                <h1 className="me-5">Total Class: {classes?.length || 0}</h1>
                <button className='btn btn-dark px-3'>
                <Link exact to="addclass" className="text-decoration-none text-light">  
                    Add a Class
                </Link>
                </button>
            </div>
            <div className='w-100 mt-3'>
            <Table className='' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name of class</th>
                        <th>Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map((data, index) =>
                            <tr className="my-auto" key={data._id}>
                                <td>{index+1}</td>
                                <td style={{width: '100px', height: '60px'}}>
                                    <img className="w-100 h-100" src={data.image} alt="" />
                                </td>
                                <td>{data.name}</td>
                                <td>{data.seats}</td>
                                <td>{data.price}</td>
                                <td>{data.status}</td>
                                <td>
                                    <button class="btn btn-dark">Update</button>
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

export default MySelectClass;