import create from 'zustand';

const useUserDataStore = create((set) => ({
    loginData: {},
    setLoginData: (data) => set({loginData: data}),
    userData: {},
    setuserData: (data) => set({userData: data})
}))

export default useUserDataStore;