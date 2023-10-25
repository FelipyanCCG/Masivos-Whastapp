import { NavLink } from 'react-router-dom'


const Navbar = () => {
  
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Masivos
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            DiBanka
          </NavLink>
        </li>
        
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          Andres@Dev
        </li>
        <li>
        <NavLink
            to='/sing-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Log Out
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }