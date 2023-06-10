import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const {login,googleLogin} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password =form.password.value

        console.log(email, password);
        login(email, password)
        .then(result => {
            const user = result.user
            console.log(user);
            navigate(from, {replace:true})
            Swal.fire({
                title: 'login succesful',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        })
    }

    const handleGoogleSignin =()=>{
        googleLogin()
        .then((result) => {

            const loggedInUser = result.user

            const userInfo ={name: loggedInUser.displayName, email: loggedInUser.email}
            console.log(userInfo);
            fetch('http://localhost:5000/users',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userInfo)
            })
            .then(res=> res.json())
            .then((data)=>{
                if(data.insertedId){
                    console.log('successsssssful login');
                }
            })



            navigate(from, {replace:true})
            Swal.fire({
                title: 'login succesful',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        })
    }


    return (
        <div className="w-50 mx-auto my-5">
            <h1 className="text-center">login form</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
            </Form>
            <button class="btn btn-dark mt-2"onClick={handleGoogleSignin} >SignIn with Google</button>
            <p className="mt-2">Don't have an account?<Link className="" to='/register'>Click here to Register</Link></p>
        </div>
    );
};

export default Login;