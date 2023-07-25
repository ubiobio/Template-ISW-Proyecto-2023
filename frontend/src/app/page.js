'use client';
import Logout from '@/components/Logout';
import PrivateRoute from '@/components/PrivateRoute';
import useAuth from '@/hooks/useAuth';

export default function Home() {
  const { user } = useAuth();

  return (
    <PrivateRoute>
      <main>
        <h1>Home page</h1>
        <p>Iniciado sesion como: {user?.name}</p>
        <Logout />
      </main>
    </PrivateRoute>
  );
}
