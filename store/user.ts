import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  userId: string;
  fullName: string;
  nationalId: string;
  phoneNumber: string;
  email: string;
  password: string;
  address: string;
  status: string;
  registrationDate: string;
  lastLogin: string;
  preferredLanguage: string;
  setUser: (data: Partial<UserState>) => void;
  setUserField: (field: keyof UserState, value: any) => void;
  reset: () => void;
  clearAll: () => void;
}

const initialState: Omit<UserState, 'setUser' | 'setUserField' | 'reset' | 'clearAll'> = {
  userId: '',
  fullName: '',
  nationalId: '',
  phoneNumber: '',
  email: '',
  password: '',
  address: '',
  status: '',
  registrationDate: '',
  lastLogin: '',
  preferredLanguage: '',
};

const userProfileStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (data) => set((state) => ({ ...state, ...data })),
      setUserField: (field, value) => set((state) => ({ ...state, [field]: value })),
      reset: () => set(() => initialState),
      clearAll: () => {
        AsyncStorage.clear().then(() => set(() => initialState));
      }
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        userId: state.userId,
        fullName: state.fullName,
        nationalId: state.nationalId,
        phoneNumber: state.phoneNumber,
        email: state.email,
        address: state.address,
        status: state.status,
        registrationDate: state.registrationDate,
        lastLogin: state.lastLogin,
        preferredLanguage: state.preferredLanguage,
      }),
    }
  )
);

export default userProfileStore;