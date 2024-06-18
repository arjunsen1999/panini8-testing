import { create } from "zustand";


export const useAuth = create((set) => ({
    isAuth : false,
    setIsAuth : (value : string | boolean) => set(() => ({isAuth : value})) 
}))