'use client';
import { useEffect } from 'react';

const useAuthToken = () => {
  const authToken = localStorage.getItem('token');

  useEffect(() => {
    if (!authToken) {
      // Aquí pueden realizar acciones adicionales si el token no está almacenado en el localStorage
      console.log('El token no está almacenado en el localStorage');
    }
  }, [authToken]);

  return authToken;
};

export default useAuthToken;
