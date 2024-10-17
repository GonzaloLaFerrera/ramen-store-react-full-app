import { MdOutlineRamenDining } from "react-icons/md";
import RecipeFooter from "../components/shared/RecipeFooter";

const RecipeDetail2 = () => { 
    return (
        <div className="bg-[#1f1d2b] text-gray-300 p-8 rounded-xl flex flex-col gap-2">
            <img 
                src="\img\recipes\recipe3.jpg"  
                alt="recipe 2"  
                className="w-40 h-40 object-cover -mt-20 mb-2 rounded-full shadow-xl"
            />
            <h3 className="flex items-end text-[#ec7c6a] text-2xl">Basic home made ramen<MdOutlineRamenDining className="text-[#ec7c6a] text-2xl p-1"/></h3>
            <h5 className="text-base">Cheat's ramen noodle soup</h5>
            <span className="text-sm text-gray-400 -mt-2">Use chicken, ramen noodles, spinach, sweetcorn and eggs to make this warming soup, ideal for when you crave something comforting yet light and wholesome.</span>
            <h5 className="text-base mt-2">Ingredients</h5>
            <ul className="text-gray-400 text-sm list-disc list-inside">
                <li>700ml chicken stock</li>
                <li>3 garlic cloves, halved</li>
                <li>4 tbsp soy sauce, plus extra to season</li>
                <li>1 tsp Worcestershire sauce</li>
                <li>thumb-sized piece of ginger, sliced</li>
                <li>½ tsp Chinese five spice</li>
                <li>pinch of chilli powder</li>
                <li>1 tsp white sugar (optional)</li>
                <li>375g ramen noodles</li>
                <li>400g sliced cooked pork or chicken breast</li>
                <li>2 tsp sesame oil</li>
                <li>100g baby spinach</li>
                <li>4 tbsp sweetcorn</li>
                <li>4 boiled eggs, peeled and halved</li>
                <li>1 sheet dried nori, finely shredded</li>
                <li>sliced green spring onions or shallots</li>
                <li>sprinkle of sesame seeds</li>
            </ul>
            <h5 className="text-base mt-2">Method</h5>
            <ul className="text-gray-400 text-sm list-decimal list-inside flex flex-col gap-2 [&_li::marker]:font-bold">
                <li>Mix 700ml chicken stock, 3 halved garlic cloves, 4 tbsp soy sauce, 1 tsp Worcestershire sauce, a sliced thumb-sized piece of ginger, ½ tsp Chinese five spice, pinch of chilli powder and 300ml water in a stockpot or large saucepan, bring to the boil, then reduce the heat and simmer for 5 mins.</li>
                <li>Taste the stock – add 1 tsp white sugar or a little more soy sauce to make it sweeter or saltier to your liking.</li>
                <li>Cook 375g ramen noodles following the pack instructions, then drain and set aside.</li>
                <li>Slice 400g cooked pork or chicken, fry in 2 tsp sesame oil until just starting to brown, then set aside.</li>
                <li>Divide the noodles between four bowls. Top each with a quarter of the meat, 25g spinach, 1 tbsp sweetcorn and two boiled egg halves each.</li>
                <li>Strain the stock into a clean pan, then bring to the boil once again.</li>
                <li>Divide the stock between the bowls, then sprinkle over 1 shredded nori sheet, sliced spring onions or shallots and a sprinkle of sesame seeds. Allow the spinach to wilt slightly before serving.</li>
            </ul>
            <div className="flex mt-2">
                <h5 className="text-base">Enjoy!</h5>
                <MdOutlineRamenDining className="text-white text-2xl pl-1"/>
            </div>

            <RecipeFooter />
        </div>
    )
}

export default RecipeDetail2;