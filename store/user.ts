import { create } from 'zustand'

const userProfileStore = create((set)=>
  ({
    nationalId:'55555 5555. 5 555 ',
    password:'',
    name:'Mohamed ai',
    setNationalId: (nationalId) => set((state) => ({ nationalId: nationalId})),
    setName: (name:string) => set((state) => ({ name: name})),
    setPassword: (password) => set((state) => ({ password: password})),
    
  })
)

export default userProfileStore