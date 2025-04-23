
import { useQuery } from '@tanstack/react-query';
import { apiService } from '../api/apiService';
import { Portfolio } from '../models';

export const usePortfolio = () => {
  const query = useQuery({
    queryKey: ['portfolio'],
    queryFn: async () => {
      const response = await apiService.get<Portfolio>('/portfolio');
      return response.data;
    },
  });

  return {
    portfolio: query.data,
    loading: query.isLoading,
    error: query.error,
    refresh: query.refetch,
  };
};
