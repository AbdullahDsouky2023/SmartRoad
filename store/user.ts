import { create } from 'zustand'

const userProfileStore = create((set)=>
  ({
    nationalId:'',
    password:'',
    name:'',
    setNationalId: (nationalId) => set((state) => ({ nationalId: nationalId})),
    setName: (name:string) => set((state) => ({ name: name})),
    setPassword: (password) => set((state) => ({ password: password})),
  })
)

export default userProfileStore