import { create } from "zustand";

const useAppStore = create((set) => ({
  user: null,
  setUser: (dataUser) => set({ user: dataUser }),
}));

export default useAppStore;
