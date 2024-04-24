import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CalculadorCalorias from '../calculadorCal';
import NavBar from '../navBar';
import NotLoged from '../funcione/notLoged';

function Dashboard() {
  const notLoged = NotLoged();
  const [display, setDisplay] = useState('userInfo');
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <NavBar prop={setDisplay} />
  );
}

export default Dashboard;
