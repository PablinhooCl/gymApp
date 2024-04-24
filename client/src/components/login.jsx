import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './features/auth/authActions';

function Login(onOff) {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  console.log(user);
  console.log(isAuthenticated);

  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  const loginStyle = onOff ? 'shown' : 'hidden';

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [navigate, user]);

  return (
    <div className={`${loginStyle}`}>
      <form
        className="grid grid-rows-3 gap-4 p-8 box-border"
        action="submit"
        onSubmit={handleSubmit(submitForm)}
        style={{ border: '8px solid #4787C7', borderRadius: '15px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      >
        <input
          type="text"
          {...register('email')}
          required
          placeholder="Email"
          name="email"
        />
        <input
          type="password"
          {...register('password')}
          required
          placeholder="Password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
