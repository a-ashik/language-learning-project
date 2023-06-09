import React from 'react';
import useClasses from '../hooks/useClasses';

const MySelectClass = () => {

    const [cart] = useClasses()
    // console.log(cart);

    return (
        <div>
            <h1>{cart.length}</h1>
        </div>
    );
};

export default MySelectClass;