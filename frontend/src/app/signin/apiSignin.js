/*
Explicacion de todo este codigo:
- Al iniciar sesion, se hace una peticion POST a la ruta /auth/signin, con el email del usuario.
- Si el email existe, se genera un token en el backend y se almacena en el localStorage.
- El token se decodifica para obtener el id del usuario.
- Se hace una peticion GET a la ruta /users/:id, con el id del usuario.
- Se almacena el usuario en el localStorage que puede ser utilizado desde el hook useAuth.

Disclaimer: Este codigo no es seguro, ya que el token se almacena en el localStorage y puede ser robado. 
Por lo que se recomienda utilizar cookies para almacenar el token en aplicaciones del mundo real.
Recuerden que este codigo es solo de ayuda para sus proyectos.
*/

import api from '@/api/rootAPI';
const ROOT = '/auth';
import jwtDecode from 'jwt-decode';

const getUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  if (response.status === 200) {
    return response.data.data;
  }
};

export const signin = async (email) => {
  const response = await api.post(`${ROOT}/signin`, {
    email,
  });
  const token = response.data.data.token;
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
    const { id } = jwtDecode(token);
    const user = await getUser(id);
    localStorage.setItem('user', JSON.stringify(user));
  }
  return response;
};
