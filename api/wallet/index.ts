import { useQuery } from '@tanstack/react-query';
import { supabase } from '~/lib/supabase';

interface Wallet {
  id: number;
  balance: string;
  user_id: number;
  created_at: string | null;
  updated_at: string | null;
}

const fetchWallet = async (userId: number): Promise<Wallet | null> => {
  const { data, error } = await supabase
    .from('wallets')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useWallet = (userId: number) => {
  const {
    data: wallet,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['wallet', userId],
    queryFn: () => fetchWallet(userId),
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