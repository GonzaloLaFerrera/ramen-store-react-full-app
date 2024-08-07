import { RiHome6Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { PiPizzaLight } from "react-icons/pi";
import { CiMail, CiBellOn } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
import { GiCirclingFish } from "react-icons/gi";
import { Link } from "react-router-dom";

const Sidebar = ( props ) => {
    
  const { showMenu } = props;

    return (
        //<div showMenu={showMenu} className="bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-4 rounded-tr-xl rounded-br-xl z-50 -left-full">
        <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-4 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
            <div>
                <ul className="pl-4">
                    <li className="text-[#ec7c6a] p-4 pr-2 mr-1 mt-2 mb-6 border border-red-300 rounded-full"><GiCirclingFish className=" text-6xl" /></li>
                    <li className="bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl">
                        <Link to='/' className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white">
                            <RiHome6Line className="text-2xl"/>
                        </Link>
                    </li>
                    <li className="p-4 rounded-tl-lg rounded-bl-xl hover:bg-[#262837] group transition-colors">
                        <a href="#" className="p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors">
                            <PiPizzaLight className="text-2xl"/>
                        </a>
                    </li>
                    <li className="p-4 rounded-tl-lg rounded-bl-xl hover:bg-[#262837] group transition-colors">
                        <a href="#" className="p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors">
                            <CiMail className="text-2xl"/>
                        </a>
                    </li>
                    <li className="p-4 rounded-tl-lg rounded-bl-xl hover:bg-[#262837] group transition-colors">
                        <a href="#" className="p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors">
                            <CiBellOn className="text-2xl"/>
                        </a>
                    </li>
                    <li className="p-4 rounded-tl-lg rounded-bl-xl hover:bg-[#262837] group transition-colors">
                        <Link to='/adminLogin' className="p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors">
                            <IoSettingsOutline className="text-2xl"/>
                        </Link>
                    </li>
                </ul> 
            </div>
            <div>
                <ul className="pl-4">
                    <li className="p-4 rounded-tl-lg rounded-bl-xl hover:bg-[#262837] group transition-colors">
                            <a href="#" className="p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors">
                                <IoExitOutline className="text-2xl"/>
                            </a>
                        </li>
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;