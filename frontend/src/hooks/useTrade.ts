import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiService } from '../api/apiService';
import { TradeRequest } from '../models';



export const useTrade = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (tradeData: TradeRequest) => {
      return apiService.post('/trade', tradeData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    },
  });

  return {
    trade: mutation.mutate,
    tradeAsync: mutation.mutateAsync,
    loading: mutation.isPending,
    error: mutation.error,
  };
};
