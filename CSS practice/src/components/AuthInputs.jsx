import { useState } from 'react';
import { styled } from 'styled-components';

import Button from './Button';
import Input from './Input'

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      <div className='flex flex-col gap-2 mb-6'>
          <Input
            label="Email"
            invalid={emailNotValid}
            // inline styling for invalid input 
            // style={{
            //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db',
            //   borderColor: emailNotValid && '#f73f3f'
            // }}
            // When adding a className within a one-line, you should make it ternary since you are making the class boolean
            // className={emailNotValid ? 'invalid' : undefined}
            type="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
          />

          <Input
            invalid={passwordNotValid}
            label="Password"
            type="password"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />

      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}


{/* 
If you wanted to inject a class that was always there but make the attributes dynamic, you could;
<label className={`label ${emailNotValid ? 'invalid' : ''}`}>
  Email
</label>
*/}