import { useQuery } from '@tanstack/react-query'
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useClasses = () => {
    const {user} = useContext(AuthContext)

    const { refetch, data: cart= [] } = useQuery({
        queryKey: ['carts',user?.email],
        queryFn: async (query) =>{
          const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
          return res.json()
        },
      })

      return [cart, refetch]
};

export default useClasses;