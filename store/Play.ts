import {create} from "zustand";

export const useAuth = create((set) => ({
    isAuth : false,
    score : 0,
    setScore : (value : number) => set(() => ({score : value})) ,
    setIsAuth : (value : string | boolean) => set(() => ({isAuth : value})) ,
    questionRefresh : false,
    setQuestionRefresh : () => set((state : any) => ({questionRefresh : !state.questionRefresh}))
}))
