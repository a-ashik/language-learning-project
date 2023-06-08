import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const Register = () => {

    const {creatUser,updateUserProfile} = useContext(AuthContext)
    const { register, handleSubmit,reset,formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = data =>{
        //  console.log(data)
         creatUser(data.email, data.password)
         .then(()=>{
            updateUserProfile(data.name, data.photo)
            .then(()=>{
                console.log('profile updated');
                reset()
                navigate('/')
            })
            .catch((error)=>{
                console.log(error);
            })

            Swal.fire({
                title: 'Register succesful',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
         })

        };


    return (
        <div className="w-50 mx-auto my-5">
            <h1 className="text-center">Register Now</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" {...register("name")} placeholder="Enter Your Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" {...register("email")} placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" {...register("password", { required: true,  minLength:6, maxLength: 20 })} placeholder="Password" />
                {errors.password?.type === 'required' && <p >password is required</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" {...register("photo")} placeholder="Password" />
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
            </Form>
            <p className="mt-2">Already have an account?<Link className="" to='/login'>Click here to Login</Link></p>
        </div>
    );
};

export default Register;