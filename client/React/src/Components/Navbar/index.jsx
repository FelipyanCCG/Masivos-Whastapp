import { NavLink } from 'react-router-dom';
import { useContext , useState, useEffect} from 'react';
import { MasivosContext } from '../../Context';
import Logoh from '../../assets/logo-header.png';
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";

const Navbar = () => {
  const context = useContext(MasivosContext);
  const activeStyle = 'underline underline-offset-4';
  const name = context.userLogin?.attributes?.name;

    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    }, []);


  return (
    context.login ? (
      <nav className="bg-[#0096C8] fixed z-10 top-0 w-full h-24 text-sm font-light justifiy-between items-center flex">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <ul className="flex items-center">
            <li className="font-semibold text-lg">
              <NavLink to="/Menu" className="text-blue-500 hover:underline">
                <img src={Logoh} className="w-24" alt="Logo" />
              </NavLink>
            </li>
            <li>
            {isScrolled && context.homeDataClient.attributes.image ? (
                <img 
                src={context.homeDataClient.attributes.image} 
                className="w-12" alt="Logo" /> ) 
                : null
              }
            </li>
            <li>
            {isScrolled ? context.plantilla : null }
            </li>
          </ul>
          <ul className="flex items-center gap-6">
            <li className="text-white flex items-center gap-2 text-xl font-bold">
            <FaUserCircle />
              {name}
            </li>
            <li>
              <NavLink
                to="/"
                onClick={() => {
                  context.setLogin(false);
                }}
                className="text-white text-3xl font-bold"
              >
                <HiOutlineLogout />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    ) : (
      null
    )
  );
}

export { Navbar };
