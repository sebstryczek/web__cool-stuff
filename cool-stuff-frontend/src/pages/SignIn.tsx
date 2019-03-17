import React, { FormEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AuthConsumer } from '../components/Auth/Auth';
import SignInForm from '../components/SingInForm/SingInForm';

const SignIn = (props: RouteComponentProps) => (
  <AuthConsumer>
    {
      ({ signIn }) => (
        <div>
          <p>You must log in to view the page at {props.history.location.pathname}</p>
          <SignInForm signIn={signIn} />
        </div>
      )
    }
  </AuthConsumer>
);

export default SignIn;
