import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mmkvStorage } from './services';


interface UserState {
  user_id: string;
  full_name: string;
  national_id: string;
  phone_number: string;
  email: string;
  password: string;
  address: string;
  status: string;
  registration_date: string;
  lastLogin: string;
  preferred_language: string;
  setUser: (data: Partial<UserState>) => void;
  setUserField: (field: keyof UserState, value: any) => void;
  reset: () => void;
  clearAll: () => void;
}

const initialState: Omit<UserState, 'setUser' | 'setUserField' | 'reset' | 'clearAll'> = {
  user_id: '',
  full_name: '',
  national_id: '',
  phone_number: '',
  email: '',
  password: '',
  address: '',
  status: '',
  registration_date: '',
  lastLogin: '',
  preferred_language: '',
};

const userProfileStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (data) => set((state) => ({ ...state, ...data })),
      setUserField: (field, value) => set((state) => ({ ...state, [field]: value })),
      reset: () => set(() => initialState),
      clearAll: () => {
        set(() => initialState)
      }
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => mmkvStorage),
      partialize: (state) => ({
        user_id: state.user_id,
        full_name: state.full_name,
        national_id: state.national_id,
        phone_number: state.phone_number,
        email: state.email,
        address: state.address,
        status: state.status,
        registration_date: state.registration_date,
        lastLogin: state.lastLogin,
        preferred_language: state.preferred_language,
      }),
    }
  )
);

export default userProfileStore;