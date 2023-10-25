import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { MasivosContext } from '../../Context'


const Navbar = () => {
  const context = useContext(MasivosContext)
  const activeStyle = 'underline underline-offset-4'
  let name = context.userLogin && context.userLogin.attributes ? context.userLogin.attributes.name : null;



  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/Menu'>
            Masivos
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Menu'

            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Menu
          </NavLink>
        </li>

      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          {name}
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => {
              context.setLogin(false);
              
            }}
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