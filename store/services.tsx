import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();
export interface Coupon {
  code: string
  description: string
  discount: string
  discount_type: string
  end_date: string
  id: number
  name: string
}

// Create a custom storage object that implements the StateStorage interface
export const mmkvStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    const value = storage.getString(name);
    return value ?? null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    storage.set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    storage.delete(name);
  },
  
};

