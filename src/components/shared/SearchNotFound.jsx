import { MdOutlineRamenDining } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SearchNotFound = ({ text }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col gap-2 p-2 bg-[#1F1D2B] text-gray-300 rounded-lg text-center items-center">
                <MdOutlineRamenDining className="text-[#ec7c6a] text-2xl mt-4 "/>
                <h5 className="font-semibold text-base py-2 ">{text}</h5>
                <button
                        onClick={() => navigate('/')}
                        className="bg-[#1F1D2B] text-[#ec7c6a] font-semibold border-[2px] border-gray-400 rounded-xl hover:bg-[#ec7c6a] hover:text-white hover:border-white transition-all mx-24 my-6 py-2 px-2"
                >
                    Go Back
                </button>
            </div>
        </>
    )
}

export default SearchNotFound;