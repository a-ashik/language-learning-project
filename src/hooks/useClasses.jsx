import { useQuery } from '@tanstack/react-query'
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useClasses = () => {
    const {user} = useContext(AuthContext)

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodoList,
      })
};

export default useClasses;