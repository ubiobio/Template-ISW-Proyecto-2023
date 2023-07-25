'use client';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();

  // Verificar si el usuario ha iniciado sesión
  if (!token) {
    //Si no hay token, muestra un mensaje de error
    return (
      <>
        <main>
          <p>Debes iniciar sesion para ver esta pagina</p>
          <br />
          <Link href="/signin">
            <span>Ir al login </span>
          </Link>
        </main>
      </>
    );
    //Recomendacion:
    //Pueden mostrar un mensaje de carga o componente de carga mientras se redirecciona
  }

  // Si el usuario ha iniciado sesión, renderizar los componentes hijos
  return <>{children}</>;
};

export default PrivateRoute;
