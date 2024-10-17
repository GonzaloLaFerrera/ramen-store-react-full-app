import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";


//Estilos para el NavLink
  const activeLink = 'py-2 pr-4 text-[#ec7c6a] uppercase underline underline-offset-10 decoration-2';

  const inactiveLink = "py-2 pr-4";


const Header = () => {

  

    return (
        <header>
            {/* Title and Search */}
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="text-2xl text-gray-300">Koi Dragon Ramen</h1>
                <p className="text-gray-500">Martes 12 de Marzo del 2024</p>
              </div>              
              {/* Search Bar */}
              <SearchBar />
            </div>
            {/* Tabs */}
            <nav className="relative text-gray-300 flex items-center justify-between border-b  mb-6 md:justify-start md:gap-8">
              <NavLink 
                to='/' 
                className={({ isActive }) => isActive ? activeLink : inactiveLink }
              >
                Hot Dishes
              </NavLink>
              <NavLink 
                to='/coldDishes' 
                className={({ isActive }) => isActive ? activeLink : inactiveLink }
              >
                Cold Dishes
              </NavLink>
              <NavLink 
                to='/grill' 
                className={({ isActive }) => isActive ? activeLink : inactiveLink }
              >
                Grill
              </NavLink>
              <NavLink 
                to='/desserts' 
                className={({ isActive }) => isActive ? activeLink : inactiveLink }
              >
                Desserts
              </NavLink>
            </nav>
          </header>
    )
};

export default Header;