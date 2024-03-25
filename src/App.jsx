import { useState } from "react";

import { RiMenu2Fill,RiUser3Line, RiCloseLine, RiSearch2Line, RiArrowDownSLine, RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineAddBox } from "react-icons/md";
import { PiPizzaLight } from "react-icons/pi";

import Sidebar from "./components/shared/Sidebar";
import Orders from "./components/shared/Orders";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

const App = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
    
  const toggleMenu = () => {
    setShowOrder(false);  
    setShowMenu(!showMenu);
  };

  const toggleOrderMenu = () => {
    setShowMenu(false);
    setShowOrder(!showOrder);
};

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu Móvil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-300 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <MdOutlineAddBox />
        </button>
        <button onClick={toggleOrderMenu} className="p-2">
          <PiPizzaLight />
        </button>
        <button onClick={toggleMenu} className="text-white bg-[#ec7c6a] p-2 rounded-md">
          {showMenu ? <RiCloseLine /> : <RiMenu2Fill />}
        </button>
      </nav>
      <main className="pb-20 lg:pl-32 lg:pr-[450px] md:pb-0"> {/*"grid grid-cols-1 lg:pl-32 lg:grid-cols-8 pb-20 md:pb-0"*/}
        <div className="md:p-8 p-4"> {/* "lg:col-span-6 md:p-8 p-4" */}
          {/* Header */}
          <Header /> 
          {/* Title Content */}
          <div className="flex items-center justify-between mb-16">
              <h2 className="text-xl text-gray-300">Choose dishes</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg"><RiArrowDownSLine />Dine In</button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <Card 
              img="/img/Ramen1-noBg.png"
              title="Tokushima ramen"
              price="2.29"
              qty="20"
            />
            <Card 
              img="/img/Ramen7-noBg.png"
              title="Takaida ramen"
              price="4.29"
              qty="18"
            />
            <Card 
              img="/img/Ramen3-noBg.png"
              title="Hida Takayama ramen"
              price="3.49"
              qty="16"
            />
            <Card 
              img="/img/Ramen8-noBg.png"
              title="Osaka style ramen"
              price="3.00"
              qty="14"
            />
            <Card 
              img="/img/Ramen9-noBg.png"
              title="Tori-Paitan ramen"
              price="1.99"
              qty="20"
            />
            <Card 
              img="/img/Ramen6-noBg.png"
              title="Golden Shrimp ramen"
              price="3.59"
              qty="12"
            />
          </div>
        </div>
        <Orders showOrder={showOrder} setShowOrder={setShowOrder}/>
      </main>
    </div>
  )
};

export default App;