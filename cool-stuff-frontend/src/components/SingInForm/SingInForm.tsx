import React, { FormEvent, useState } from 'react'

type SignInFormProps = {
  signIn(email: string, password: string): void,
}

const SignInForm = ({ signIn }: SignInFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (event: FormEvent<HTMLInputElement>) => setEmail(event.currentTarget.value);
  const handlePasswordChange = (event: FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    signIn(email, password);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form name='login' onSubmit={handleSubmit}>
        <input type='text' name='email' onChange={handleEmailChange} />
        <input type='password' name='password' onChange={handlePasswordChange} />
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default SignInForm;
