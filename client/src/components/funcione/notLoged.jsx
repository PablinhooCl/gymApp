import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NotLoged = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
      setErrorMessage('Debes iniciar sesión para acceder a esta página.');
    }
  }, [isAuthenticated, navigate]);

  return errorMessage;
};

export default NotLoged;
