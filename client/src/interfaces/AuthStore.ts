interface AuthStore {
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

export default AuthStore;