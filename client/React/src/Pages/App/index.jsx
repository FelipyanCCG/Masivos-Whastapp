import { useRoutes, BrowserRouter } from 'react-router-dom'
import {NotFound} from '../NotFound'
import {SignIn} from '../SignIn'
import {Navbar} from '../../Components/Navbar'
import {Home} from '../Home'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
  
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>

  )
}

export default App