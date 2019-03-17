interface AuthService {
  isAuthenticated(): boolean,
  signIn(email: string, password: string): void,
  signOut(): void,
  signUp(): void,
}

export default AuthService;
