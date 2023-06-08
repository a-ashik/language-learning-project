import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../provider/AuthProvider';
import './Header.css'

const Header = () => {

    const {user,logout} = useContext(AuthContext)
    const handleLogout = () =>{
        logout()
        .then()
    }

    return (
        <div>
        <Navbar collapseOnSelect expand="lg" className='my-1'  >
            <Container>
                <Navbar.Brand href="#home" className="">Language Platform</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto gap-3">
                    <Link className="text-decoration-none text-dark"  to='/' >Home</Link>
                    <Link className="text-decoration-none text-dark"  to='/instructors'>Instructors</Link>
                    <Link className="text-decoration-none text-dark"  to='/classes'>Classes</Link>
                    <Link className="text-decoration-none text-dark"  to='/dashboard ' >Dashboard </Link>
                
                </Nav>
                <Nav>
                {/* <span>{user?.displayName}</span> */}
                {
                    user &&  
                     <div className='profileImg me-2'>
                        <img className='profileImg border' src={user?.photoURL} alt="" />
                    </div>
                }
                    {user ? 
                    <Button className="btn btn-dark"onClick={handleLogout}>Logout</Button> : 
                    <button className=""><Link className="text-decoration-none text-dark" to='/login'>Login</Link></button>
                    }
                 {/* <button><Link className="text-decoration-none text-dark" to='/login'>Login</Link></button> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;