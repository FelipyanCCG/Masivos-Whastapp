import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { MasivosContext } from '../../Context';

const Navbar = () => {
  const context = useContext(MasivosContext);
  const activeStyle = 'underline underline-offset-4';
  const name = context.userLogin?.attributes?.name;

  return (
    <nav className="bg-white shadow-md fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <ul className="flex items-center gap-6">
            <li className="font-semibold text-lg">
              <NavLink to="/Menu" className="text-blue-500 hover:underline">
                Masivos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Menu"
                className={`text-gray-500 hover:text-blue-500 hover:underline ${
                  activeStyle ? activeStyle : ''
                }`}
              >
                Menu
              </NavLink>
            </li>
          </ul>
          <ul className="flex items-center gap-6">
            <li className="text-gray-600">
              {name}
            </li>
            <li>
              <NavLink
                to="/"
                onClick={() => {
                  context.setLogin(false);
                }}
                className={`text-gray-500 hover:text-blue-500 hover:underline ${
                  activeStyle ? activeStyle : ''
                }`}
              >
                Log Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
