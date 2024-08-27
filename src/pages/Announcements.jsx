import { HiOutlineReceiptTax } from "react-icons/hi";
import { WiMoonFull } from "react-icons/wi";

const Announcements = () => {
    return (
        <div>
            <h1 className="text-[#ec7c6a] text-3xl mb-8 text-center">Announcements & Discounts!</h1>
            <div className="flex flex-col gap-6">
                {/* Tambien se podría componentizar */}
                <div className="bg-[#1F1D2B] text-gray-300 text-center p-8 rounded-xl flex flex-col items-center gap-2">
                    <h3 className="flex items-end text-[#ec7c6a] text-2xl">Special Discount!<span className="p-1"><HiOutlineReceiptTax /></span></h3>
                    <h5>Get this incredible 25% discount, available only for this weekend</h5>
                    <span className="text-xs text-gray-400 mt-4">Only throw this weekend, we offer a 25% discount on all ramen, hot and cold! You can use it for delivery or to dine in!</span>
                    <button className="bg-[#262837] text-[#ec7c6a] font-semibold border-[2px] border-gray-400 rounded-lg hover:bg-[#ec7c6a] hover:text-white hover:border-white transition-all p-2 mx-28 mt-4">Get it!</button>
                </div>
                <div className="bg-[#1F1D2B] text-gray-300 text-center p-8 rounded-xl flex flex-col items-center gap-2">
                    <h3 className="flex items-center text-[#ec7c6a] text-2xl">Red Moon Night<span className="p-1"><WiMoonFull /></span></h3>
                    <h5>Dine in this Thrusday 23rd at any of our restaurants</h5>
                    <span className="text-xs text-gray-400 mt-4">Next Thursday 23rd we're having a unique theme night at our locations. Music, Live painting, Red Moon ambience and characterizations. Can't miss it!</span>
                    <button 
                        className="bg-[#262837] text-[#ec7c6a] font-semibold border-[2px] border-gray-400 rounded-lg hover:bg-[#ec7c6a] hover:text-white hover:border-white transition-all p-2 mx-28 mt-4"
                    >Make Reservation
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Announcements;

