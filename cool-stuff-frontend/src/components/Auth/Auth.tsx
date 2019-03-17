import { createContext } from 'react';
import AuthService from './AuthService';

const AuthContextDefaultProps : AuthService = {
  isAuthenticated: () => false,
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
};

const AuthContext = createContext<AuthService>(AuthContextDefaultProps);

export const AuthConsumer = AuthContext.Consumer;
export const AuthProvider = AuthContext.Provider;
