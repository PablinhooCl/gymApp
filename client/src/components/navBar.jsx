import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useGetUsers } from './features/auth/apiSlice';
import { logout, login } from './features/auth/authSlice';
import './navBar.css';

function NavBar(setDisplay) {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userInfo = (user && user.user) ?? '';

  const handleDisplay = (prop) => {
    setDisplay = prop;
  };

  console.log(userInfo);
  return (
    <header>
      <div className="navMain">
        <div className="userOptions">
          <button>Your Routines </button>
          <button>Public Routines </button>
          <button>Exercises </button>
        </div>
        {(userInfo.status === 'admin' || userInfo.status === 'mod') && (
          <div className="">
            <button>Pending Exercise</button>
            <button>Update Exercise</button>
          </div>
        )}
        <div>
          <p>
            Welcome,
            {userInfo.username}
          </p>
          <p>PPic</p>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
