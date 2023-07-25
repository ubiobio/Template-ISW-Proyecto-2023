'use client';
import { useEffect } from 'react';

// Este hook se encarga de obtener el token y el usuario del localStorage
const useAuth = () => {
  let auth = {
    token: null,
    user: null,
  };

  if (typeof window !== 'undefined') {
    auth.token = localStorage.getItem('token');
    auth.user = JSON.parse(localStorage.getItem('user'));
  }

  useEffect(() => {
    if (!auth.token) {
      // Aquí pueden realizar acciones adicionales si el token no está almacenado en el localStorage
      console.log('El token no está almacenado en el localStorage');
    }
  }, [auth.token]);

  return auth;
};

export default useAuth;
