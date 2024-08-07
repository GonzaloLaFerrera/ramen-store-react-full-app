import {MdOutlineRamenDining}  from "react-icons/md";

const EmptyCart = () => {

    return (
        <>
            <div className="flex flex-col items-center mt-8 py-8 gap-6 bg-[#262837] text-gray-300 rounded-lg text-center">
                <h5 className="font-semibold text-base "> 
                    Cart's empty. Add your dishes here!
                </h5>
                <MdOutlineRamenDining className="text-[#ec7c6a] text-2xl"/>
            </div>
        </>
    )
}

export default EmptyCart;