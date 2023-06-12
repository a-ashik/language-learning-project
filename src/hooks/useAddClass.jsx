import { useQuery } from '@tanstack/react-query'
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAddClass = () => {
    const {user} = useContext(AuthContext)

    const { refetch, data: classes= [] } = useQuery({
        queryKey: ['classes',user?.email],
        queryFn: async (query) =>{
          const res = await fetch(`https://language-server-ten.vercel.app/classes?email=${user?.email}`)
          return res.json()
        },
      })

      return [classes, refetch]
};

export default useAddClass;