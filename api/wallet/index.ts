import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import api from '..';

interface Wallet {
  id: number;
  balance: string;
  user_id: number;
  created_at: string | null;
  updated_at: string | null;
}

const fetchWallet = async (): Promise<Wallet> => {
  const { data } = await api.get('/wallet');
  return data;
};

export const useWallet = () => {
  const {
    data: wallet,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['wallet'],
    queryFn: fetchWallet,
    staleTime: 1000 * 60 * 5, // Consider data stale after 5 minutes
    retry: 2, // Retry failed requests twice
  });

  return {
    wallet,
    isLoading,
    isError,
    error,
    refetch,
  };
};