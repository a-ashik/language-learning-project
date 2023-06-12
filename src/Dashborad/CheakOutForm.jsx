import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const CheakOutForm = ({price}) => {

    console.log(price);

    const stripe = useStripe()
    const elements = useElements()
    const {user} = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(price)
        })
        .then(response =>response.json())
        .then((data) =>{
            console.log(data)
            setClientSecret(data)
        });
    },[])

    const handleSubmit = async(event) => {
        event.preventDefault();


        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement)
        if(card == null){
            return;
        }

        console.log(card);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }

          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            {clientSecret},
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.email || 'unknown',
                },
              },
            },
          );

        //   if(confirmError){
        //     console.log(confirmError);
        //   }

        //   console.log(paymentIntent);

        };



    return (
        <form  style={{width:'500px'}} onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-warning mt-3' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
};

export default CheakOutForm;