import { create } from 'zustand';

interface AuthStore {
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

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