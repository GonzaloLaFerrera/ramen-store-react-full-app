import { MdOutlineRamenDining } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Recipes = () => { 

    const navigate = useNavigate();

    return(
        <div>
            <h1 className="text-[#ec7c6a] text-3xl mb-16 text-center">Tasty Recipes!</h1>
            <div className="flex flex-col gap-14">
            {/* Tambien se podría componentizar */}
                <div className="bg-[#1F1D2B] text-gray-300 text-center p-8 rounded-xl flex flex-col items-center gap-2">
                    <img 
                        src="\img\recipes\recipe1.jpg" 
                        alt="recipe 1"  
                        className="w-36 h-36 object-cover -mt-20 rounded-full shadow-xl"
                    />
                    <h3 className="flex items-end text-[#ec7c6a] text-2xl">Traditional chicken ramen<MdOutlineRamenDining className="text-[#ec7c6a] text-2xl p-1"/></h3>
                    <h5>Chicken chashu shoyu ramen</h5>
                    <span className="text-xs text-gray-400 mt-4">Make this comforting Japanese noodle soup using pan-fried rolled chicken (chashu) and noodles in a delicious broth. Top with eggs and nori if you like</span>
                    <button 
                        className="bg-[#262837] text-[#ec7c6a] font-semibold border-[2px] border-gray-400 rounded-lg hover:bg-[#ec7c6a] hover:text-white hover:border-white transition-all p-2 mx-28 mt-4"
                        // onClick={() => navigate('/recipes/recipeDetail1')}
                        onClick={() => navigate('/recipeDetail1')}
                    >
                        Full Recipe!
                    </button>
                </div>
                <div className="bg-[#1F1D2B] text-gray-300 text-center p-8 rounded-xl flex flex-col items-center gap-2">
                    <img 
                        src="\img\recipes\recipe3.jpg" 
                        alt="recipe 1"  
                        className="w-36 h-36 object-cover -mt-20 rounded-full shadow-xl"
                    />
                    <h3 className="flex items-end text-[#ec7c6a] text-2xl">Basic home made ramen<MdOutlineRamenDining className="text-[#ec7c6a] text-2xl p-1"/></h3>
                    <h5>Cheat's ramen noodle soup</h5>
                    <span className="text-xs text-gray-400 mt-4">Use chicken, ramen noodles, spinach, sweetcorn and eggs to make this warming soup, ideal for when you crave something comforting yet light and wholesome.</span>
                    <button 
                        className="bg-[#262837] text-[#ec7c6a] font-semibold border-[2px] border-gray-400 rounded-lg hover:bg-[#ec7c6a] hover:text-white hover:border-white transition-all p-2 mx-28 mt-4"
                        // onClick={() => navigate('/recipes/recipeDetail2')}
                        onClick={() => navigate('/recipeDetail2')}
                    >
                        Full Recipe!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Recipes;