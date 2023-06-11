import React from 'react';
import useClasses from '../hooks/useClasses';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const MySelectClass = () => {

    const [cart, refetch] = useClasses()
    const total = cart.reduce((sum, data) => data.price + sum,0)

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then((data) =>{
                    if(data.deletedCount > 0) {
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })

            }
          })
    }


    return (
        <div className='container mx-auto'>
            <div className="d-flex justify-content-between ms-5 mt-3 w-100">
                <h1 className="me-5">Total Class: {cart?.length || 0}</h1>
                <button className='btn btn-dark px-3'>Add Class</button>
            </div>
            <div className='w-100 mt-3'>
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
                        cart.map((data, index) =>
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

export default MySelectClass;