import {useQuery } from '@tanstack/react-query';
import React from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AllUser = () => {
    const {data : users =[], refetch} = useQuery(['users'], async()=>{
        const res = await fetch('https://language-server-ten.vercel.app/users')
        return res.json()
    })

    const handleMakeAdmin = (id)=>{
        fetch(`https://language-server-ten.vercel.app/users/admin/${id}`,{
            method: 'PATCH',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'make admin success',
                    showConfirmButton: false,
                    timer: 1200
                  })
            }
        })
    }


    const handleMakeInstructor= (data) =>{
        console.log(data);
        fetch(`https://language-server-ten.vercel.app/users/instructor/${data._id}`,{
            method: 'PATCH',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'make Instructor success',
                    showConfirmButton: false,
                    timer: 1200
                  })
            }
        })


        const instructorItem = {
            instructorName: data.name,
            email: data.email,
            photo: data.photo
        }

        fetch('https://language-server-ten.vercel.app/instructor',{
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(instructorItem)
        })
        .then(response =>response.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'succesfull',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    return (
        <div className="mt-5">
            <h1>Total User: {users.length}</h1>
            <div>
            <Table className='mt-4 gap-5' >
                <thead>
                    <tr >
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Make Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((data, index) =>
                            <tr className="my-auto" key={data._id}>
                                <td>{index+1}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>
                                    {
                                        data.role === 'admin' ? 'complete' :
                                         <button onClick={() =>handleMakeAdmin(data._id)} className="btn btn-dark">Admin</button>
                                    }
                                </td>
                                <td>
                                {
                                 data.role === 'instructor' ? 'complete' :
                                 <button onClick={() =>handleMakeInstructor(data)} className="btn btn-dark">Instructor</button>
                                }
                                    
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

export default AllUser;