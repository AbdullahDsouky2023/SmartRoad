import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import api from '..';
export interface Transaction {
  id: number;
  user_id: number;
  gate_id: number;
  wallet_id: number;
  amount: string;
  transaction_type: string;
  transaction_date: string;
  created_at: string | null;
  updated_at: string | null;
}


const fetchTransactions = async (): Promise<Transaction> => {
  const { data } = await api.get('/transactions');
  return data;
};

export const useTransactions = () => {
  const {
    data: transactions,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
    staleTime: 1000 * 60 * 5, // Consider data stale after 5 minutes
    retry: 2, // Retry failed requests twice
  });

  return {
    transactions,
    isLoading,
    isError,
    error,
    refetch,
  };
};