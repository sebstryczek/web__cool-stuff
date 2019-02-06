import React, { ReactNode } from 'react';

type Props = {
  children({ isAuth }: {isAuth: Boolean}): ReactNode,
};

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
