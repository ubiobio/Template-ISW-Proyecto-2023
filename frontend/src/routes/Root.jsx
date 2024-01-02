import { Outlet as Children } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth.service';
import { AuthProvider, useAuth } from '../context/AuthContext';

function Root() {
  return (
    <AuthProvider>
      <PageRoot />
    </AuthProvider>
  );
}

function PageRoot() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const { user } = useAuth();

  const isAdmin = user.roles[0].name === 'admin';

  return (
    <div>
      <div>
        {isAdmin ? (
          <button
            style={{ marginRight: '5px' }}
            onClick={() => navigate('/products')}
          >
            Ver productos
          </button>
        ) : (
          <span> Esto solo lo ve un admin</span>
        )}
        <button onClick={() => navigate('/')}>Home</button>
        <p>Estas logeado como: {user.email}</p>
        <button onClick={handleLogout}>Cerrar sesion</button>
      </div>
      <Children />
    </div>
  );
}

export default Root;
