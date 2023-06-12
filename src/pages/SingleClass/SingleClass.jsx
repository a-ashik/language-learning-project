import React, { useContext } from 'react';
import './SingleClass.css'
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SingleClass = ({data}) => {
  
    const {user} = useContext(AuthContext)

    const handleSelect = (item)=>{
        // console.log(item);
        if(user){

            const classItem = {
                id: item._id,
                name: item.name,
                seats: item.seats,
                image: item.image,
                instructorName: user.displayName,
                email: user.email,
                price: item.price
            }

            fetch('https://language-server-ten.vercel.app/carts',{
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
                        title: 'Select succesfull',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                position: 'top',
                title: 'Login first',
                showConfirmButton: false,
                timer: 1000
              })
        }
    }

    return (
        <div className='col-md-4 mt-5'>
            <div className="classImg mb-2">
                <img className='classImg' src={data.image} alt="" />
            </div>
            <h4>Name: {data.name}</h4>
            <h5>Instructor name: {data.instructorName}</h5>
            <p>Available seats: {data.seats}</p>
            <p>Price: {data.price}</p>
            <div>
            <button disabled={!user} className="btn btn-dark"onClick={() => handleSelect(data)} >Select class</button>
            </div>
        </div>
    );
};

export default SingleClass;