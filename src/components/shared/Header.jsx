import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            {/* Title and Search */}
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="text-2xl text-gray-300">Koi Dragon Ramen</h1>
                <p className="text-gray-500">Martes 12 de Marzo del 2024</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300"/>
                  <input type="text" placeholder="Search" className="bg-[#1F1D2B] rounded-lg outline-none text-gray-300 py-2 w-full pl-8 pr-4"/>
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="relative text-gray-300 flex items-center justify-between border-b mb-6 md:justify-start md:gap-8">
              {/* <a href="#" className="py-2 pr-4 text-[#ec7c6a] before:w-20 before:h-[1px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]">Hot Dishes</a> */}
              <Link to={'/'} className="py-2 pr-4 text-[#ec7c6a] before:w-20 before:h-[1px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]">Hot Dishes</Link>
              <Link to={'/coldDishes'} className="py-2 pr-4">Cold Dishes</Link>
              <Link to={'/grill'} className="py-2 pr-4">Grill</Link>
              <Link to={'/desserts'} className="py-2 pr-4">Desserts</Link>
            </nav>
          </header>
    )
};

export default Header;