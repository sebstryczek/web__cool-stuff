import React, { createContext, ReactNode, Component } from 'react';

/*
type Props = {
  children({ isAuth }: {isAuth: Boolean}): ReactNode,
};
*/

type Props = {
  children: ReactNode,
};

type s = {
  isAuthenticated: () => void,
  signIn: () => void,
  signOut: () => void,
  signUp: () => void,
};

const AuthContext = createContext({
  isAuthenticated: () => console.log('isAuthenticated'),
  signIn: () => console.log('signIn'),
  signOut: () => console.log('signOut'),
  signUp: () => console.log('signUp'),
});

export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
  authService: s;
  constructor(props: Props) {
    super(props);
    this.authService = {
      isAuthenticated: () => console.log('isAuthenticated'),
      signIn: () => console.log('signIn'),
      signOut: () => console.log('signOut'),
      signUp: () => console.log('signUp'),
    };
  }
  render() {
    return <AuthContext.Provider value={this.authService}>{this.props.children}</AuthContext.Provider>;
  }
}
/*
const Auth = ({ children } : Props) => (
  <>
    {
      children({
        isAuth: true,
      })
    }
  </>
);

export default Auth;
*/
