import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import '../../styles.css';

import { registerUser } from '../features/auth/authActions';

function SignUp() {
  const {
    loading,
    userInfo,
    error,
    success,
  } = useSelector(
    (state) => state.auth,
  );

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submitForm = (formData) => {
    if (formData.password !== formData.confirmPassword) {
      alert('Password mismatch');
    }
    formData.email = formData.email.toLowerCase();
    console.log('send register', formData);
    dispatch(registerUser(formData));
  };

  const uI = (
    <div className="">
      <div className="" style={{ border: '8px solid #4787C7', borderRadius: '15px' }}>
        <form className="grid grid-rows-4 px-16 py-6 gap-4 text-xl" onSubmit={handleSubmit(submitForm)}>
          <input
            className="w-56  grid-start-1 grid-end-2 text-xl p-4"
            type="text"
            placeholder="Email"
            name="email"
            {...register('email')}
            required
          />

          <input
            className="w-56 grid-start-2 grid-end-3 text-xl p-4"
            type="text"
            placeholder="Username"
            name="username"
            {...register('username')}
            required
          />

          <input
            className="w-56 grid-start-3 grid-end-4 text-xl p-4"
            type="password"
            placeholder="Password"
            name="password"
            {...register('password')}
            required
          />

          <input
            className="w-56 grid-start-3 grid-end-4 text-xl p-4"
            type="password"
            placeholder="Password"
            name="confirmPassword"
            {...register('confirmPassword')}
            required
          />

          <button className="relative z-0 h-12 rounded-full bg-blue-500 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-blue-500 active:scale-95 active:transition active:after:scale-x-125 active:after:scale-y-150 active:after:opacity-0 active:after:transition active:after:duration-500" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );

  return (

    <div className="flex justify-center items-center w-screen h-screen absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      { uI }
    </div>
  );
}

export default SignUp;
