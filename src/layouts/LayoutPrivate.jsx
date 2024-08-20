import { Outlet } from "react-router-dom";

const LayoutPrivate = () => { 
    return(
        <>
            <div className="bg-[#262837] w-full min-h-screen md:p-2 lg:p-2">
                <div className="flex flex-col bg-slate-400 pb-8">
                    <h1 className="text-2xl text-gray-200 ml-2">Koi Dragon Ramen</h1>
                    <p className="text-gray-300 ml-2">Martes 12 de Marzo del 2024</p>
                    <h1 className="text-2xl text-gray-200 text-center m-6">Admin Login - Private Layout</h1>    
                <div className="bg-[#1F1D2B] m-2 p-2 rounded-lg">
                    <Outlet />
                </div>
                </div>
            </div>
        </>
    ) 
};

export default LayoutPrivate;