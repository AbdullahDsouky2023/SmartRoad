import { create } from 'zustand'

const userProfileStore = create((set)=>
  ({
    nationalId:'',
    password:'',
    setNationalId: (nationalId) => set((state) => ({ nationalId: nationalId})),
    setPassword: (password) => set((state) => ({ password: password})),
  })
)

export default userProfileStore