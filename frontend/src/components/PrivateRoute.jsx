'use client';
import useAuthToken from '@/hooks/useAuthToken';
import Link from 'next/link';

const PrivateRoute = ({ children }) => {
  const authToken = useAuthToken();

  // Verificar si el usuario ha iniciado sesión
  if (!authToken) {
    //Si no hay token, muestra un mensaje de error
    return (
      <>
        <main>
          <p>Debes iniciar sesion para ver esta pagina</p>
          <Link href="/signin">
            <button>Ir al login </button>
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
