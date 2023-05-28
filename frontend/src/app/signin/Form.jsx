'use client';
import { useState } from 'react';
import { signin } from './apiSignin';
import { useRouter } from 'next/navigation';

export const Form = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signin(email); // Utiliza la función 'signin' para realizar la solicitud de inicio de sesión
      // Manejar la respuesta de la solicitud aquí
      console.log(response);

      //Redireccional al home en nextjs
      if (response.status === 200) {
        router.push('/');
      }

      // Redireccionar a la página de inicio o realizar otras acciones después del inicio de sesión exitoso
    } catch (error) {
      console.error('Error en la solicitud de inicio de sesión:', error);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Correo electrónico:
        <input type="email" value={email} onChange={handleChangeEmail} />
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};
