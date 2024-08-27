import { MdOutlineRamenDining } from "react-icons/md";

const Stores = () => { 
    return(
        <div>
            <h1 className="text-[#ec7c6a] text-3xl mb-4 text-center">Our Stores!</h1>
            <div className="flex flex-col gap-14">
            {/* Tambien se podría componentizar */}
                <div className="bg-[#1F1D2B] text-gray-300 text-center p-8 rounded-xl flex flex-col items-center gap-2">
                    <h3 className="flex items-end text-[#ec7c6a] text-2xl">Villa Crespo's Store<MdOutlineRamenDining className="text-[#ec7c6a] text-2xl p-1"/></h3>
                    <h5>Our first and originary ramen store</h5>
                    <h5 className="text-gray-400">Lavalleja 177, Villa Crespo</h5>
                    <span className="text-xs text-gray-400 mt-4">Visit our first traditional ramen store, located at the iconic Villa Crespo's neighbourhood. Close to Centenario's Park, it's an ideal plan to visit us after a walk and a visit to the koi's lake at the park.</span>
                    <img 
                        src="public\img\maps\map1.jpg"
                        alt="store 1"  
                        className="w-full h-36 object-cover shadow-xl"
                    />
                    
                </div>
                <div className="bg-[#1F1D2B] text-gray-300 text-center p-8 rounded-xl flex flex-col items-center gap-2">
                    <h3 className="flex items-end text-[#ec7c6a] text-2xl">Palermo's Store<MdOutlineRamenDining className="text-[#ec7c6a] text-2xl p-1"/></h3>
                    <h5>A modern asian food experience</h5>
                    <h5 className="text-gray-400">Arenales 3530, Palermo.</h5>
                    <span className="text-xs text-gray-400 mt-4">Located at the heart of Palermo, one of the most beautiful districts in Buenos Aires. A unique mixture of tradition and modernity in one place.</span>                    
                    <img 
                        src="public\img\maps\map2.jpg" 
                        alt="store 2"  
                        className="w-full h-36 object-cover shadow-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default Stores;