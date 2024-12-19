import { create } from 'zustand'

const useWalletStore = create((set)=>
  ({
    balance:0,
    chargeWallet: (newChargeValue) => set((state) => ({ balance: state.balance +Number(newChargeValue)})),
  })
)

export default useWalletStore