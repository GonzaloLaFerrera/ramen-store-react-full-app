import { RiDeleteBin6Line } from "react-icons/ri";

const OrderItem = (product) => {
    const { thumbnail, quantity, price, title } = product;

    return(
        <>
            {/* Product*/}
            <div className="bg-[#262837] p-4 mb-2 rounded-xl text-xs md:text-sm md:mr-8 lg:mr-2">
            <div className="grid grid-cols-6 md:gap-12 lg:gap-6">
            {/* Product Description*/}
            <div className="col-span-4 flex items-center gap-3 mb-4">
                <img src={thumbnail} alt="ramen1" className="w-10 h-10 object-cover"/>
                <div>
                <h5 className="md:text-sm text-xs">{title}</h5>
                <span className="text-xs text-gray-500">${price}-.</span>
                </div>
            </div>
            {/* Qty*/}
            <div className="col-span-1 pl-2"> {/* OJO que agregue un padding left para centrar */}
                <span className="bg-[#1F1D2B] py-1 px-3 rounded-lg ">{quantity}</span>
            </div>
            {/* Price*/}
            <div className="col-span-1">
                <span className="md:text-sm text-xs">${price*quantity}-.</span>
            </div>
            </div>
            {/* Note */}
            <div className="grid grid-cols-6 items-center gap-1 md:gap-12 lg:gap-6">
            <form action="" className="col-span-5">
                <input type="text" placeholder="Order Note..." className="bg-[#1F1D2B] py-2 px-4 rounded-lg w-full outline-none " />
            </form>
            <div className="col-span-1 text-center text-lg pr-4 md:mr-16 lg:mr-0"> {/* OJO agregue un mr para centar el icono */}
                <button className="border border-red-400 p-2 rounded-lg text-xs md:text-sm">
                <RiDeleteBin6Line className="text-red-400"/>
                </button>
            </div>
            </div>
        </div>    
    </>
    )
};

export default OrderItem;