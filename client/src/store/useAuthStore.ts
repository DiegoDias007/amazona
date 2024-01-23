import { create } from 'zustand';
import AuthStore from '../interfaces/AuthStore';

const useAuthStore = create<AuthStore>((set) => {
  const initialAuthenticatedState = localStorage.getItem('authenticated') === 'true';

  return {
    authenticated: initialAuthenticatedState,
    setAuthenticated: (value: boolean) => {
      set({ authenticated: value });
      localStorage.setItem('authenticated', value.toString());
    }
  };
});

export default useAuthStore;