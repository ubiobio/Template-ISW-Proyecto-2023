'use client';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/signin');
      }}
    >
      Cerrar session
    </button>
  );
};

export default Logout;
