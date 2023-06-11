import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {
    const {user} = useContext(AuthContext)

    const hangleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const image =form.image.value
        const seats =form.seats.value
        const price =form.price.value
        const status =form.status.value

        const classItem = {
            name: name,
            seats: seats,
            image: image,
            instructorName: user.displayName,
            email: user.email,
            price: price,
            status: status
        }

        console.log(classItem);

        fetch('http://localhost:5000/classes',{
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(classItem)
        })
        .then(response =>response.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Class Added Succesfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div>
            <h1 className='text-center'>Add Class</h1>

            <Form onSubmit={hangleSubmit} className="w-100 ">
            <div className='d-flex mt-5'>
            <Form.Group className="mb-3 me-3" controlId="formBasicEmail">
                    <Form.Label>Class name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3 me-3" controlId="formBasicEmail">
                    <Form.Label>Class Image</Form.Label>
                    <Form.Control type="text" name="image" placeholder="" />
                </Form.Group>
            </div>
            <div className='d-flex'>
            <Form.Group className="mb-3 me-3" controlId="formBasicEmail">
                    <Form.Label>Available seats</Form.Label>
                    <Form.Control type="text" name="seats" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="price" placeholder="" />
                </Form.Group>
            </div>
            <div className='d-flex'>
            <Form.Group className="mb-3 me-3" controlId="formBasicEmail">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" name="status" placeholder="" />
                </Form.Group>
            </div>

            <Button variant="dark" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
    );
};

export default AddClass;