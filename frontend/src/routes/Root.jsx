import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <div>
      <h1>Aqui deberia ir un header</h1>
      <Outlet />
    </div>
  );
}

export default Root;
