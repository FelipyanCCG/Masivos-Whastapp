import { useRoutes, BrowserRouter } from 'react-router-dom';
import { useContext } from 'react';
import { ProtectedRoute } from '../../Utils/ProtectedRoute';
import { MasivosProvider } from '../../Context'
import { MasivosContext } from '../../Context';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { Navbar } from '../../Components/Navbar';
import { Home } from '../Home';
import { Menu } from '../Menu';
import './App.css';
import { Reportes } from '../Reportes';

const AppRoutes = () => {
  const context = useContext(MasivosContext);
  let routes = useRoutes([
    { path: '/Home', element: <ProtectedRoute canActivate={context.login}><Home /></ProtectedRoute> },
    { path: '/Menu', element: <ProtectedRoute canActivate={context.login}><Menu /></ProtectedRoute> },
    { path: '/Reportes', element: <ProtectedRoute canActivate={context.login}><Reportes /></ProtectedRoute> },
    { path: '/', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes
};

const App = () => {
  return (
    <BrowserRouter>
      <MasivosProvider>
        <AppRoutes />
        <Navbar />
      </MasivosProvider>
    </BrowserRouter>
  );
};

export default App;

