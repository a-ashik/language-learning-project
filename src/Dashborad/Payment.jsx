import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheakOutForm from './CheakOutForm';
import { Elements } from '@stripe/react-stripe-js';
import useClasses from '../hooks/useClasses';


const stripePromise = loadStripe(import.meta.env.VITE_Pk)

const Payment = () => {
    const [cart, refetch] = useClasses()
    const total = cart.reduce((sum, data) =>parseFloat(data.price) + sum,0)
    const price = parseFloat(total.toFixed(2))
    console.log(price);
    return (
        <div>
            <h1 className="text-center mb-5">PAYMENT</h1>
            <Elements stripe={stripePromise}>
                 <CheakOutForm price={price}></CheakOutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;