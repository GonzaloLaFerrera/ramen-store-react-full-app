import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div className="bg-[#262837] w-full min-h-screen flex flex-col p-2 gap-1">
            <div className="bg-[#1F1D2B] text-gray-300 text-center p-8 rounded-xl flex flex-col items-center gap-2">
                <h1 className="text-[#ec7c6a] text-2xl">404 Not Found Mostri!</h1>
                <p className="text-gray-200 text-xl">"Page not found"</p>
                <p className="text-gray-300">{error.error.message || error.statusText }</p>
                <button className="bg-[#262837] text-[#ec7c6a] font-semibold border-[2px] border-gray-400 rounded-lg hover:bg-[#ec7c6a] hover:text-white hover:border-white transition-all p-2 mx-28 mt-4">
                    <Link to='/'>Go back to Home</Link>
                </button>
            </div>
        </div>
    )
}

export default NotFound;