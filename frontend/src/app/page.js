import Logout from '@/components/Logout';
import PrivateRoute from '@/components/PrivateRoute';

export default function Home() {
  return (
    <PrivateRoute>
      <main>
        <h1>Home page</h1>
        <Logout />
      </main>
    </PrivateRoute>
  );
}
