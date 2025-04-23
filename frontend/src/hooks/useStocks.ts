// src/hooks/useStocks.ts
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { apiService } from '../api/apiService';
import { Stock } from '../models';
import { getSocket } from '../socket';


export const useStocks = () => {
  const queryClient = useQueryClient();
  const socket = getSocket();

  const { data: stocks, isLoading, refetch } = useQuery<Stock[]>({
    queryKey: ['stocks'],
    queryFn: async () => {
      const res = await apiService.get('/stocks');
      return res.data;
    },
    staleTime: 0,
  });

  useEffect(() => {
    const handleUpdate = (updated: Stock[]) => {
      queryClient.setQueryData(['stocks'], updated);
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    };

    socket.on('stockUpdate', handleUpdate);
    return () => {
      socket.off('stockUpdate', handleUpdate);
    };
  }, [socket, queryClient]);

  return {
    stocks: stocks || [],
    loading: isLoading,
    refresh: refetch,
  };
};
